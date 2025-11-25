import { error } from 'console';
import { NextResponse } from 'next/server';
import { Resend } from "resend"

export async function GET() {
    const resend = new Resend(process.env.RESEND_KEY);
    try{
        const { data,error} = await resend.emails.send({
            from: data.email,
            to: process.env.EMAIL_TO,
            subject: "Zapytanie ze strony",
            html: `<p>${data.message}</p>`,
        });
        if (error) {
            return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
        }
        return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Failed to send email" + err}, { status: 500 });
    }
    
}