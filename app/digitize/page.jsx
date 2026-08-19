'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { db } from "@/app/firebaseConfig.js"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendEmailNotification } from "@/app/Modules/emnotif.js"; 

export default function Digitize() {

    const [requestD,setrequestD] = useState(false);
    const [formData, setFormData] = useState({
      description:"",
      contact: "",
      route : "digitization"
    });


    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await addDoc(collection(db, "digitization"), {
            ...formData,
            timestamp: serverTimestamp(),
          });
          console.log(formData)
          await sendEmailNotification(formData); // Sends an email notification
          alert("Your request has been sent! You will get a response in a few minutes via email. Thank You");
          setFormData({  description: "", contact: "" });
        } catch (error) {
          console.error("Error submitting request: ", error);
          alert("Failed to submit request. Please try again.");
        }
      };


  return (
    <main className="max-w-6xl ml-5 px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold mb-6 text-gray-900"
      >
        Digitizing Records
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-lg text-gray-700 mb-10 ml-5"
      >
        We help individuals, researchers, and organizations convert handwritten, printed, or scanned records into
        clean, structured, and searchable digital formats. Whether it’s field notes, archives, or documents — we’ve got you. Below are some of the services we offer:
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid gap-10 mb-12"
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2 ml-5"
        >

          <ul className="list-none  text-gray-700 space-y-1">
          <li>
    <div className=" p-8 rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className=" font-extralight text-2xl text-black">OCR scanning and extraction</h3>
      <p className="mt-2 ">We use tools like Tesseract.js and Google OCR to scan images or PDFs and extract readable text from them.</p>
    </div>
  </li>
  <li>
    <div className=" p-8 rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className=" font-extralight text-2xl text-black">Manual transcription of handwritten docs</h3>
      <p>For documents that automated tools struggle with, we offer manual transcription to ensure accuracy and completeness.</p>
    </div>
  </li>
  <li>
    <div className=" p-8 rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className=" font-extralight text-2xl text-black">Digital archiving and backups</h3>
      <p>We securely store your digitized records with organized backups, versioning, and optional encryption for long-term access.</p>
    </div>
  </li>
  <li>
    <div className=" p-8 rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className=" font-extralight text-2xl text-black">Tailored formatting for research data</h3>
      <p>We clean and format digitized information to fit research-ready formats that are consistent and easy to work with.</p>
    </div>
  </li>
  <li>
    <div className=" p-8 rounded-lg shadow-lg hover:scale-105 transition">
      <h3 className=" font-extralight text-2xl text-black">Formatted outputs: CSV, XLSX, JSON</h3>
      <p>Export your digitized data in the format you prefer — ready for use in Excel, databases, or custom apps.</p>
    </div>
  </li>
          
          </ul>
        </motion.div>

      </motion.div>
      <button className="w-52 block border-2 border-black   text-gray-700 hover:bg-gray-100 hover:text-black font-bold py-2 px-4 rounded"
        onClick={() => setrequestD((prev) => !prev)}
      >
       Request 
      </button>
{
    requestD && (
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white border p-6 rounded-2xl shadow-md max-w-2xl"
      >
        
        <p className="text-gray-700 mb-4">Describe the type of records and what output you’d like.</p>

        <form 
        onSubmit={handleSubmit} 
        className="space-y-4">
          
          <input
            type="email"
            name ="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none"
          />
          <textarea
            name = "description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your records and preferred format"
            rows={4}
            className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition duration-200"
          >
            Send Request
          </button>
        </form>
      </motion.div>

    )
}
          </main>
  )
}
