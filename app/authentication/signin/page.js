"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth ,db} from "@/app/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();



const ensureUserInFirestore = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      hasSeenIntro: false,
    });
  }
};



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await ensureUserInFirestore(user);

    router.push("/dashboard");
  } catch (error) {
    setError(error.message);
  }
};


  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Sign In</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 mb-4 border rounded text-black"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full p-2 mb-4 border rounded text-black"
          required
        />
        <button type="submit"
          style={{ backgroundColor: "rgb(31 41 55 / var(--tw-bg-opacity))" }}
          className="w-full  text-white p-2 rounded">
          Sign In
        </button>
        <p className="mt-4 text-center text-gray-700">
          Don't have an account?{" "}
          <Link href="/authentication/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}