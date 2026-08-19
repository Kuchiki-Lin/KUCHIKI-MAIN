"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth , db} from "@/app/firebaseConfig";
import { useUser } from "@/app/authcont"
import { setDoc, doc } from "firebase/firestore";



export default function SignUp() {
  const [email, setEmail] = useState("");
  const { user, setUser } = useUser();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      await updateProfile(userCredential.user, { displayName: username });
         console.log(userCredential);

      //console.log("User registered:", userCredential.user.displayName);
      const userUid = userCredential.user.uid;
      //console.log(userUid);

      setUser(userUid);
      //console.log(user);
      setSuccess(true);
      
await setDoc(doc(db, "users", userUid), {
  email:userCredential.user.email,
  displayName: username|| "",
  createdAt: new Date().toISOString(),
});

      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">Registration successful!</p>}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="w-full p-2 mb-4 border rounded text-black"
          required
        />
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          className="w-full p-2 mb-4 border rounded text-black"
          required
        />
        <button type="submit"
          style={{ backgroundColor: "rgb(31 41 55 / var(--tw-bg-opacity))" }}
          className="w-full 
        
         text-white p-2 rounded">
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-700">
          Already have an account?{" "}
          <Link href="/authentication/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}