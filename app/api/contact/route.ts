import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json()

    const data = await resend.emails.send({
      from: "TigerWeb <onboarding@resend.dev>",
      to: ["ndhlovutanaka02@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }
}

