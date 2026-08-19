"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebaseConfig";
import { useUser } from "@/app/authcont";
import Image from "next/image";

export function KLogo() {
  const router = useRouter();
  const pathname = usePathname();

  const { user } = useUser();
  const [hideAuthy, setHideAuthy] = useState(false);

  useEffect(() => {
    const hiddenRoutes = [
      "authentication/signin",
      "authentication/signup",
      "/survpages/analysis/admin",
      "/survpages/analysis/results",
      "/survpages/responseCol",
      "/approvals/surveys",
      "/approvals/qanvas",
      ,
    ];
    setHideAuthy(hiddenRoutes.includes(pathname));

    if (pathname === "/survpages/ranked") {
    }
  }, [pathname]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {});

    return () => unsubscribe();
  }, []);

  return (
    <header
      className={`flex items-center justify-between p-4 ${
        pathname === "/survpages/ranked"
          ? "bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 border-b-4 border-amber-300"
          : ""
      }`}
    >
      <Link
  href="/"
  className="flex items-center transition-transform duration-300 hover:scale-105"
>
  <Image
    src="/klogo.png"
    loading="eager"
    alt="Survey logo"
    width={150}
    height={50}
    className="object-contain"
  />
</Link>

      {!hideAuthy && (
        <div id="auth">
          {user ? (
            <div className="flex items-center gap-4">
              <span
                className="hover:text-blue-200  "
                style={{ marginRight: "78px", marginBottom: "12px" }}
              >
                <Link href="/dashboard">{user.displayName || "User"}</Link>
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/authentication/signin" className="hover:underline">
                Login
              </Link>
              <Link href="/authentication/signup" className="hover:underline">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default function HomePage() {
  return (
    <div className="  min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-24 mt-12 ">
        <h1 className="custom-title">Unlock the Power of Data</h1>
        <p className="  mt-4">Advanced Research, Surveys, and Data Analytics</p>
        <a
          className=" inline-block mt-6 px-2 py-2 transition  rounded shadow hover:bg-gray-100 border-2"
          style={{ fontSize: "20px" }}
          href="/dashboard"
        >
          Get Started
        </a>
      </header>

      {/* Sections */}
      <section className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Research */}
        <div
          id="research"
          className="p-8 rounded-lg shadow-lg hover:scale-105 transition"
        >
          <h1 className={` rounded-md  p-2 flex justify-center  `}>
            Research and Data Analysis Services
          </h1>
          <p className="mt-2 ">
            Conduct detailed research with expert analysts at a fair price.
            Whether you need academic, market, or scientific research, we've got
            you covered.
          </p>
          <div className="flex justify-center">
            <Link
              href="/research"
              className="flex justify-center mt-4 border-2 px-2   rounded  shadow hover:bg-gray-100 hover:text-black"
            >
              Request Research
            </Link>
          </div>
        </div>

        {/* Survey Creation */}
        <div
          id="survey"
          className=" p-8 rounded-lg shadow-lg hover:scale-105 transition"
        >
          <h1 className={` rounded-md  p-2 flex justify-center`}>
            Survey Creation
          </h1>
          <p className="mt-2 ">
            Create custom surveys, collect responses, and analyze data
            effortlessly. Perfect for Individuals, businesses, researchers, and
            organizations.
          </p>
          <div className="flex justify-center">
            <Link
              href="/survpages/params"
              className=" inline-block mt-4 border-2 px-2 rounded  shadow hover:bg-gray-100 hover:text-black"
            >
              Create a Survey
            </Link>
          </div>
        </div>

        <div
          id="productTesting"
          className=" p-8 rounded-lg shadow-lg hover:scale-105 transition"
        >
          <h1 className={` rounded-md   p-2 flex justify-center   `}>
            Product Testing
          </h1>
          <p className="mt-2 ">
            Receive real time unbias reviews on your product from verified
            consumers. Only responses from clients/consumers who are actively
            using the product
          </p>
          <div className="flex justify-center">
            <Link
              href="/product"
              className="inline-block  mt-4 border-2 px-2  rounded  shadow hover:bg-gray-100   hover:text-black"
            >
              Product Testing
            </Link>
          </div>
        </div>

        {/* Digitization & Archiving */}
        <div
          id="digitization"
          className=" p-8 rounded-lg shadow-lg hover:scale-105 transition"
        >
          <h1 className={` rounded-md  p-2 flex justify-center `}>
            Record Digitization
          </h1>
          <p className="mt-2">
            Convert old records into a digital, easily accessible format.
            Preserve history and access valuable data with ease.
          </p>
          <div className="flex justify-center">
            <Link
              href="/digitize"
              className=" inline-block mt-4  px-2 rounded  shadow hover:bg-gray-100 border-2 hover:text-black"
            >
              Digitize Records
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8  mt-12">
        © {new Date().getFullYear()} KUCHIKI - All rights reserved.
      </footer>
    </div>
  );
}
