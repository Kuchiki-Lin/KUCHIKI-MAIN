#!/usr/bin/env node
/**
 * Seed the Firebase Emulator Suite with realistic KUCHIKI data.
 *
 *     npm run seed
 *
 * Requires `npm run emulators` to be running in another terminal.
 *
 * This script REFUSES to run against a real Firebase project: it only talks to
 * emulator hosts, and aborts if the emulator environment variables are absent.
 * That guard is deliberate — a seed script that can reach production is a
 * loaded gun.
 *
 * See docs/DEVELOPMENT.md
 */

import admin from "firebase-admin";

const AUTH_HOST = process.env.FIREBASE_AUTH_EMULATOR_HOST || "127.0.0.1:9099";
const FIRESTORE_HOST = process.env.FIRESTORE_EMULATOR_HOST || "127.0.0.1:8080";
const PROJECT_ID =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "demo-kuchiki";

// --- Safety guard --------------------------------------------------------
// Refuse to touch anything that is not an emulator on loopback.
const isLoopback = (host) =>
  host.startsWith("127.0.0.1:") ||
  host.startsWith("localhost:") ||
  host.startsWith("[::1]:");

if (!isLoopback(AUTH_HOST) || !isLoopback(FIRESTORE_HOST)) {
  console.error(
    `\n  Refusing to seed: emulator hosts must be on loopback.\n` +
      `    auth:      ${AUTH_HOST}\n` +
      `    firestore: ${FIRESTORE_HOST}\n`,
  );
  process.exit(1);
}

if (!PROJECT_ID.startsWith("demo-")) {
  console.warn(
    `\n  WARNING: project id "${PROJECT_ID}" does not start with "demo-".\n` +
      `  Emulators are still enforced by the loopback check above, but a\n` +
      `  "demo-" prefix guarantees the SDK never reaches a real project.\n`,
  );
}

process.env.FIREBASE_AUTH_EMULATOR_HOST = AUTH_HOST;
process.env.FIRESTORE_EMULATOR_HOST = FIRESTORE_HOST;

admin.initializeApp({ projectId: PROJECT_ID });

const auth = admin.auth();
const db = admin.firestore();

// --- Seed users ----------------------------------------------------------

const USERS = [
  {
    uid: "seed-admin",
    email: "admin@kuchiki.local",
    password: "password123",
    displayName: "Ada Admin",
    admin: true,
  },
  {
    uid: "seed-creator",
    email: "creator@kuchiki.local",
    password: "password123",
    displayName: "Chuka Creator",
    admin: false,
  },
  {
    uid: "seed-respondent",
    email: "respondent@kuchiki.local",
    password: "password123",
    displayName: "Rina Respondent",
    admin: false,
  },
];

async function seedUsers() {
  for (const u of USERS) {
    try {
      await auth.deleteUser(u.uid);
    } catch {
      // not present yet; fine
    }

    await auth.createUser({
      uid: u.uid,
      email: u.email,
      password: u.password,
      displayName: u.displayName,
      emailVerified: true,
    });

    if (u.admin) {
      // This is the mechanism app/Modules/admin.js and pages/api/_auth.js
      // expect. Nothing in the app grants it yet — see docs/ROADMAP.md P1.1.
      await auth.setCustomUserClaims(u.uid, { admin: true });
    }

    // Mirrors the shape written by the sign-up path
    // (app/authentication/signup/page.jsx:44). Note the sign-in path writes a
    // DIFFERENT shape — see docs/DATA-MODEL.md.
    await db.collection("users").doc(u.uid).set({
      email: u.email,
      displayName: u.displayName,
      createdAt: new Date().toISOString(),
    });

    console.log(`  user   ${u.email}${u.admin ? "  [admin claim]" : ""}`);
  }
}

// --- Seed surveys --------------------------------------------------------

const APPROVED_SURVEY_ID = "seed-survey-approved";
const UNAPPROVED_SURVEY_ID = "seed-survey-unapproved";

const SECTION_ID = "seed-section-1";

const questions = [
  {
    question: "How satisfied are you with the product?",
    sectionId: SECTION_ID,
    subsectionId: null,
    answerType: "Multiple Choice",
    choices: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied"],
    ratingMode: false,
    checkboxLabelType: "numbers",
    correctAnswer: "Very satisfied",
    subQuestion: null,
  },
  {
    question: "Would you recommend us to a colleague?",
    sectionId: SECTION_ID,
    subsectionId: null,
    answerType: "Boolean",
    choices: null,
    ratingMode: false,
    checkboxLabelType: "numbers",
    correctAnswer: "true",
    subQuestion: {
      question: "What is the main reason?",
      answerType: "Multiple Choice",
      choices: ["Price", "Support", "Features"],
      ratingMode: false,
      checkboxLabelType: "numbers",
      correctAnswer: "Support",
    },
  },
  {
    question: "Which features do you use regularly?",
    sectionId: SECTION_ID,
    subsectionId: null,
    answerType: "Checkboxes",
    choices: ["Surveys", "Product testing", "Research", "Digitization"],
    ratingMode: false,
    checkboxLabelType: "letters",
    correctAnswer: ["Surveys"],
    subQuestion: null,
  },
];

const baseSurvey = {
  userId: "seed-creator",
  expectedResponses: 50,
  country: "Kenya",
  state: "",
  anonymous: false,
  autoMark: true,
  numberedQuestions: true,
  questions,
  objectives: {
    main: "Measure customer satisfaction",
    secondary: "Identify the strongest feature",
    specific: ["Establish an NPS baseline"],
  },
  sections: [
    {
      id: SECTION_ID,
      title: "Satisfaction",
      objective: "Understand overall sentiment",
      note: "Answer honestly.",
      showNote: true,
      numberingMode: "continue",
      subsections: [],
    },
  ],
  createdAt: new Date().toISOString(),
};

async function seedSurveys() {
  await db
    .collection("surveys")
    .doc(APPROVED_SURVEY_ID)
    .set({ ...baseSurvey, title: "Customer Satisfaction Q3", approved: true });
  console.log(`  survey ${APPROVED_SURVEY_ID}  [approved]`);

  await db.collection("surveys").doc(UNAPPROVED_SURVEY_ID).set({
    ...baseSurvey,
    title: "Draft — Employee Pulse Check",
    approved: false,
  });
  console.log(`  survey ${UNAPPROVED_SURVEY_ID}  [pending approval]`);
}

// --- Seed responses ------------------------------------------------------
//
// TWO responses to the SAME survey, from two different respondents.
// This reproduces finding B1: /survpages/analysis/results queries the survey's
// globally-latest response rather than the current participant's, so whoever
// submitted first is shown the other person's answers and score.
// See docs/SECURITY-FINDINGS.md B1.

async function seedResponses() {
  const mk = (name, userId, answers, offsetMs) => ({
    surveyId: APPROVED_SURVEY_ID,
    editableName: name,
    userId,
    anonymous: false,
    // Response keys embed the question TEXT — see docs/DATA-MODEL.md.
    responses: {
      "1. How satisfied are you with the product?": { answer: answers[0] },
      "2. Would you recommend us to a colleague?": {
        answer: answers[1],
        subQuestions: {
          "2a. What is the main reason?": { answer: answers[2] },
        },
      },
      "3. Which features do you use regularly?": { answer: answers[3] },
    },
    timestamp: admin.firestore.Timestamp.fromMillis(Date.now() + offsetMs),
  });

  await db
    .collection("responses")
    .doc("seed-response-rina")
    .set(
      mk(
        "Rina Respondent",
        "seed-respondent",
        ["Very satisfied", "true", "Support", ["Surveys"]],
        -60000,
      ),
    );
  console.log("  response  Rina Respondent  (3/3 correct, submitted first)");

  await db
    .collection("responses")
    .doc("seed-response-chuka")
    .set(
      mk(
        "Chuka Creator",
        "seed-creator",
        ["Neutral", "false", "Price", ["Research"]],
        0,
      ),
    );
  console.log("  response  Chuka Creator    (0/3 correct, submitted second)");
}

// --- Seed product testing ------------------------------------------------

async function seedProduct() {
  await db.collection("productQuestions").doc("seed-product-approved").set({
    userId: "seed-creator",
    title: "Packaging Design Test",
    createdAt: new Date().toISOString(),
    isAnonymous: false,
    approved: true,
    items: [
      {
        question: "Which packaging do you prefer?",
        // Placeholder URLs. Real ones are Cloudinary secure_urls.
        imageUrls: [
          "https://placehold.co/400x400/png?text=Option+A",
          "https://placehold.co/400x400/png?text=Option+B",
        ],
        correctImages: ["https://placehold.co/400x400/png?text=Option+A"],
      },
    ],
  });
  console.log("  product   seed-product-approved  [approved]");
}

// --- Seed inbound requests ----------------------------------------------

async function seedRequests() {
  await db.collection("researchRequests").doc("seed-research-1").set({
    topic: "Market sizing for East African fintech",
    description: "Need a competitor landscape and TAM estimate.",
    urgency: "8-12 hours",
    flexibleDetails: "",
    contact: "creator@kuchiki.local",
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  });
  console.log("  research  seed-research-1");

  await db.collection("digitization").doc("seed-digitization-1").set({
    description: "Two boxes of handwritten field notes from 1998.",
    contact: "creator@kuchiki.local",
    route: "digitization",
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  });
  console.log("  digitize  seed-digitization-1");
}

// --- Run -----------------------------------------------------------------

async function main() {
  console.log(`\nSeeding emulators for project "${PROJECT_ID}"`);
  console.log(`  auth      ${AUTH_HOST}`);
  console.log(`  firestore ${FIRESTORE_HOST}\n`);

  await seedUsers();
  await seedSurveys();
  await seedResponses();
  await seedProduct();
  await seedRequests();

  console.log("\nDone. Sign in with any of:\n");
  for (const u of USERS) {
    console.log(
      `  ${u.email.padEnd(28)} ${u.password}${u.admin ? "   (admin)" : ""}`,
    );
  }
  console.log("\nEmulator UI: http://127.0.0.1:4000\n");
}

main().catch((error) => {
  console.error("\nSeeding failed:", error);
  process.exit(1);
});
