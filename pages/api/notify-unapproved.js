import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { surveys } = req.body;

    const unapproved = surveys.filter((s) => !s.approved);

    if (unapproved.length === 0) {
      return res.status(200).json({ message: "No unapproved surveys found" });
    }

    const html = `
      <h2 style="#FF1A1A;">Unapproved Surveys Notification</h2>
      <p>The following surveys are still pending approval:</p>
      <ul>
        ${unapproved
          .map(
            (s) =>
              `<li style="color: #FFEA00"><strong style="color: #2E86DE;">${s.title}</strong> by ${s.username} (${s.email})</li>`
          )
          .join("")}
      </ul>
    `;

    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Pending Survey Approvals",
      html,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: error.message });
  }
}
