"use client"

import { useEffect, useState } from "react";
import { db } from "@/app/firebaseConfig.js"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { sendEmailNotification } from "@/app/Modules/emnotif.js"; 
import UrgencySlider from "@/app/Modules/slider.jsx"
import toast from 'react-hot-toast';
import PrivateRoute from "../privateRoute";
import { useUser } from "../authcont";


export default function ResearchRequestPage() {

  
 const { user } = useUser();       
  const userEmail = user?.email || ""; 

 
  const [formData, setFormData] = useState({
    topic: "",
    description: "",
    urgency: "",
    flexibleDetails:"",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.contact === ""){
      formData.contact = userEmail;
    }
    console.log(formData.contact)
    try {
      await addDoc(collection(db, "researchRequests"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      await sendEmailNotification(formData); // Sends an email notification
         
      toast(
        (t) => (
          <div
            onClick={() => {
              toast.dismiss(t.id); 
        
            }}
            className="cursor-pointer"
          >
             Your research request has been submitted succesfully!<br />
           
          </div>
        ),
        {
          duration: 6000,
        }
      );
    setTimeout(() => {
      window.location.reload();
      
    }, 10000);

    } catch (error) {
      console.error("Error submitting request: ", error);
      alert("Failed to submit request. Please try again.");
    }
  };

  return (
    <PrivateRoute>
    
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="w-full max-w-2xl shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl  mb-4 text-center shadow-sm ">
          Request Research Assistance
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block  ">Research Topic</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter research topic"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block   ">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your research requirements"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <UrgencySlider formData={formData} setFormData={setFormData} />

          <div>
            <label className="block   ">Contact Information</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your email/Leave blank to use account email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full  bg-white border border-gray-400 hover:bg-gray-100  hover:text-black 
            py-2 rounded mt-4"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
    </PrivateRoute>
  );
  
}

