import nodemailer from "nodemailer"
import {NextResponse } from 'next/server'

export async function POST(req: Request) {
    const {name, email, contact, message } = await req.json()

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.Email_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: `"Enquire Form" <${process.env.EMAIL_USER}>`,
            to: "himeshsrivastava123@gmail.com",
            subject: "New Enquire from Website",
            html:`
            <h2>New Enquiry Received</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Contact:</b> ${contact}</p>
            <p><b>Message:</b> ${message}</p>
            `,
        })
        
        return NextResponse.json({ sucess: true })
    } catch (error) {
        return NextResponse.json({ success: false, error})
    }
}
