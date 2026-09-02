import { initializeApp, getApps } from "firebase/app";

import { getAuth, connectAuthEmulator } from "firebase/auth";

import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";


 const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

      };



      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];



export const db = getFirestore(app);

export const auth = getAuth(app);

// --- Local development against the Firebase Emulator Suite ---------------
// Opt-in only. When NEXT_PUBLIC_USE_FIREBASE_EMULATOR is not exactly "true"
// this block does nothing and the SDKs behave exactly as they did before,
// talking to the real project described by firebaseConfig above.
//
// The globalThis guard is required because Next.js re-evaluates this module on
// hot reload, and connectAuthEmulator / connectFirestoreEmulator throw if
// called twice against the same instance.
//
// See docs/DEVELOPMENT.md
if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === "true") {
  if (!globalThis.__kuchikiEmulatorsConnected) {
    globalThis.__kuchikiEmulatorsConnected = true;

    const authHost = process.env.NEXT_PUBLIC_EMULATOR_AUTH_HOST || "127.0.0.1";
    const authPort = Number(process.env.NEXT_PUBLIC_EMULATOR_AUTH_PORT) || 9099;
    const firestoreHost =
      process.env.NEXT_PUBLIC_EMULATOR_FIRESTORE_HOST || "127.0.0.1";
    const firestorePort =
      Number(process.env.NEXT_PUBLIC_EMULATOR_FIRESTORE_PORT) || 8080;

    try {
      connectAuthEmulator(auth, `http://${authHost}:${authPort}`, {
        disableWarnings: true,
      });
      connectFirestoreEmulator(db, firestoreHost, firestorePort);

      if (typeof window !== "undefined") {
        console.info(
          `[kuchiki] Firebase emulators connected — auth :${authPort}, firestore :${firestorePort}`,
        );
      }
    } catch (error) {
      // Most commonly: the emulators are not running, or a connect call raced
      // with another module evaluation. Surface it loudly rather than failing
      // later with a confusing permission or network error.
      console.error(
        "[kuchiki] Failed to connect to Firebase emulators. Is `npm run emulators` running?",
        error,
      );
    }
  }
}
