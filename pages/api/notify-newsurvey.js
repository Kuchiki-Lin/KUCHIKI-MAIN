import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { title, userEmail, userId } = req.body;

    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `📝 New Survey Created: ${title}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2E86DE;">📢 New Survey Created</h2>
          
          <p><strong style="color: #1B1464;">Title:</strong> 
            <span style="color: #10AC84;">${title}</span>
          </p>
          
          <p><strong style="color: #1B1464;">Created by:</strong> 
            <span style="color: #0984E3;">${userEmail || "Unknown"}</span>
          </p>
          
          <p><strong style="color: #1B1464;">User ID:</strong> 
            <span style="color: #E58E26;">${userId}</span>
          </p>

          <p style="margin-top: 20px;">
            <span style="color: #2C3A47;">Check the admin dashboard to review and approve this survey.kuchiki.vercel.app/approvals</span>
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
