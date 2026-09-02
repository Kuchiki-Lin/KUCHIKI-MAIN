import admin from "firebase-admin";

// Firebase Admin initialisation is deliberately LAZY.
//
// Previously this module ran `JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)`
// at module scope, so a missing or malformed variable threw during import and
// every consuming API route returned an opaque 500 before its handler ran —
// including on requests that should have been rejected as 405.
//
// Now the failure is deferred to call time and carries a statusCode, so
// pages/api/_auth.js -> apiError() renders it as a clear 503.
//
// See docs/SECURITY-FINDINGS.md H4.

function configurationError(message) {
  const error = new Error(message);
  error.statusCode = 503;
  return error;
}

function getAdminApp() {
  if (admin.apps.length) return admin.apps[0];

  // Emulator mode: the Admin SDK talks to the local Auth emulator and needs no
  // service account, only a project id. The Firebase CLI sets
  // FIREBASE_AUTH_EMULATOR_HOST for processes it spawns; `npm run dev:emulator`
  // sets it for the Next.js dev server too.
  if (process.env.FIREBASE_AUTH_EMULATOR_HOST) {
    return admin.initializeApp({
      projectId:
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "demo-kuchiki",
    });
  }

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!raw) {
    throw configurationError(
      "FIREBASE_SERVICE_ACCOUNT_KEY is not set. This endpoint requires server-side Firebase credentials. See docs/DEVELOPMENT.md",
    );
  }

  let serviceAccount;
  try {
    serviceAccount = JSON.parse(raw);
  } catch {
    throw configurationError(
      "FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON. It must be the service account key as a single-line JSON string.",
    );
  }

  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const verifyIdToken = (token) => {
  const app = getAdminApp();
  return admin.auth(app).verifyIdToken(token);
};
