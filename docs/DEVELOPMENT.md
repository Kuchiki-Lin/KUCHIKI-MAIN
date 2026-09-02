# Local Development

How to run KUCHIKI on your machine. If anything here is wrong or out of date, fix it in the
same change that made it wrong.

## TL;DR

```bash
npm install
cp .env.example .env.local
npm run emulators     # terminal 1 - needs a JDK, see prerequisites
npm run seed          # terminal 2 - one time, or whenever you want clean data
npm run dev:emulator  # terminal 2
```

Then open <http://localhost:3000> and sign in as `admin@kuchiki.local` / `password123`.

---

## Prerequisites

| Requirement | Why | Status on a fresh machine |
|---|---|---|
| **Node.js 20+** | Next.js 16 and the Firebase CLI | Verified working on v22.16.0 |
| **npm 10+** | — | Verified on 10.9.2 |
| **JDK 11 or newer, on `PATH`** | **The Firestore emulator is a Java process.** Without it `npm run emulators` fails. | ⚠️ **Often missing — see below** |

`firebase-tools` and `cross-env` are project devDependencies, so `npm install` provides them.
You do **not** need a global Firebase install, a Firebase account, or any credentials.

### ⚠️ The JDK requirement

This is the one genuine setup hurdle, and it is worth understanding rather than
trial-and-erroring.

The Firebase Emulator Suite is split by language. The **Auth** emulator is Node-based and
runs with no extra tooling — verified working here. The **Firestore** emulator is a Java
program. Because Firestore is this application's actual datastore, you need a JDK for any
meaningful local work.

Without one, `npm run emulators` fails immediately with:

```
Error: Could not spawn `java -version`. Please make sure Java is installed and on your system PATH.
```

Install a JDK:

```bash
winget install EclipseAdoptium.Temurin.21.JDK
```

macOS: `brew install --cask temurin`. Debian/Ubuntu: `sudo apt install default-jdk`.

**Open a new terminal afterwards** so the updated `PATH` is picked up, then confirm:

```bash
java -version
```

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create your environment file

```bash
cp .env.example .env.local
```

`.env.example` is a committed template containing **placeholders only**. `.env.local` is
gitignored (`.gitignore` line 29, `.env*.local`) — verified, so your real secrets cannot be
committed by accident.

The defaults in the template are configured for emulator mode and need no editing to get
started. Every variable is documented inline in `.env.example`.

### 3. Start the emulators

```bash
npm run emulators
```

Leave this running. It starts:

| Emulator | Port |
|---|---|
| Auth | 9099 |
| Firestore | 8080 |
| Emulator UI | <http://127.0.0.1:4000> |

The project id is `demo-kuchiki`. The `demo-` prefix is meaningful to Firebase: it guarantees
the SDKs **cannot** reach a real project, so local work can never touch production data even
if something is misconfigured.

### 4. Seed data

```bash
npm run seed
```

Creates three users and a realistic data set. Re-run any time to reset.

| Email | Password | Role |
|---|---|---|
| `admin@kuchiki.local` | `password123` | Has the `admin: true` custom claim |
| `creator@kuchiki.local` | `password123` | Owns the seeded surveys |
| `respondent@kuchiki.local` | `password123` | Has submitted a response |

Also created:

- `seed-survey-approved` — an approved, auto-marked survey with three questions
  (multiple choice, boolean with a sub-question, checkboxes)
- `seed-survey-unapproved` — pending approval, for testing the approval flow
- **Two responses to the same survey**, from two different people. This deliberately
  reproduces finding [B1](SECURITY-FINDINGS.md#b1) so the cross-participant leak can be seen
  and, later, verified as fixed.
- A product-testing questionnaire, a research request, and a digitization request

The seed script **refuses to run against anything but a loopback emulator** — a seed script
that can reach production is a loaded gun.

### 5. Run the app

```bash
npm run dev:emulator
```

<http://localhost:3000>. Confirm the wiring in the browser console:

```
[kuchiki] Firebase emulators connected — auth :9099, firestore :8080
```

---

## The scripts

| Script | What it does |
|---|---|
| `npm run dev` | Next dev server against whatever `.env.local` points at |
| `npm run dev:emulator` | As above, plus the server-side emulator variables the Admin SDK needs |
| `npm run emulators` | Auth + Firestore emulators and the emulator UI |
| `npm run seed` | Populate the emulators with test data |
| `npm run build` | Production build |
| `npm run start` | Serve a production build |
| `npm run lint` | ⚠️ Configured but there is no ESLint config for the app — see [TECH-DEBT.md](TECH-DEBT.md) L6 |

`dev` and `dev:emulator` differ in one way that matters: `dev:emulator` also sets
`FIREBASE_AUTH_EMULATOR_HOST` and `FIRESTORE_EMULATOR_HOST`, which are read by the **server
side** (`app/firebaseAdmin.js`) and by the seed script. The client side is controlled
separately by `NEXT_PUBLIC_USE_FIREBASE_EMULATOR` in `.env.local`.

---

## Working against a real Firebase project instead

Use this if you cannot install a JDK, or need to reproduce something environment-specific.

**Do not point local development at the production project.** Create a separate free-tier
project.

1. Create a new Firebase project; enable **Authentication → Email/Password** and **Firestore**.
2. Copy the web app config into `.env.local`.
3. Set `NEXT_PUBLIC_USE_FIREBASE_EMULATOR=false`.
4. For API routes that verify tokens, add a service account key as
   `FIREBASE_SERVICE_ACCOUNT_KEY` (single-line JSON). This is a real secret.
5. `npm run dev`.

⚠️ You must also deploy the Firestore rules and indexes to that project, or queries will
fail:

```bash
npx firebase deploy --only firestore --project <your-dev-project-id>
```

Note that `firestore.indexes.json` is currently **empty** while the app runs at least one
composite query — see [TECH-DEBT.md](TECH-DEBT.md) M4. Expect a `FAILED_PRECONDITION` error
on the results page with a console link to create the missing index. When that happens,
please add the index to `firestore.indexes.json` and commit it.

---

## Troubleshooting

**`Could not spawn 'java -version'`**
No JDK on `PATH`. See [the JDK requirement](#-the-jdk-requirement). Remember to open a new
terminal after installing.

**`FirebaseError: Firebase: Error (auth/invalid-api-key)`**
`.env.local` is missing or `NEXT_PUBLIC_FIREBASE_API_KEY` is empty. This also breaks
`npm run build`, which prerenders pages that import `firebaseConfig.js`.

**`503 — Email is not configured on this server`**
Expected. `RESEND_API_KEY` is intentionally blank in local development; the four email routes
degrade gracefully rather than crashing. Everything else works. Only set a key if you are
specifically working on email, and never a production one.

**Permission denied reading or writing Firestore**
Check `firestore.rules`. The emulator enforces them exactly as production does — which is the
point, and why it is the right place to develop the rules rewrite tracked as
[P1.2](ROADMAP.md).

**Port already in use**
Change the port in the `emulators` block of `firebase.json`, and update
`NEXT_PUBLIC_EMULATOR_AUTH_PORT` / `NEXT_PUBLIC_EMULATOR_FIRESTORE_PORT` in `.env.local` to
match. `app/firebaseConfig.js` reads both, falling back to 9099 and 8080.

**Emulator data disappeared**
Expected — emulator state is in memory and is discarded on shutdown. Re-run `npm run seed`.
To persist between runs: `npx firebase emulators:start --export-on-exit=./.emulator-data
--import=./.emulator-data`. Add `.emulator-data/` to `.gitignore` if you do this.

**Stale `.next` after switching between emulator and real project**
`rm -rf .next` and restart.

---

## Notes on files generated by tooling

Running `next dev` causes **Next.js 16 to auto-generate `AGENTS.md` and `CLAUDE.md`** in the
repository root. These were not written by a human. To stop it, set `agentRules: false` in
`next.config.mjs`. Decide whether you want to keep, edit, or delete them — they are currently
untracked.
