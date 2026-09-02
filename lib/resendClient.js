import { Resend } from "resend";

// Lazy Resend client.
//
// Each API route previously ran `new Resend(process.env.RESEND_API_KEY)` at
// module scope. The Resend constructor throws when the key is missing, so an
// unset variable crashed the route during import — before the handler, and
// before even the HTTP method check. A GET to /api/sendemail returned 500
// instead of the intended 405, and the error told the operator nothing useful.
//
// Deferring construction to call time means a missing key produces a clear 503
// and the rest of each handler behaves normally.
//
// See docs/SECURITY-FINDINGS.md H4.

let client = null;

/**
 * @returns {Resend} a memoised Resend client
 * @throws {Error & { statusCode: 503 }} when RESEND_API_KEY is not configured
 */
export function getResend() {
  if (client) return client;

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    const error = new Error(
      "Email is not configured on this server (RESEND_API_KEY is unset). See docs/DEVELOPMENT.md",
    );
    error.statusCode = 503;
    throw error;
  }

  client = new Resend(apiKey);
  return client;
}

/**
 * Resolve a Resend client, or write a 503 response and return null.
 * Lets a handler bail out in one line:
 *
 *     const resend = resolveResend(res);
 *     if (!resend) return;
 */
export function resolveResend(res) {
  try {
    return getResend();
  } catch (error) {
    res
      .status(error.statusCode || 503)
      .json({ error: error.message });
    return null;
  }
}
