//API route for sending emails when a client requests for research

import { resolveResend } from '@/lib/resendClient';

export default async function handler(req, res) {
  console.log("📨 API hit: /api/sendemail");

  if (req.method !== 'POST') {
    console.log("❌ Invalid request method:", req.method);
    return res.status(405).end();
  }

  const resend = resolveResend(res);
  if (!resend) return;

  const { topic, description, urgency, contact, route , flexibleDetails} = req.body;

  console.log("📥 Request body:", req.body);

  const subject = route
    ? "New Digitization Request Received"
    : "New Research Request Submitted";

  // Color based on urgency
  const urgencyColor = {
    '2-3 hours': '#dc2626',   // red
    '5-8 hours': '#f97316',   // orange
    '8-12 hours': '#eab308',  // yellow
    '12-24 hours': '#84cc16', // lime
    'Flexible': '#22c55e',    // green
  }[urgency] || '#6b7280';     // default gray

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #f9fafb; line-height: 1.6;">
    <h2 style="color: #1e293b;">📌 ${subject}</h2>
    <p><strong>🧠 Topic:</strong> ${topic}</p>
    <p style="white-space: pre-line;"><strong>📝 Description:</strong><br>${description.replace(/\n/g, '<br>')}</p>

    <p>
      <strong>⏱️ Urgency:</strong> 
      <span style="color: white; background-color: ${urgencyColor}; padding: 4px 10px; border-radius: 5px;">
        ${urgency}
      </span>
      ${urgency === '2-3 hours' || urgency === '5-8 hours' ? ' ⚠️' : ''}
    </p>

    ${urgency === 'Flexible' ? `<p><strong>🧾 Additional Details:</strong> ${flexibleDetails}</p>` : ''}

    <p><strong>📞 Contact:</strong> ${contact}</p>
    <hr style="margin: 20px 0;" />
    <p style="font-size: 0.9em; color: #6b7280;">Received on ${new Date().toLocaleString()}</p>
  </div>
`;


  try {
    console.log("🚀 Sending email using Resend...");
    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject,
      html: htmlContent,
    });

    console.log("✅ Email sent! Resend response:", response);
    res.status(200).json({ message: 'Email sent!', response });
  } catch (error) {
    console.error("❌ Resend error:", error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
}
