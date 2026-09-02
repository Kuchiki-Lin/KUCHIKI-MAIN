import { verifyIdToken } from "@/app/firebaseAdmin";

export async function requireUser(req) {
  const match = (req.headers.authorization || "").match(/^Bearer (.+)$/);
  if (!match) { const error = new Error("Authentication required"); error.statusCode = 401; throw error; }
  try { return await verifyIdToken(match[1]); }
  catch { const error = new Error("Invalid authentication token"); error.statusCode = 401; throw error; }
}

export async function requireAdmin(req) {
  const user = await requireUser(req);
  if (user.admin !== true) { const error = new Error("Administrator access required"); error.statusCode = 403; throw error; }
  return user;
}

export function apiError(res, error) {
  const status = error.statusCode || 500;
  return res.status(status).json({ error: status >= 500 ? "Request could not be completed" : error.message });
}
