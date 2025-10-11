import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const resume = formData.get("resume");

    // Validate input
    if (!name || !email || !resume) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate file
    if (!resume || !(resume instanceof File)) {
      return NextResponse.json(
        { error: "Please upload a valid resume file" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create transporter for Microsoft/Outlook
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_CONTACT_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    // Verify connection
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: process.env.SMTP_CONTACT_USER,
      to: process.env.SMTP_INFO_SEND_TO_USER,
      replyTo: email,
      subject: `New Career Application from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">New Career Application</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Resume:</strong> ${
              resume.name
            }</p>
            <p style="margin: 10px 0;"><strong>File Size:</strong> ${(
              resume.size / 1024
            ).toFixed(2)} KB</p>
          </div>
          <div style="background-color: #e0f2fe; padding: 15px; border-left: 4px solid #0284c7; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; color: #0c4a6e;">
              📎 The applicant's resume is attached to this email.
            </p>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            Reply directly to this email to respond to ${email}
          </p>
        </div>
      `,
      text: `
New Career Application

Name: ${name}
Email: ${email}
Resume: ${resume.name}
File Size: ${(resume.size / 1024).toFixed(2)} KB

The applicant's resume is attached to this email.

---
Reply to: ${email}
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
          contentType: resume.type,
        },
      ],
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Career application email sent:", info.messageId);

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to submit application";
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      typeof (error as any).code === "string"
    ) {
      const code = (error as any).code;
      if (code === "EAUTH") {
        errorMessage = "Authentication failed. Please try again.";
      } else if (code === "ESOCKET") {
        errorMessage = "Network error. Please check your connection.";
      } else if (code === "EMESSAGE") {
        errorMessage =
          "Invalid file format. Please upload a PDF or Word document.";
      }
    }

    return NextResponse.json(
      { error: errorMessage, details: (error as any).message ?? String(error) },
      { status: 500 }
    );
  }
}

// Configure API route to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};
