# Technical Debt

> Maintainability, performance and correctness issues that are **not** security findings
> (those live in [SECURITY-FINDINGS.md](SECURITY-FINDINGS.md)).
>
> Each entry records *why it probably exists*, *what depends on it*, and *the risk of
> changing it* — because the point of this document is to prevent well-intentioned
> refactoring from breaking working behaviour. **Nothing here should be "fixed" reflexively.**

## Priority summary

| ID | Severity | Issue | Blast radius |
|---|---|---|---|
| [D1](#d1) | HIGH | Question-to-response matching by fuzzy text comparison | Data integrity, all analytics |
| [M3](#m3) | MEDIUM | N+1 and serial Firestore queries on dashboards | Performance, cost |
| [M4](#m4) | MEDIUM | Composite indexes not in version control | Breaks new environments |
| [M5](#m5) | MEDIUM | Tailwind `darkMode` never configured — all `dark:` variants inert | All dark-mode styling |
| [D2](#d2) | MEDIUM | `survey/page.jsx` is a 2,778-line god component | Every survey change |
| [D3](#d3) | MEDIUM | Timestamps stored as ISO strings, sorted client-side | Performance, correctness |
| [L1](#l1) | LOW | Committed merge-conflict markers in `README.md` | Developer onboarding |
| [L2](#l2) | LOW | Dead code and dead configuration | Comprehension cost |
| [L3](#l3) | LOW | 12 unused dependencies | Bundle size, supply chain |
| [L4](#l4) | LOW | `window.location.reload()`, `alert()`, ~50 `console.log` | UX and hygiene |
| [L5](#l5) | LOW | Near-duplicate page pairs (1,684 lines) | Change amplification |
| [L6](#l6) | LOW | No tests of any kind | Everything |

---

<a name="d1"></a>
## D1 — Question-to-response matching by fuzzy text comparison

**Severity:** HIGH — this is a latent data-integrity bug, not merely untidy code.

Responses are stored in a map **keyed by the question's text**
(`"1. How satisfied are you?"`), because `buildStructuredResponse`
([responseCol/page.jsx:321-345](../app/survpages/responseCol/page.jsx)) builds keys from a
positional label plus the question string. Persisted questions carry **no stable `id`**.

Both analysis pages therefore reverse-engineer the association at read time.
`findMatchingKey` ([analysis/admin/page.jsx:39-47](../app/survpages/analysis/admin/page.jsx))
tries an exact normalised match, then falls back to a **bidirectional substring match**.

**Why it exists.** Almost certainly convenience: the human-readable key made the stored
document easy to eyeball during development, and the survey builder generates question IDs
only in local React state (`Date.now() + Math.random()`), never persisting them.

**What depends on it.** Every response document ever written, plus `analysis/results`,
`analysis/admin`, `surveyResponses`, and the auto-marking score calculation.

**Failure modes:**
1. Editing a question's wording after responses exist silently breaks the mapping — old
   responses stop matching, and the analytics quietly under-report rather than erroring.
2. The substring fallback can mis-attribute answers when one question's text contains
   another's (e.g. *"Do you use the product?"* vs *"Do you use the product daily?"*).
3. Reordering questions changes the positional prefix and breaks the key.

**Risk of changing it.** High. The correct fix — persist a stable `questionId` and key
responses by it — is a **breaking schema change requiring migration of existing response
documents**. Do not attempt it as a side effect of another task. It needs its own plan, a
backfill script, and a dual-read compatibility period.

---

<a name="m3"></a>
## M3 — N+1 and serial Firestore queries on dashboards

**Severity:** MEDIUM (performance and billing)

[dashboard/page.jsx:130-136](../app/dashboard/page.jsx) and
[responses/page.jsx:34-53](../app/responses/page.jsx) both do this:

```js
for (const survey of userSurveys) {
  const responses = await fetchSurveyResponses(survey.id);  // one round trip per survey
  counts[survey.id] = responses.length;                      // ...only to call .length
  totalResponses += responses.length;
}
```

Three compounding problems:

1. **N+1** — one query per survey instead of one query for all of them.
2. **Serial** — `await` inside a `for` loop, so latency is the *sum* of every round trip
   rather than the max. `Promise.all` alone would be a large improvement.
3. **Counting by download** — every matching response document is transferred purely to read
   `.length`. Firestore bills per document read. `getCountFromServer` exists for exactly this
   and reads a single aggregate.

`responses/page.jsx` does the whole thing **twice**, once for surveys and once for product
reviews, so the effect is doubled.

Compounding this, `fetchSurveyByUser` ([utilsfirebase.js:53-77](../app/Modules/utilsfirebase.js))
accepts a `limitCount` but applies it **after** fetching and sorting in JavaScript — so
`fetchSurveyByUser(uid, 5)` on the dashboard still downloads every survey the user owns. The
`limit` import from `firebase/firestore` is aliased in the imports and never used.

**Why it exists.** Straightforward incremental development; correct at small scale.

**Risk of changing it.** Low, and this is a genuinely safe, well-contained improvement — the
function signatures need not change. It is deferred only because security work comes first.

---

<a name="m4"></a>
## M4 — Composite indexes are not in version control

**Severity:** MEDIUM

[firestore.indexes.json](../firestore.indexes.json) is empty, but the code runs at least one
composite query requiring an index on `responses(surveyId ASC, timestamp DESC)`
([analysis/results/page.jsx:50-55](../app/survpages/analysis/results/page.jsx)).

**Why it exists.** Firestore surfaces a console link that creates the index on first failure;
that path never writes it back to the repository.

**Consequence.** A fresh Firebase project — including any new dev or staging environment —
will throw `FAILED_PRECONDITION` on that query until someone clicks through the console. The
index configuration is undocumented infrastructure state.

**Risk of changing it.** None. Capture the required indexes in the file. Do this when
setting up the local environment, since the emulator will surface exactly which are needed.

---

<a name="m5"></a>
## M5 — Tailwind `darkMode` is never configured, so every `dark:` variant is inert

**Severity:** MEDIUM — and it explains a visible product defect.

[tailwind.config.js](../tailwind.config.js) never sets `darkMode`. Tailwind therefore defaults
to `'media'`, meaning `dark:` variants respond to the OS preference and **completely ignore**
the `.dark` class that `DarkModeProvider` toggles on `<html>`
([darkmodecont.js:22](../app/Modules/darkmodecont.js)).

**Consequence.** The in-app dark mode toggle only works for the hand-written `.dark ...` rules
in [app/globals.css:52-72](../app/globals.css) — a small set covering inputs, textareas,
selects and buttons. Every Tailwind `dark:` class in the codebase does nothing when the
toggle is used, but *does* fire based on the user's OS setting, independently of the toggle.
This is why dark mode is visually inconsistent: two uncoordinated mechanisms are half-applied.

**Why it exists.** Almost certainly an oversight — the provider was written assuming
class-based dark mode, and the one-line config was never added.

**Risk of changing it.** **Moderate, and larger than it looks.** Adding `darkMode: 'class'`
would activate every currently-inert `dark:` variant across all 24 pages at once. Some will
have been written speculatively and never viewed. Expect visual regressions and budget a
page-by-page review; do not ship it blind.

---

<a name="d2"></a>
## D2 — `survey/page.jsx` is a 2,778-line god component

**Severity:** MEDIUM

[app/survpages/survey/page.jsx](../app/survpages/survey/page.jsx) is the survey builder. In
one component it holds ~20 `useState` hooks, two `useRef` maps, section/subsection CRUD,
question and sub-question CRUD, four answer-type toggles, rating mode, checkbox labelling,
auto-mark validation, preview compilation, Firestore persistence with an overwrite/save-new
branch, email distribution, embed-code generation, link sharing, and the entire render tree.

For scale: it is 2,778 lines against a whole-project total of ~11,000 excluding the
`countries.jsx` dataset — roughly a quarter of the hand-written application.

**What depends on it.** It is the core of the product. `params`, `dashboard` and
`responseCol` all depend on the document shape it produces.

**Risk of changing it.** High, precisely because it is central and untested (L6). The state
interactions are intricate — `updateComponent` takes an updater function and is called from
a dozen toggles with subtle `isSub` branching.

**Recommended approach when the time comes:** do not attempt a big-bang rewrite. Extract
pure helpers first (`compilePreviewData`, `normalizeSurveyPayload`, `getQuestionNumber`,
`getCheckboxLabel`) — they have no state dependencies and are individually testable. Add
tests around them. Only then consider extracting presentational subcomponents. Leave the
state machine until last.

---

<a name="d3"></a>
## D3 — Timestamps stored as ISO strings and sorted client-side

**Severity:** MEDIUM

`surveys.createdAt` and `productQuestions.createdAt` use `new Date().toISOString()`, while
`responses.timestamp` correctly uses `serverTimestamp()`. See
[DATA-MODEL.md](DATA-MODEL.md#cross-cutting-data-hazards).

**Consequences.** Ordering cannot be pushed into Firestore, forcing the full-download sort
described in M3; and client clocks are untrustworthy, so `createdAt` ordering may not reflect
reality.

**Risk of changing it.** Moderate — a type migration across existing documents, plus every
read site that currently does `new Date(s.createdAt)`. Plan it alongside D1 if both are ever
tackled.

---

<a name="l1"></a>
## L1 — Committed merge-conflict markers in `README.md`

[README.md](../README.md) contains literal `<<<<<<< HEAD`, `=======` and
`>>>>>>> f0a4cb6b…` markers, with the create-next-app boilerplate duplicated twice and the
actual project description (`# KUCHIKI / Survey and Data Application`) buried at the bottom.

A merge conflict was resolved by committing the conflict itself. **Risk of fixing: none.**
This is the first thing a new developer sees, so it is worth fixing early despite being
cosmetic.

---

<a name="l2"></a>
## L2 — Dead code and dead configuration

| Item | Status | Evidence |
|---|---|---|
| `app/survpages/surveyregion/*` | Leaflet region picker, **imported by nothing** | Import graph |
| `app/Modules/emadmin.js` | A research-requests admin page, **not routed** | Not under a `page.jsx` path |
| `utilsfirebase.js:handleSave` | **Broken** — references undefined `getAuth`, `title`, `questions`, `serverTimestamp`; would throw if called | Read of the function body |
| `app/Modules/motion.js` | A no-op framer-motion shim, **imported by nothing** while 6 files import the real `framer-motion` | Import graph |
| `dataconnect/` | 100% commented-out Firebase boilerplate | Read of all four files |
| `functions/index.js` | Next SSR wrapper, referenced by no hosting rewrite | `firebase.json` has no `rewrites` |
| `storage.rules` | Denies all; no code uses Firebase Storage | Grep |
| `productReviews` collection | Written only by the broken `handleSave` | Grep |
| `JavaSript/new.html` | Stray 11-line file, misspelled directory | Directory listing |
| `lin.pcapng` | A 113 KB Wireshark packet capture committed to the repo | Directory listing |
| `.vs/slnx.sqlite` | Visual Studio state, committed | Directory listing |

**Note on `motion.js`:** it is one of the four untracked files. Unlike the other three (which
are security scaffolding worth finishing), this one appears to be an attempt to *replace*
framer-motion with a no-op — perhaps to debug a build issue. It is wired to nothing.
Confirm intent with the author before deleting; it may represent an unfinished decision to
drop the dependency.

**Risk of removing:** low for each, but verify individually. `leaflet` and its four companion
packages exist only for the dead `surveyregion` components, and `layout.js` loads
`leaflet.css` globally — removing the components means removing that import too.

---

<a name="l3"></a>
## L3 — Unused dependencies

Twelve packages in `dependencies` are imported by no source file (VERIFIED by grep across
`app/`, `pages/` and `functions/`):

`docx` · `dotenv` · `file-saver` · `formidable` · `nodemailer` · `papaparse` · `react-csv` ·
`react-qr-code` · `react-google-recaptcha-v3` · `@fortawesome/react-fontawesome` ·
`leaflet-control-geocoder` · `cloudinary` (only the REST URL is used, not the SDK)

Two are worth calling out specifically:

- **`react-google-recaptcha-v3`** — bot protection was planned and never implemented. See
  [SECURITY-FINDINGS.md](SECURITY-FINDINGS.md) M3.
- **`nodemailer`** alongside `resend` — two email libraries, one used. Likely a migration
  that left the old dependency behind.

`dotenv` is unnecessary regardless: Next.js loads `.env` files natively.

**Risk of removing:** low, but `docx`, `papaparse`, `react-csv`, `file-saver` and
`react-qr-code` together suggest **planned but unbuilt features** (document export, CSV
import/export, QR survey codes). Confirm they are not imminent before removing, or the next
person will just reinstall them.

---

<a name="l4"></a>
## L4 — Runtime hygiene

- **`window.location.reload()` as state management** — 6 sites (`survey/page.jsx` ×3,
  `product/page.js` ×2, `research/page.jsx` ×1), several behind a `setTimeout`. After saving
  a survey the entire app reloads. Users lose scroll position and unsaved sibling state, and
  it is slow. `research/page.jsx:64` reloads after a **10-second** timer.
- **Mixed `alert()` and `toast()`** — 8 raw `alert()` calls survive alongside
  `react-hot-toast`, so feedback style is inconsistent between pages.
- **~50 `console.log` calls** in shipped code, several printing personal data. See
  [SECURITY-FINDINGS.md](SECURITY-FINDINGS.md) L1.
- **No error boundaries** anywhere, so a render error in any component blanks the page.
- **`authcont.js:20`** — the `onAuthStateChanged` subscription `useEffect` lists `[user]` as
  its dependency, so it tears down and re-subscribes on every auth change. Harmless in
  practice but unintended; the correct dependency array is `[]`.

**Risk of changing:** low individually. The `reload()` removals need care — each one is
currently masking the absence of a proper state refresh, so removing the reload requires
adding the refetch it was standing in for.

---

<a name="l5"></a>
## L5 — Near-duplicate page pairs

`ranked/` (303 lines) vs `ranked2/` (207), and `competeRanked/` (598) vs `competeRanked2/`
(576) — 1,684 lines across four files, in two apparently-forked pairs.

**Why they exist: UNKNOWN.** Git history is two commits, so it offers no signal. They may be
deliberate product variants (an A/B test, or different survey modes) or abandoned
copy-paste iterations.

**Do not merge them yet.** Establish first whether the `2` variants are reachable in the
product and how they differ behaviourally. If they are genuine variants, the duplication may
be intentional; if not, deduplicating removes ~800 lines. This question needs a human answer.

---

<a name="l6"></a>
## L6 — No tests of any kind

**Severity:** LOW as an isolated observation; **HIGH as a multiplier on everything above.**

There is no test runner, no test directory, no test file, and no test script in
`package.json`. Not a single unit, integration, component or end-to-end test exists.
`npm run lint` is configured but there is no `.eslintrc` for the Next app (only
`functions/.eslintrc.js`, which covers the dead Cloud Functions directory).

**Consequence.** Every change to this codebase is verified by hand or not at all. This is the
main reason the debt above is risky to address: there is no safety net, so each refactor
carries real regression risk.

**Highest-value tests to write first**, once a local environment exists:

1. **Firestore security rules** — the emulator has first-class rules unit testing, and rules
   are the app's only real authorization boundary. Highest value per line of test code.
2. **Pure helpers in `survey/page.jsx`** — `compilePreviewData`, `normalizeSurveyPayload`,
   `getQuestionNumber`. No state dependencies, and they encode the core business rules.
3. **The auto-mark scoring logic** in `analysis/results` — currently unverified arithmetic
   that users see as their score.
4. **API route auth**, once C3 is fixed, to prevent regression.
