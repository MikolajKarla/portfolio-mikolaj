import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || ""

    let name: string | undefined
    let email: string | undefined
    let message: string | undefined

    if (contentType.includes("application/json")) {
      const body = (await request.json()) as Record<string, unknown>
      name = typeof body.name === "string" ? body.name : undefined
      email = typeof body.email === "string" ? body.email : undefined
      message = typeof body.message === "string" ? body.message : undefined
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const textBody = await request.text()
      const params = new URLSearchParams(textBody)
      name = params.get("name") || undefined
      email = params.get("email") || undefined
      message = params.get("message") || undefined
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData()
      name = (formData.get("name") as string) || undefined
      email = (formData.get("email") as string) || undefined
      message = (formData.get("message") as string) || undefined
    }

    const resendKey = process.env.RESEND_KEY
    if (!resendKey) {
      return NextResponse.json({ error: "Brak konfiguracji klucza RESEND_KEY." }, { status: 500 })
    }

    const resend = new Resend(resendKey)

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM || email || "no-reply@example.com",
      to: process.env.EMAIL_TO || "mikolajkarla@gmail.com",
      subject: `Zapytanie ze strony - ${name || "Nieznany"}`,
      html: `<p><strong>Imię:</strong> ${name || "Brak"}</p><p><strong>Email:</strong> ${email || "Brak"}</p><p><strong>Wiadomość:</strong><br />${(message || "").replace(/\n/g, "<br />")}</p>`,
    })

    return NextResponse.json({ message: "Email sent successfully", result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: `Failed to send email: ${String(error)}` }, { status: 500 })
  }
}