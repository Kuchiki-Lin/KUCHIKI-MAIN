# Security Findings

> Defensive security review of KUCHIKI, conducted 2026-08-22 against commit `abf29f2`.
> Verification was **non-destructive throughout**: static analysis, a local build with
> placeholder credentials, a local dev server pointed at a dummy Firebase project, and
> unauthenticated probes that could not and did not cause side effects.
> **No production system was touched and no email was sent.**

## Summary

| ID | Severity | Finding | Exploitation verified? |
|---|---|---|---|
| [C1](#c1) | **CRITICAL** | Hardcoded admin password shipped in the public JS bundle | ✅ Yes, locally |
| [C2](#c2) | **CRITICAL** | Firestore rules grant every authenticated user full read/write on the entire database | ⚠️ Static only — not tested against production |
| [C3](#c3) | **CRITICAL** | Four unauthenticated email-sending API routes | ✅ Yes, locally (no email sent) |
| [B1](#b1) | **HIGH** | Participants can see each other's answers and scores | ✅ Confirmed by code path |
| [B2](#b2) | **HIGH** | Public survey response is broken — unauthenticated respondents are rejected | ✅ Confirmed by code path + product owner |
| [H1](#h1) | **HIGH** | Survey approval is cosmetic; direct URL bypasses it | ✅ Confirmed by code path |
| [H2](#h2) | **HIGH** | Geo-restriction is client-side only; leaks respondent IPs to a third party | ✅ Confirmed by code path |
| [H3](#h3) | **HIGH** | Duplicate-submission prevention trivially bypassed | ✅ Confirmed by code path |
| [H4](#h4) | **HIGH** | Unguarded module-scope env parsing crashes API routes | ✅ Yes, locally |
| [M1](#m1) | MEDIUM | `pages/api/_auth.js` is served as a public route | ✅ Yes, locally |
| [M2](#m2) | MEDIUM | Unsigned Cloudinary upload preset exposed to the browser | ⚠️ Static only |
| [M3](#m3) | MEDIUM | No rate limiting, CAPTCHA or bot protection anywhere | ⚠️ Static only |
| [M4](#m4) | MEDIUM | No security headers, no CSP | ⚠️ Static only |
| [L1](#l1) | LOW | Sensitive data written to browser console in production builds | ✅ Yes, locally |
| [L2](#l2) | LOW | No password reset, no email verification, no password policy | ⚠️ Static only |

**Root cause pattern.** Twelve of these fourteen findings share one cause: *the application
enforces its rules in the browser*. There is no backend tier ([ARCHITECTURE.md](ARCHITECTURE.md) §2),
so every check — admin access, approval, geo-restriction, duplicate prevention — is React
state that the user controls. The only real enforcement boundary is `firestore.rules`, and
today it enforces almost nothing (C2). **Fixing C2 is the highest-leverage single change in
this codebase.**

---

<a name="c1"></a>
## C1 — Hardcoded admin password shipped in the public JavaScript bundle

**Severity:** CRITICAL
**Location:** [app/approvals/surveys/page.jsx:9](../app/approvals/surveys/page.jsx) — a module-level
`ADMIN_PASSWORD` string constant. Same pattern at
[app/approvals/qanvas/page.jsx:9](../app/approvals/qanvas/page.jsx) via `process.env.NEXT_PUBLIC_SECRETO`.

**Exploitation verified: YES** (locally, non-destructively).

Evidence, in three steps:

1. Ran `next build`, then searched the emitted client chunks. The literal password appears in
   `.next/static/chunks/2pgnh7--t_92z.js` — a file served publicly to every visitor. Anyone
   can retrieve it with `curl` and a `grep`; no authentication is involved.
2. Loaded `/approvals/surveys` in a browser against a local dev server and entered that
   password. **Reached the Admin Survey Dashboard.**
3. Confirmed this happened with **no Firebase sign-in at all** — the page has no
   `PrivateRoute` wrapper and makes no auth check of any kind.

> The password value is deliberately not reproduced in this document. It is identified by
> `file:line` above. **Treat it as fully compromised.** It is in Git history and in every
> build artifact ever produced. If this string is reused as a credential anywhere else —
> another service, a shared account, a personal login — rotate it there too. That question
> is currently **UNKNOWN** and needs a human answer.

The `qanvas` variant is no better. The `NEXT_PUBLIC_` prefix is Next.js's explicit marker for
"inline this into the client bundle" — `NEXT_PUBLIC_SECRETO` is exactly as public as a
hardcoded literal, just less obviously so.

**Both gates are architecturally void regardless of the password.** Access is granted by
`setAuthorized(true)` — plain React state. Anyone can flip it from React DevTools without
knowing any password. Worse, `qanvas` calls `fetchSurveyes()` in a `useEffect` on mount
([qanvas/page.jsx:62](../app/approvals/qanvas/page.jsx)), **before** the gate is evaluated —
so the data is fetched and sitting in memory even for a visitor who never enters a password.

**Impact.** Full access to the staff approval dashboards: read every survey and product
questionnaire in the system, together with the creator's name and email address harvested
from `users`, and approve any pending item. Combined with C2, the attacker also inherits
read/write on the entire database.

**Preconditions.** Network access to the site. Nothing else.

**Mitigation.** Delete both password constants. Gate on real authentication: wrap in
`PrivateRoute` and check the Firebase Auth `admin` custom claim using the already-written
`currentUserIsAdmin()` in [app/Modules/admin.js](../app/Modules/admin.js). Back it with a
Firestore rule so the check cannot be bypassed client-side (C2). Rotate the password
wherever else it is used.

**Safe to fix now:** yes — tracked as F1 in [ROADMAP.md](ROADMAP.md).

---

<a name="c2"></a>
## C2 — Firestore rules grant every authenticated user full read/write on the entire database

**Severity:** CRITICAL
**Location:** [firestore.rules](../firestore.rules)

```
match /{document=**} {
  allow read, write: if request.auth != null;
}
```

**Exploitation verified: NO** — deliberately. Confirming this against the live project would
mean reading or writing real user data, which is out of scope for a defensive review. The
rule text is unambiguous, so the finding stands on static evidence alone.

**Impact.** The recursive wildcard `{document=**}` covers every collection. Any person who
completes the open sign-up form at `/authentication/signup` obtains:

- **Read** on every other user's surveys, on every respondent's answers (including surveys
  promised as anonymous), on all `users` documents (email addresses and display names), and
  on all research and digitization requests.
- **Write and delete** on all of the same. Including setting `approved: true` on their own
  survey, bypassing the approval workflow entirely; editing or deleting another user's
  surveys; and tampering with or destroying collected response data.

This finding is why every other client-side control in the application is unenforceable. It
is also the reason C1 escalates from "embarrassing" to "total compromise".

**Preconditions.** A single self-service account. Sign-up is open and requires no email
verification (L2).

**Mitigation.** Replace with per-collection, ownership-based rules derived from the actual
access patterns catalogued in [DATA-MODEL.md](DATA-MODEL.md):

- `surveys` — owner (`resource.data.userId == request.auth.uid`) may read and write; the
  `approved` field writable only with an `admin` claim; approved surveys readable for
  response collection.
- `responses` — create per the survey's visibility rules; read restricted to the survey
  owner and admins.
- `users` — a user may read and write only their own document.
- `researchRequests`, `digitization` — create by the authenticated requester; read by admins.
- `productQuestions`, `productResponses` — mirror the survey rules.

⚠️ **One thing still to settle before deploying these rules:**

- **Does production contain documents without a `userId`?** Ownership rules would lock those
  out permanently. Check before deploying, and ship a migration note if so. Still **UNKNOWN**.

**Resolved 2026-08-22:** public, no-signup survey response **is** the intended product
behaviour (confirmed by the product owner). The rules must therefore support unauthenticated
respondents via Firebase anonymous auth. See [B2](#b2) — this confirmation also establishes
that response submission is currently broken for exactly the audience it was built for.

**Safe to fix now:** yes, with emulator-based rules tests and the two questions above
answered first. Tracked as F2 in [ROADMAP.md](ROADMAP.md).

---

<a name="c3"></a>
## C3 — Four unauthenticated, unvalidated email-sending API routes

**Severity:** CRITICAL
**Location:** [pages/api/sendemail.js](../pages/api/sendemail.js),
[sendsurvema.js](../pages/api/sendsurvema.js),
[notify-newsurvey.js](../pages/api/notify-newsurvey.js),
[notify-unapproved.js](../pages/api/notify-unapproved.js)

**Exploitation verified: YES** (locally; **no email was sent**).

I sent `POST` requests to `/api/sendsurvema` and `/api/notify-newsurvey` with no
`Authorization` header. **Neither returned 401 or 403.** Both proceeded past any notional
auth check and reached the Resend client, failing only because `RESEND_API_KEY` was unset in
my sandbox (`Error: Missing API key`, captured in the dev server log). With a key present
they would have sent. Static review confirms the handlers contain no authentication,
authorization, validation, or rate-limiting code of any kind.

**Impact, per route:**

- **`sendsurvema` is an open email relay.** It accepts a caller-supplied `emails[]` array of
  arbitrary length and a caller-supplied `surveyLink`, then sends to every address —
  from your verified Resend sending domain. An attacker can send unlimited phishing mail
  with your domain's reputation and deliverability behind it, pointing recipients at any URL
  they choose. This risks domain blacklisting and Resend account suspension in addition to
  the direct harm to recipients.
- **`sendemail`, `notify-newsurvey`, `notify-unapproved`** let anyone spam the internal
  `EMAIL_TO` inbox and forge notifications — fake "new survey created" alerts naming any user
  and email address, which is a plausible social-engineering vector against staff.

**HTML injection.** `sendemail` interpolates `topic`, `description` and `contact` straight
into the email HTML with no escaping ([sendemail.js:33-48](../pages/api/sendemail.js)); the
only transformation is `description.replace(/\n/g, '<br>')`, which is formatting, not
sanitisation. `notify-newsurvey` does the same with `title`, `userEmail` and `userId`, and
`notify-unapproved` with survey titles and user emails. A crafted value injects arbitrary
markup and links into staff email. Modern mail clients strip scripts, so this is
phishing-grade rather than XSS-grade — but it is attacker-controlled content rendered inside
a trusted internal notification.

**`notify-unapproved` also trusts the client for its data.** It filters the caller-supplied
`surveys` array rather than querying Firestore, so the email contents are entirely
attacker-controlled.

**Preconditions.** Knowledge of the endpoint path. These are public URLs.

**Mitigation.** Apply the auth helpers that **already exist and are wired to nothing**:

- Move [pages/api/_auth.js](../pages/api/_auth.js) to `lib/apiAuth.js` (see M1).
- `requireUser` on `sendemail`, `sendsurvema`, `notify-newsurvey`; `requireAdmin` on
  `notify-unapproved`.
- Switch client call sites to `authenticatedFetch` from
  [app/Modules/authfetch.js](../app/Modules/authfetch.js) — written for exactly this purpose.
- Validate input: email-format checks and a hard cap on `emails[]` length; reject
  non-allowlisted `surveyLink` origins.
- HTML-escape every interpolated user value.
- Have `notify-unapproved` query Firestore itself instead of trusting the request body.
- Add rate limiting.

**Safe to fix now:** yes — tracked as F3 in [ROADMAP.md](ROADMAP.md).

---

<a name="b1"></a>
## B1 — Participants can see each other's answers and scores

**Severity:** HIGH (confidentiality breach + correctness bug)
**Location:** [app/survpages/analysis/results/page.jsx:49-60](../app/survpages/analysis/results/page.jsx)

```js
const q = query(
  responsesRef,
  where("surveyId", "==", surveyId),
  orderBy("timestamp", "desc"),
  limit(1)
);
```

The query filters by **survey only**. There is no `userId` or `editableName` constraint. It
returns the most recent response *to that survey by anyone*, and the page renders it as the
current participant's result.

**Impact.** After respondent B submits, respondent A landing on or refreshing the results
page is shown **B's answers and B's score**, presented as their own. On a survey whose
questions are sensitive, this discloses one participant's answers to another. It is also
simply wrong: participants routinely see an incorrect score.

Note this breaks the anonymity promise from the opposite direction too — the `anonymous`
flag governs whether a *name* is collected, but the answers themselves leak regardless.

**Preconditions.** Two or more responses to the same survey. Normal operation.

**Mitigation.** Constrain the query to the current participant: by `userId` when signed in,
falling back to the submitted `editableName` for named surveys. Back it with the `responses`
read rule from C2 so the constraint is enforced server-side rather than trusted from the
client. No schema change required.

**Safe to fix now:** yes — tracked as F4 in [ROADMAP.md](ROADMAP.md).

---

<a name="b2"></a>
## B2 — Public survey response is broken in production

**Severity:** HIGH (functional outage of the core product loop)
**Location:** [firestore.rules](../firestore.rules) versus
[app/survpages/responseCol/page.jsx:505](../app/survpages/responseCol/page.jsx)

**Status: CONFIRMED 2026-08-22** by the product owner.

The intended behaviour is that survey respondents answer **without creating an account** —
surveys are distributed by link and by email (`/api/sendsurvema`) to people outside the
organisation.

But `responseCol` submits with `addDoc(collection(db, "responses"), …)` using the Firebase
Web SDK as whatever principal the browser currently is — and the Firestore rule requires
`request.auth != null`. A respondent who is not signed in is therefore rejected with
`PERMISSION_DENIED`.

The failure is silent to the user in a particularly unhelpful way: the write throws, the
generic `catch` fires, and the respondent sees only
`toast.error("Error submitting your response.")` with no indication of why or what to do.

**Impact.** Every response from a non-registered respondent is lost. Since the platform's
purpose is collecting survey data from external audiences, this is a functional outage of the
core product loop. The `anonymous` survey flag is especially affected — a survey explicitly
configured to accept anonymous answers cannot accept them from anonymous users.

**How this was missed.** Internal testing is done while signed in as a survey creator, where
`request.auth != null` holds and submission works correctly. The bug only appears for the
real audience.

**Preconditions.** A respondent who is not signed in. That is the normal case.

**Mitigation.** Two coordinated changes, both part of P1.2:

1. Sign respondents in with **Firebase anonymous auth** (`signInAnonymously`) on entry to
   `responseCol`, so every submission has a stable `request.auth.uid` without a signup step.
2. Scope the `responses` create rule to permit anonymous principals, while restricting reads
   to the survey owner and admins.

This also gives H3 (duplicate prevention) something real to key on, and gives B1 a reliable
`userId` to filter by.

**Verification available.** The seed data creates two responses to one survey, so both the
authenticated and unauthenticated paths can be exercised against the local emulator once the
rules are written.

---

<a name="h1"></a>
## H1 — Survey approval is cosmetic

**Severity:** HIGH
**Location:** [app/survpages/responseCol/page.jsx](../app/survpages/responseCol/page.jsx) (missing check);
compare [survey/page.jsx:2572, 2610, 2650](../app/survpages/survey/page.jsx) (where the check exists).

The three share-link buttons correctly refuse to produce a link for an unapproved survey.
But `responseCol` — the page that actually collects responses — **never reads
`survey.approved`**. Navigating directly to `/survpages/responseCol?surveyId=<id>` renders
the form and accepts submissions for a survey that staff have not approved.

Since survey IDs appear in URLs and the owner knows their own ID immediately after saving,
this requires no guesswork. The entire approval workflow — including the staff email
notifications built to support it — can be sidestepped by copying one URL.

**Mitigation.** Check `approved` in `responseCol` before rendering the form, and enforce it
in the `responses` create rule (C2) so a crafted client cannot bypass it.

**Safe to fix now:** yes — tracked as F5 in [ROADMAP.md](ROADMAP.md).

---

<a name="h2"></a>
## H2 — Geo-restriction is client-side only, and leaks respondent IPs

**Severity:** HIGH (access control) / privacy concern
**Location:** [app/survpages/responseCol/page.jsx:53-82](../app/survpages/responseCol/page.jsx)

The respondent's browser calls `https://ipapi.co/json`, and the result is compared against
the survey's `country`/`state` to set `accessDenied` in React state.

**Two distinct problems:**

1. **It is not an access control.** The lookup happens in the user's own browser; the
   response can be intercepted or the state flipped in DevTools. A VPN defeats it without
   any technical skill. If survey validity depends on regional targeting, that guarantee does
   not hold.
2. **It is an undisclosed third-party data flow.** Every respondent's IP address is sent to
   ipapi.co, a processor the respondent has not been told about and has not consented to.
   The survey subject matter may itself be sensitive. Under GDPR/UK GDPR an IP address is
   personal data; this likely needs a lawful basis, a privacy notice, and a processor
   agreement. **Worth a compliance review, not just an engineering fix.**

**Mitigation.** If geo-restriction must be enforced, do it server-side from the request IP in
an API route or Cloud Function, never in the browser. Separately, disclose the lookup to
respondents or remove it.

**Safe to fix now:** the privacy disclosure, yes. Real enforcement requires a server-side
component — deferred, see [ROADMAP.md](ROADMAP.md).

---

<a name="h3"></a>
## H3 — Duplicate-submission prevention is trivially bypassed

**Severity:** HIGH (data integrity)
**Location:** [responseCol/page.jsx:487-500 and 515](../app/survpages/responseCol/page.jsx)

Two mechanisms, both ineffective:

1. `localStorage.setItem("submitted-" + surveyId, "true")` — **this does nothing at all.**
   The key is written in three places (`responseCol/page.jsx:515`,
   `competeRanked/page.jsx:351`, `competeRanked2/page.jsx:314`) and **read in zero**
   (VERIFIED by grep). Set aside that `localStorage` is cleared by incognito mode, a
   different browser, or one DevTools command: no code path ever consults it, so it blocks
   nothing whatsoever today.
2. For named surveys, a Firestore query for a matching `surveyId` + `editableName`. Defeated
   by typing a different name; and there is no name verification, so names are unauthenticated
   free text anyway.

Anonymous surveys have **no duplicate protection at all**.

**Impact.** Survey results can be skewed arbitrarily by ballot-stuffing. For a platform whose
product is data quality, this undermines the core value proposition.

**Mitigation.** Requires deciding the respondent identity model first (the same open question
as C2). Options: require authentication and enforce one response per `userId` via a Firestore
rule; or issue signed single-use invitation tokens for emailed surveys. Both are real design
work — deferred, see [ROADMAP.md](ROADMAP.md).

---

<a name="h4"></a>
## H4 — Unguarded module-scope environment parsing crashes API routes

**Severity:** HIGH (availability)
**Location:** [app/firebaseAdmin.js:3](../app/firebaseAdmin.js) and all four email routes.

```js
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);  // firebaseAdmin.js:3
const resend = new Resend(process.env.RESEND_API_KEY);                        // each email route
```

Both run at **module scope**, before any handler. A missing or malformed variable throws
during import, so the route returns an opaque 500 with no usable diagnostic.

**Exploitation verified: YES** — observed locally. With the variables unset:
`SyntaxError: "undefined" is not valid JSON` from `firebaseAdmin.js`, and
`Error: Missing API key. Pass it to the constructor` from every Resend route. A `GET` to
`/api/sendemail` returns **500 instead of the intended 405**, because the module crashes
before the method check runs.

**Impact.** A single missing environment variable in a deployment takes the routes down with
an unactionable error. This is also the main reason the project is hard to run locally, which
in turn is why changes here have historically gone unverified.

**Mitigation.** Move initialisation inside the handler, or lazily initialise behind a guard,
and return a clear `503` naming the missing configuration. Fix as part of the local
environment work — tracked in [ROADMAP.md](ROADMAP.md).

---

<a name="m1"></a>
## M1 — `pages/api/_auth.js` is served as a public route

**Severity:** MEDIUM
**Location:** [pages/api/_auth.js](../pages/api/_auth.js)

**Exploitation verified: YES** — the build emits `.next/server/pages/api/_auth.js`, and
`GET /api/_auth` is routable.

Next.js special-cases only `_app`, `_document` and `_error`. A leading underscore does **not**
make a file in `pages/api/` private — every other file there becomes a public endpoint. This
one exports helper functions but no default handler, so it returns a 500.

**Impact.** Low direct impact today (it leaks only the fact that the endpoint exists). The
real risk is the false sense of privacy: a future maintainer may reasonably assume
underscore-prefixed files in `pages/api/` are not routable and put something sensitive there.

**Mitigation.** Move to `lib/apiAuth.js`, outside the routed directory. Do this as part of F3.

---

<a name="m2"></a>
## M2 — Unsigned Cloudinary upload preset exposed to the browser

**Severity:** MEDIUM
**Location:** [app/product/page.js:182-192 and 261-271](../app/product/page.js)

Uploads go straight from the browser to `api.cloudinary.com` using
`NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` — an unsigned preset, inlined into the client bundle
by design.

**Impact.** Anyone who reads the bundle can upload arbitrary files to your Cloudinary account
without any application account: storage and bandwidth cost abuse, and hosting of
attacker-chosen content on a domain associated with your brand. The application applies no
file-type or size restriction of its own.

**Mitigation.** Configure the preset in Cloudinary to restrict allowed formats, maximum file
size and target folder — mitigation without a code change. For stronger control, move to
signed uploads with the signature generated server-side by an authenticated API route (the
unused `cloudinary` server SDK is already a dependency). Deferred, see
[ROADMAP.md](ROADMAP.md).

---

<a name="m3"></a>
## M3 — No rate limiting, CAPTCHA or bot protection

**Severity:** MEDIUM
**Location:** application-wide.

No rate limiting on any API route, on Firestore writes, or on authentication attempts.
`react-google-recaptcha-v3` is installed as a dependency but **is imported nowhere** —
bot protection appears to have been planned and never implemented.

**Impact.** Amplifies C3 (unbounded email sending) and H3 (unbounded response submission);
allows automated account creation and Firestore write-cost abuse.

**Mitigation.** Rate-limit the API routes; implement the already-installed reCAPTCHA on
sign-up and on public response submission; use Firebase App Check for the Firestore path.

---

<a name="m4"></a>
## M4 — No security headers, no CSP

**Severity:** MEDIUM
**Location:** [next.config.mjs](../next.config.mjs) — an empty config object.

No `Content-Security-Policy`, `X-Frame-Options`/`frame-ancestors`, `X-Content-Type-Options`,
`Referrer-Policy`, or HSTS. The app is therefore framable (clickjacking — meaningful given
the one-click "Approve Survey" buttons) and has no defence-in-depth against script injection.

**Mitigation.** Add a `headers()` block to `next.config.mjs`. Low risk, but a CSP needs
testing against the app's inline styles, Ant Design, and its Cloudinary/ipapi/Firebase
origins — so treat CSP as its own task rather than a drive-by change.

---

<a name="l1"></a>
## L1 — Sensitive data logged to the browser console in production

**Severity:** LOW
**Location:** ~50 `console.log` sites across the app.

Several print whole documents: `qanvas/page.jsx:23,32,62` logs full survey and **user**
records (email + display name); `responseCol/page.jsx:503` logs the complete structured response;
`sendemail.js:17` logs the entire request body server-side. `product/page.js` and
`signup/page.jsx` log credential-adjacent objects.

There is no log stripping in the build, so these run in production.

**Impact.** Personal data in browser consoles and in server logs, where it may be retained by
log aggregation with a different access policy than the database.

**Mitigation.** Remove logging of user data; keep `console.error` for genuine errors. Consider
`compiler.removeConsole` in `next.config.mjs` for production builds.

---

<a name="l2"></a>
## L2 — Authentication feature gaps

**Severity:** LOW (individually) — but they compound C2.
**Location:** [app/authentication/](../app/authentication/)

- **No password reset flow.** `sendPasswordResetEmail` is never called. A user who forgets
  their password has no recovery path. (VERIFIED)
- **No email verification.** Sign-up grants immediate full access with an unverified
  address — which is what makes the C2 blast radius trivially reachable by anyone.
- **No password policy** beyond Firebase's 6-character default, and no strength feedback.
- **Raw Firebase error messages are shown to users** (`setError(error.message)` in both
  sign-in and sign-up), disclosing internal error codes and enabling account enumeration.

**Mitigation.** Add a password reset flow; require email verification before granting write
access (enforce in the C2 rules via `request.auth.token.email_verified`); map Firebase error
codes to friendly, non-enumerating messages.

---

## What was checked and found acceptable

- **XSS in the React app** — no `dangerouslySetInnerHTML` on user data anywhere. The two
  `innerHTML` uses in `cartoons2.jsx:16,74` assign the empty string to clear an SVG, which is
  safe. React's default escaping is doing its job. (VERIFIED)
- **SQL injection** — not applicable; Firestore only, no SQL anywhere.
- **Secrets committed to the repository** — none found beyond C1. No `.env` file is
  committed, `.gitignore` correctly covers `.env*.local`, and no API keys, tokens or private
  keys appear in tracked source. The `FIREBASE_SERVICE_ACCOUNT_KEY` is correctly kept as a
  non-public environment variable. (VERIFIED)
- **`NEXT_PUBLIC_FIREBASE_*` values** — these are *designed* to be public; Firebase Web API
  keys are identifiers, not secrets. Their exposure is correct and not a finding. Firestore
  rules, not key secrecy, are what protect the data — which is precisely why C2 matters.
- **Firebase Storage** — `storage.rules` denies all access and no code uses Storage. Correctly
  locked down. (VERIFIED)
- **Dependency vulnerabilities** — not audited in this pass. Run `npm audit` and review
  separately; see [ROADMAP.md](ROADMAP.md).
