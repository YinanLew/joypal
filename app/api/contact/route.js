// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please fill in all required fields.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Joypallogistics@gmail.com",
        pass: process.env.EMAIL_PASSWORD, // Store this in .env file
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "Joypallogistics@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully!",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
