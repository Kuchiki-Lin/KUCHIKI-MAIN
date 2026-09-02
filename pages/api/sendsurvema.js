// pages/api/sendsurvema.js
//API route for sending a survey link to multiple emails


import { resolveResend } from '@/lib/resendClient';

export default async function handler(req, res) {
  console.log("📥 [API] /sendsurvema called");

  if (req.method !== 'POST') {
    console.warn("❌ Invalid method:", req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resend = resolveResend(res);
  if (!resend) return;

  const { emails, surveyLink, title } = req.body;
  console.log("📝 Payload received:", { emails, surveyLink, title });

  if (!emails || !Array.isArray(emails) || emails.length === 0) {
    console.warn("❌ Missing or invalid emails list");
    return res.status(400).json({ error: 'Email list is required' });
  }

  if (!surveyLink) {
    console.warn("❌ Missing surveyLink");
    return res.status(400).json({ error: 'Survey link is required' });
  }

  try {
    const subject = `You've been invited to a survey: ${title}`;
    const html = `
      <div style="font-family: Arial, sans-serif;">
        <h2>${title}</h2>
        <p>You’ve been invited to take a survey. Click the link below to participate:</p>
        <a href="${surveyLink}" target="_blank">${surveyLink}</a>
      </div>
    `;

    console.log("📨 Preparing to send emails...");

    // Send email to each recipient
    const sendPromises = emails.map((email, idx) => {
      console.log(`📧 Sending email #${idx + 1} to: ${email}`);
      return resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: email,
        subject,
        html,
      });
    });

    await Promise.all(sendPromises);

    console.log("✅ All emails sent successfully.");
    return res.status(200).json({ success: true, message: 'Emails sent successfully' });

  } catch (error) {
    console.error('💥 Error sending emails:', error);
    return res.status(500).json({ error: 'Failed to send emails', detail: error.message });
  }
}
