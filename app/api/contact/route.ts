// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(req: Request) {
//   try {
//     const { name, email, phone, service, message } = await req.json()

//     const data = await resend.emails.send({
//       from: "TigerWeb <onboarding@resend.dev>",
//       to: ["ndhlovutanaka02@gmail.com"],
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <h2>New Contact Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Service:</strong> ${service}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     })

//     return Response.json({ success: true })
//   } catch (error) {
//     return Response.json({ error: "Failed to send email" }, { status: 500 })
//   }
// }

import { Resend } from "resend"
import { NextResponse } from 'next/server'

// Initialize Resend with proper error handling
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: "TigerWeb <onboarding@resend.dev>",
      to: ["ndhlovutanaka02@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Resend error:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS if needed
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}