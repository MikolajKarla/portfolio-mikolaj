import EmailTemplate from "@/components/email-template"
import { NextResponse } from "next/server"
import { Resend } from "resend"
import { render } from "@react-email/render"

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || ""

    let name: string | undefined
    let email: string | undefined
    let message: string | undefined
    let company: string | undefined

    if (contentType.includes("application/json")) {
      const body = (await request.json()) as Record<string, unknown>
      name = typeof body.name === "string" ? body.name : undefined
      email = typeof body.email === "string" ? body.email : undefined
      message = typeof body.message === "string" ? body.message : undefined
      company = typeof body.company === "string" ? body.company : undefined
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const textBody = await request.text()
      const params = new URLSearchParams(textBody)
      name = params.get("name") || undefined
      email = params.get("email") || undefined
      message = params.get("message") || undefined
      company = params.get("company") || undefined
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData()
      name = (formData.get("name") as string) || undefined
      email = (formData.get("email") as string) || undefined
      message = (formData.get("message") as string) || undefined
      company = (formData.get("company") as string) || undefined
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

    const toAddress = process.env.EMAIL_TO || 'mikolajkarla@gmail.com'

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
      to: toAddress,
      replyTo,
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