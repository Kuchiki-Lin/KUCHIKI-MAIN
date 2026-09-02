#!/usr/bin/env node
/**
 * Grant or revoke the Firebase Auth `admin: true` custom claim.
 *
 *     npm run set-admin -- admin@kuchiki.local
 *     npm run set-admin -- admin@kuchiki.local --revoke
 *     npm run set-admin -- --list
 *
 * This is the mechanism app/adminRoute.js, app/Modules/admin.js and
 * pages/api/_auth.js all check. It replaces the hardcoded password that used to
 * gate the /approvals/* pages — see docs/SECURITY-FINDINGS.md C1.
 *
 * Against the EMULATOR (default): no credentials needed. Run `npm run emulators`
 * first; this script picks up FIREBASE_AUTH_EMULATOR_HOST.
 *
 * Against a REAL project: set FIREBASE_SERVICE_ACCOUNT_KEY. The script prints
 * the target project and requires --yes so you cannot grant production admin by
 * accident.
 *
 * The user must sign out and back in — or wait for their ID token to refresh —
 * before a change takes effect. app/adminRoute.js force-refreshes the token, so
 * a page reload is usually enough.
 */

import admin from "firebase-admin";

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith("--")));
const positional = args.filter((a) => !a.startsWith("--"));

const email = positional[0];
const revoke = flags.has("--revoke");
const list = flags.has("--list");
const confirmed = flags.has("--yes");

const emulatorHost = process.env.FIREBASE_AUTH_EMULATOR_HOST;
const isEmulator = Boolean(emulatorHost);

function usage(message) {
  if (message) console.error(`\n  ${message}`);
  console.error(`
  Usage:
    npm run set-admin -- <email>            grant admin
    npm run set-admin -- <email> --revoke   revoke admin
    npm run set-admin -- --list             list users and their claims

  Against a real project, add --yes to confirm.
`);
  process.exit(1);
}

if (!list && !email) usage("No email given.");

// --- Initialise ----------------------------------------------------------

const projectId =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "demo-kuchiki";

if (isEmulator) {
  admin.initializeApp({ projectId });
  console.log(`\n  Target: EMULATOR ${emulatorHost}  (project ${projectId})`);
} else {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!raw) {
    usage(
      "Not running against an emulator and FIREBASE_SERVICE_ACCOUNT_KEY is unset.\n" +
        "  Start the emulators and use `npm run set-admin`, or provide a service account key.",
    );
  }

  let serviceAccount;
  try {
    serviceAccount = JSON.parse(raw);
  } catch {
    usage("FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON.");
  }

  console.log(
    `\n  Target: REAL PROJECT "${serviceAccount.project_id}"  <-- not an emulator`,
  );

  if (!confirmed) {
    console.error(
      "\n  Refusing to modify a real project without --yes.\n" +
        `  Re-run with:  npm run set-admin -- ${email ?? ""} --yes\n`,
    );
    process.exit(1);
  }

  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

const auth = admin.auth();

// --- Actions -------------------------------------------------------------

async function listUsers() {
  const { users } = await auth.listUsers(1000);
  if (users.length === 0) {
    console.log("\n  No users found.\n");
    return;
  }
  console.log(`\n  ${users.length} user(s):\n`);
  for (const u of users) {
    const isAdmin = u.customClaims?.admin === true;
    console.log(
      `    ${isAdmin ? "[admin]" : "       "}  ${(u.email || "(no email)").padEnd(32)} ${u.uid}`,
    );
  }
  console.log();
}

async function setClaim() {
  let user;
  try {
    user = await auth.getUserByEmail(email);
  } catch {
    console.error(`\n  No user found with email "${email}".\n`);
    process.exit(1);
  }

  const existing = user.customClaims || {};

  if (revoke) {
    const { admin: _removed, ...rest } = existing;
    await auth.setCustomUserClaims(user.uid, rest);
    console.log(`\n  Revoked admin from ${email} (${user.uid})\n`);
  } else {
    await auth.setCustomUserClaims(user.uid, { ...existing, admin: true });
    console.log(`\n  Granted admin to ${email} (${user.uid})\n`);
  }

  console.log("  They must reload the page for the new token to take effect.\n");
}

const run = list ? listUsers : setClaim;

run().catch((error) => {
  console.error("\n  Failed:", error.message || error, "\n");
  process.exit(1);
});
