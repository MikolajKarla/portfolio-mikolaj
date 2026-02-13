import EmailTemplate from "@/components/email-template"
import { NextResponse } from "next/server"
import { Resend } from "resend"
import { render } from "@react-email/render"

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5

type RateLimitEntry = { count: number; resetAt: number }

// Best-effort in-memory rate limit (works per runtime instance).
const rateLimitStore = new Map<string, RateLimitEntry>()

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim()
    if (first) return first
  }
  const realIp = request.headers.get("x-real-ip")
  if (realIp) return realIp
  return "unknown"
}

function checkRateLimit(ip: string): { ok: boolean; retryAfterSeconds?: number } {
  const now = Date.now()
  const existing = rateLimitStore.get(ip)

  if (!existing || now >= existing.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { ok: true }
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    const retryAfterSeconds = Math.max(1, Math.ceil((existing.resetAt - now) / 1000))
    return { ok: false, retryAfterSeconds }
  }

  existing.count += 1
  rateLimitStore.set(ip, existing)
  return { ok: true }
}

function isValidEmail(value: string): boolean {
  // Reasonable, non-strict email check.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function normalizeText(value: string | undefined): string | undefined {
  if (typeof value !== "string") return undefined
  const trimmed = value.trim()
  return trimmed.length ? trimmed : undefined
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)
    const rate = checkRateLimit(ip)
    if (!rate.ok) {
      return NextResponse.json(
        { error: "Za dużo prób. Spróbuj ponownie za chwilę." },
        {
          status: 429,
          headers: {
            "Retry-After": String(rate.retryAfterSeconds ?? 60),
          },
        }
      )
    }

    const contentType = request.headers.get("content-type") || ""

    let name: string | undefined
    let email: string | undefined
    let message: string | undefined
    let company: string | undefined
    let website: string | undefined

    if (contentType.includes("application/json")) {
      const body = (await request.json()) as Record<string, unknown>
      name = typeof body.name === "string" ? body.name : undefined
      email = typeof body.email === "string" ? body.email : undefined
      message = typeof body.message === "string" ? body.message : undefined
      company = typeof body.company === "string" ? body.company : undefined
      website = typeof body.website === "string" ? body.website : undefined
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const textBody = await request.text()
      const params = new URLSearchParams(textBody)
      name = params.get("name") || undefined
      email = params.get("email") || undefined
      message = params.get("message") || undefined
      company = params.get("company") || undefined
      website = params.get("website") || undefined
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData()
      name = (formData.get("name") as string) || undefined
      email = (formData.get("email") as string) || undefined
      message = (formData.get("message") as string) || undefined
      company = (formData.get("company") as string) || undefined
      website = (formData.get("website") as string) || undefined
    }

    // Honeypot: if filled, treat as spam and respond generically.
    const websiteValue = normalizeText(website)
    if (websiteValue) {
      return NextResponse.json({ message: "OK" }, { status: 200 })
    }

    name = normalizeText(name)
    email = normalizeText(email)
    message = normalizeText(message)
    company = normalizeText(company)

    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Podaj poprawne imię i nazwisko (2–100 znaków)." }, { status: 400 })
    }

    if (!email || !isValidEmail(email) || email.length > 254) {
      return NextResponse.json({ error: "Podaj poprawny adres e-mail." }, { status: 400 })
    }

    if (!message || message.length < 10 || message.length > 3000) {
      return NextResponse.json({ error: "Wiadomość musi mieć 10–3000 znaków." }, { status: 400 })
    }

    if (company && company.length > 200) {
      return NextResponse.json({ error: "Pole firma jest zbyt długie (max 200 znaków)." }, { status: 400 })
    }

    const resendKey = process.env.RESEND_KEY
    if (!resendKey) {
      return NextResponse.json({ error: "Brak konfiguracji klucza RESEND_KEY." }, { status: 500 })
    }

    const resend = new Resend(resendKey)
    const verifiedSender = process.env.EMAIL_FROM || 'onboarding@resend.dev'
    if (verifiedSender.endsWith('@gmail.com')) {
      return NextResponse.json({ error: 'Adres nadawcy musi pochodzić z domeny zweryfikowanej w Resend (np. contact@twojadomena.pl).' }, { status: 400 })
    }
    const replyTo = email && /.+@.+/.test(email) ? email : undefined


    const emailHtml = await render(
      EmailTemplate({
        firstName: name || "Nieznany",
        email: email || "Brak",
        message: message || "Brak wiadomości",
        company,
      })
    )

    const { data, error: resendError } = await resend.emails.send({
      from: verifiedSender,
      to: "contact@km-designs.pl",
      replyTo: replyTo,
      subject: `Zapytanie ze strony - ${name || "Nieznany"}`,
      html: emailHtml,
    })

    if (resendError) {
      console.error('Resend send error:', resendError)
      const errorMessage = resendError instanceof Error ? resendError.message : JSON.stringify(resendError)
      return NextResponse.json({ error: `Failed to send email: ${errorMessage}` }, { status: 502 })
    }

    return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 })
  } catch (error) {
    console.error('Email send handler error:', error)
    const fallbackMessage = error instanceof Error ? error.message : JSON.stringify(error)
    return NextResponse.json({ error: `Failed to send email: ${fallbackMessage}` }, { status: 500 })
  }
}