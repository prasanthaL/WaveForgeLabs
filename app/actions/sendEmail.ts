"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const data = await resend.emails.send({
      from: "Zentravo Labs <contact@zentravolabs.com>",
      to: "zentravolabs@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `You have received a new inquiry from the Zentravo Labs website contact form.

Name: ${name}
Email: ${email}

Message:
${message}
`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; max-width: 600px;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">New Inquiry Received</h2>
          <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-radius: 6px; border: 1px solid #cbd5e1;">
            <strong style="display: block; margin-bottom: 10px; color: #475569;">Message:</strong>
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #334155;">${message}</p>
          </div>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend API error:", data.error);
      return { success: false, error: data.error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Exception in sendEmail action:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
