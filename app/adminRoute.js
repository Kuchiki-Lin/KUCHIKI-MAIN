"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

/**
 * Gate a page behind real administrator authentication.
 *
 * Replaces the previous approach on the /approvals/* pages, which compared a
 * typed string against a constant that shipped inside the public JavaScript
 * bundle and then set a plain React state flag. That gate could be read out of
 * the bundle, and bypassed from DevTools without reading it at all.
 * See docs/SECURITY-FINDINGS.md C1.
 *
 * Authorisation is the Firebase Auth custom claim `admin: true`, which is the
 * mechanism app/Modules/admin.js and pages/api/_auth.js already expect. Grant
 * it with `npm run set-admin -- <email>`.
 *
 * This is still a CLIENT-SIDE gate: it controls what renders, not what the
 * database will hand out. The enforcement boundary is firestore.rules, which
 * must independently require the same claim for any admin-only read or write.
 * See docs/ROADMAP.md P1.2.
 *
 * Mirrors the shape of app/privateRoute.js so the two read the same way.
 */
const AdminRoute = ({ children }) => {
  const [status, setStatus] = useState("checking");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/authentication/signin");
        setStatus("denied");
        return;
      }

      try {
        // Force-refresh so a claim granted during this session is picked up
        // without requiring the user to sign out and back in.
        const token = await user.getIdTokenResult(true);
        setStatus(token.claims.admin === true ? "allowed" : "denied");
      } catch (error) {
        console.error("Failed to verify administrator access:", error);
        setStatus("denied");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (status === "checking") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Checking access…</p>
      </div>
    );
  }

  if (status === "denied") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="p-6 rounded shadow-md bg-white text-center max-w-md">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Administrator access required
          </h2>
          <p className="text-gray-600">
            Your account does not have permission to view this page. Contact an
            administrator if you believe this is a mistake.
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default AdminRoute;
