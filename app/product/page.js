"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "@/app/firebaseConfig";
import PrivateRoute from "@/app/privateRoute";
import { useUser } from "@/app/authcont";
import PreviewModal from "@/app/Modules/impreview";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import {  setDoc, doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast"
import showConfirmToast from "@/app/Modules/toast"
import imageCompression from "browser-image-compression";

export default function ProductUploader() {

   const [title, setTitle] = useState("");
   const [questions, setQuestions] = useState([
   { images: [], text: "", files: [], enableImage: false, correctImages: [] },

     ]);
     
  const [currentPage, setCurrentPage] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const { user } = useUser();
  const [userprevs, setuserprevs] = useState([]); //userprodctreviews
  const [selectedreviewId, setselectedreviewId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [introModalOpen, setIntroModalOpen] = useState(false);
  const [introStep, setIntroStep] = useState(0);
  const [isEditingExisting, setIsEditingExisting] = useState(false);
 
  const [isAnonymous, setIsAnonymous] = useState(true);
const [automark, setAutomark] = useState(false);


 useEffect(() => {
  const checkIntroStatus = 
      async () => {
               if (!user?.uid) return;
              const userRef = doc(db, "users", user.uid);
              const snap = await getDoc(userRef);
              console.log(snap);
              console.log(userRef);

    if (snap.exists()) {
      const data = snap.data();
      console.log(data)
      if (!data.hasSeenIntro) {
        setIntroModalOpen(true);
      }
    }
  };

  checkIntroStatus();
}, [user]);


  const adjustHeight = (event) => {
    const textarea = event.target;
    if (textarea.value !== "") {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    const MAX_IMAGES = 4;
    const MAX_SIZE_MB = 8;
    const MAX_WIDTH = 1920;
    const MAX_HEIGHT = 1080;

    const updated = [...questions];
    const current = updated[currentPage];

    if (current.images.length + files.length > MAX_IMAGES) {
      toast.error(`You can upload up to  ${MAX_IMAGES} images per question.`);
      e.target.value = ""; 
      return;
    }

    const newImages = [];
    const newFiles = [];

    for (const file of files) {
      const options = {
        maxSizeMB: MAX_SIZE_MB,
        maxWidthOrHeight: MAX_WIDTH,
        useWebWorker: true,
      };

      try {
        const image = new Image();
        const imageUrl = URL.createObjectURL(file);
        image.src = imageUrl;

        await new Promise((resolve) => {
          image.onload = () => {
            if (image.width > MAX_WIDTH || image.height > MAX_HEIGHT) {
              toast.success(
                `Image resolution is high (${image.width}x${image.height}). We recommend a resolution closer to ${MAX_WIDTH}x${MAX_HEIGHT} for better performance. The image will be resized.`,
                { duration: 5000 }
              );
            }
            resolve();
          };
        });


        const compressedFile = await imageCompression(file, options);
        
        newFiles.push(compressedFile);
        newImages.push(URL.createObjectURL(compressedFile));

      } catch (error) {
        console.error("Error compressing image:", error);
        toast.error("There was an error compressing one of your images.");
      }
    }

    current.images = [...current.images, ...newImages];
    current.files = [...current.files, ...newFiles];
    setQuestions(updated);
    e.target.value = ""; 
  };

  const handleQuestionChange = (e) => {
    const updated = [...questions];
    updated[currentPage].text = e.target.value;
    setQuestions(updated);
  };
 

  const toggleImageUpload = () => {
    const updated = [...questions];
    updated[currentPage].enableImage = !updated[currentPage].enableImage;
    if (!updated[currentPage].enableImage) {
      updated[currentPage].images = [];
      updated[currentPage].files = [];
    }
    setQuestions(updated);
  };

  const addNewPage = () => {
    setQuestions([
      ...questions,
      { images: [], text: "", files: [], enableImage: false, correctImages: [] },

    ]);
    setCurrentPage(questions.length);
  };

 
 
const firethebase = 
async () => {

  if (automark) {
  const invalid = questions.some((q) => q.correctImages.length === 0);
  if (invalid) {
    toast.error("All questions must have at least one correct answer in AutoMark mode.");
    return;
  }
}

const doSaveAsNew = async () => {
  setUploading(true);

  try {
    const results = await Promise.all(
      questions.map(async (q) => {
        let imageUrls = [];

        if (q.files.length > 0) {
          const uploadPromises = q.files.map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append(
              "upload_preset",
              process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
            );

            const res = await fetch(
              `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
              { method: "POST", body: formData }
            );

            if (!res.ok) throw new Error("Cloudinary upload failed");

            const data = await res.json();
            return data.secure_url;
          });

           const uploaded= await Promise.all(uploadPromises);
          imageUrls = [...imageUrls, ...uploaded];
        } else {
          imageUrls = q.images || [];
        }
        
        
        imageUrls = imageUrls.filter(
  (url) => typeof url === "string" && !url.startsWith("blob:")
);

const remappedCorrectImages = (q.correctImages || [])
  .filter((url) => !url.startsWith("blob:"))
  .map((oldUrl) => imageUrls.find((u) => u === oldUrl))
  .filter(Boolean); // remove deleted ones

        return {
          question: q.text,
          imageUrls,
          correctImages: remappedCorrectImages,
        };
      })
    );

    await addDoc(collection(db, "productQuestions"), {
      userId: user.uid,
      title,
      createdAt: new Date().toISOString(),
      items: results,
      isAnonymous,
      approved: false,
    });

    toast.success("Survey saved as new!");
    setTimeout(() => window.location.reload(), 800);
  } catch (error) {
    console.error(error);
    toast.error("Saving failed. Check your connection and try again.");
  } finally {
    setUploading(false); // ALWAYS reset upload state
  }
};

 const doOverwrite = async () => {
  setUploading(true);

  try {
    const results = await Promise.all(
      questions.map(async (q) => {
       
        let imageUrls = [...q.images];

 imageUrls = imageUrls.filter(
  (url) => 
    typeof url === "string" && !url.startsWith("blob:"

    )
);
  
        if (q.files.length > 0) {
          const uploadPromises = q.files.map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append(
              "upload_preset",
              process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
            );

            const res = await fetch(
              `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
              { method: "POST", body: formData }
            );

            if (!res.ok) throw new Error("Cloudinary upload failed");

            const data = await res.json();
            return data.secure_url;
          });

         const uploaded = await Promise.all(uploadPromises);
         console.log(uploaded)
          imageUrls = [...imageUrls, ...uploaded];

        } else {
          imageUrls = q.images || [];
        }


imageUrls = imageUrls.filter(
  (url) => typeof url === "string" && !url.startsWith("blob:")
);

const remappedCorrectImages = (q.correctImages || [])
  .filter((url) => !url.startsWith("blob:"))
  .map((oldUrl) => imageUrls.find((u) => u === oldUrl))
  .filter(Boolean); // remove deleted ones


        return {
          question: q.text,
          imageUrls,
          correctImages: remappedCorrectImages,
        };
      })
    );

    await setDoc(doc(db, "productQuestions", selectedreviewId), {
      userId: user.uid,
      title,
      createdAt: new Date().toISOString(),
      items: results,
    });

    toast.success("Survey updated!");
    setTimeout(() => window.location.reload(), 800);
  } catch (error) {
    console.error(error);
    toast.error("Update failed. Check your network and try again.");
  } finally {
    setUploading(false); // ALWAYS reset upload state
  }
};

  if (isEditingExisting) {
    showConfirmToast(
      "Do you want to overwrite the survey or save a new copy?",
      doOverwrite,
      doSaveAsNew
    );
    return; // Wait for user interaction
  }

  await doSaveAsNew();
};

 const fetchFromFirebase = async () => {
  const q = query(
    collection(db, "productQuestions"),
    where("userId", "==", user.uid)
  );

  const snapshot = await getDocs(q);
  if (snapshot.empty) {
    toast.error("No saved surveys found.");
    return;
  }

  const surveys = snapshot.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
    items: doc.data().items,
  }));

  console.log(surveys);
  setuserprevs(surveys);
};


  return (
    <PrivateRoute>
      <div className="flex flex-col items-center p-8">
     <h1 className="  border-2  p-2 font-bold text-purple-700   rounded-md   tracking-wide text-center mb-2  hover:bg-black/15">
   Qanvas(画布)
</h1>

<div className=" px-4 block w-full h-12 mb-6">
<button
  onClick={() => setIntroModalOpen(true)}
  title="About Qanvas"
    className="px-2 absolute right-32 border-2 border-gray-500 shadow rounded-md text-sm transition text-purple-700 hover:bg-black/15"
>
 About
</button>
  <button
  title="Collect Named/ Anonymous reviews"
    className={` right-52  px-2   text-sm absolute shadow rounded-md transition border-2  ${
      isAnonymous
        ? "bg-gray-100  border-gray-500"
        : "bg-purple-500/50  border-gray-500"
    }`}
    onClick={() => setIsAnonymous((prev) => !prev)}
  >
    {isAnonymous ? "Anonymous Survey" : "Named Survey"}
  </button>
  <button
  title="Enable or disable automark mode"
  className={`right-96 px-2 text-sm absolute shadow rounded-md transition border-2 ${
    automark
      ? "bg-green-500/60 border-gray-500"
      : "bg-gray-100 border-gray-500"
  }`}
  onClick={() => setAutomark((prev) => !prev)}
>
  {automark ? "AutoMark ON" : "AutoMark OFF"}
</button>

</div>

      <div
      className=" rounded-xl shadow-2xl p-6 mx-auto border-2 border-gray-500 border-dotted"
      style={{ width: "90%" }}
      >
        
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
            className="mx-auto p-2 border rounded mb-4 block w-1/2 text-center  border-black text-purple-700 border-dotted"
          />

          <AnimatePresence mode="wait">
             <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 flex flex-col"
            >
              <label className="block text-gray-700 font-semibold">
                Question {currentPage + 1}
              </label>

              <textarea
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-blue-500 mx-auto 
overflow-hidden resize-none "
                placeholder="Enter the question..."
                rows={2}
                value={questions[currentPage].text}
                onChange={handleQuestionChange}
                onInput={(e) => adjustHeight(e)}
              />

              <button
                onClick={toggleImageUpload}
                className={` tracking-tighter rounded-md transition w-fit ${
                  questions[currentPage].enableImage
                    ? " inline-block  mt-4 text-red-700    px-4 py-2 rounded  mx-auto  w-40 shadow hover:bg-gray-100"
                    : " inline-block  mt-4 text-purple-700  px-4  mx-auto  w-40  py-2 rounded  shadow hover:bg-gray-100"
                }`}
              >
                {questions[currentPage].enableImage
                  ? "Remove Image"
                  : "Upload Image"}
              </button>

              {(questions[currentPage].enableImage || questions[currentPage].images.length > 0) && (
                <>
                  <p className="text-center text-sm text-gray-500 mb-2">
                    Recommended image size: at least 1280×720. Max size: 8MB.
                  </p>

                 <input
  type="file"
  accept="image/*"
  multiple
  onChange={handleImageChange}
  className="block w-3/4 mx-auto cursor-pointer border border-gray-300 rounded-lg bg-white px-3 py-2 text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-500 file:px-4 file:py-2 file:text-white file:cursor-pointer hover:file:bg-blue-600"
/>

                  <p className="text-sm text-gray-500 text-center">
  {questions[currentPage].images.length}/4 images uploaded
</p>

                 
{questions[currentPage].images.length === 1 ? (
  <div className="flex justify-center mt-4">
    <div className="relative w-[600px]">
      <img
        src={questions[currentPage].images[0]}
        alt="Preview"
        className="w-full h-[28rem] object-cover rounded shadow cursor-pointer"
        onClick={() => {
          setSelectedImage(questions[currentPage].images[0]);
          setModalOpen(true);
        }}
          
      />
      <button
        onClick={() => {
          const updated = [...questions];
          updated[currentPage].images.splice(0, 1);
          updated[currentPage].files.splice(0, 1);
          setQuestions(updated);
        }}
        className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 text-xs"
      >
        ✕
      </button>
    </div>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    {questions[currentPage].images.map((img, i) => (
      <div key={i} className=" w-full h-[240px] bg-gray-100 rounded overflow-hidden relative group ">
        <img
          src={img}
          alt={`Preview ${i}`}
          className="w-full h-full object-cover hover:opacity-90 rounded transition cursor-pointer"
          onClick={() => {
            setSelectedImage(img);
            setModalOpen(true);
          }}
         
        />
        <button
          onClick={() => {
            const updated = [...questions];
            updated[currentPage].images.splice(i, 1);
            updated[currentPage].files.splice(i, 1);
            setQuestions(updated);
          }}
          className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 text-xs"
        >
          ✕
        </button>

        {/* ✅ MARK AS CORRECT BUTTON */}
  {automark && (
    <button
      onClick={() => {
        const updated = [...questions];
        const current = updated[currentPage];
        const isCorrect = current.correctImages.includes(img);

        // toggle logic, max 2 images
        if (isCorrect) {
          current.correctImages = current.correctImages.filter((x) => x !== img);
        } else if (current.correctImages.length < 2) {
          current.correctImages.push(img);
        } else {
          toast.error("You can only set up to 2 correct answers per question.");
        }

        setQuestions(updated);
      }}
      className={`absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md ${
        questions[currentPage].correctImages.includes(img)
          ? "bg-green-600 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      {questions[currentPage].correctImages.includes(img)
        ? "✓ Correct"
        : "Set Correct"}
    </button>
  )}
      </div>
    ))}
  </div>
)}
                </>
              )}

            </motion.div>
          </AnimatePresence>




          <div className="flex justify-between mt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
              className="px-4  border-2   border-black border-dashed  py-2  rounded-lg hover:bg-gray-300 disabled:opacity-70 text-purple-700" 
              disabled={currentPage === 0}
            >
              ← Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, questions.length - 1))
              }
              className="px-4  border-2 border-black border-dashed   py-2  rounded-lg hover:bg-gray-300 disabled:opacity-70 text-purple-700"
              disabled={currentPage === questions.length - 1}
            >
              Next →
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={addNewPage}
              className="px-6 py-2 shadow rounded-md transition border-2 text-black  border-black  hover:bg-gray-200"
            >
              Add Question
            </button>
            <button
              onClick={() => setPreviewOpen(true)}
              className="px-6 py-2 shadow rounded-md transition border-2 text-black   border-black  hover:bg-gray-200   "
            >
              Preview Questions
            </button>
           <button
  disabled={uploading}
  onClick={firethebase}
  className={`px-6 py-2 shadow rounded-md border-2 text-black border-black transition ${
    uploading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
  }`}
>
  {uploading ? "Uploading..." : "Save "}
</button>

            <button
              onClick={fetchFromFirebase}
              className="px-6 py-2 shadow rounded-md transition border-2 text-black border-black hover:bg-gray-200"
            >
              Retrieve Saved
            </button>
            <button
  disabled={!selectedreviewId}
  className="px-6 py-2 shadow rounded-md transition border-2 text-black border-black hover:bg-gray-200"
 onClick={async () => {
  if (!selectedreviewId) {
    toast.error("Please select a survey first.");
    return;
  }

  try {
    const docRef = doc(db, "productQuestions", selectedreviewId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      toast.error("Survey not found.");
      return;
    }

    const data = docSnap.data();

    if (!data.approved) {
      toast.error("This survey has not been approved yet.");
      return;
    }

    const baseUrl = window.location.origin;
    const responseUrl = `${baseUrl}/product-review?surveyId=${selectedreviewId}`;
    await navigator.clipboard.writeText(responseUrl);

    toast.success("Link copied successfully!");
  } catch (error) {
    console.error("Error checking approval status:", error);
    toast.error("Failed to copy survey link.");
  }
}}
>
  Copy Survey Link
</button>

          </div>
           {userprevs.length > 0 && (
  <div className="my-4  flex justify-center">
  

    <select
onChange={async (e) => {
  const selected = userprevs.find((s) => s.id === e.target.value);
  if (selected) {
    setselectedreviewId(selected.id);
    setTitle(selected.title);
const questionsWithImages = selected.items.map((item) => ({
  text: item.question,
  images: [...(item.imageUrls || [])],
  files: [],
  enableImage: (item.imageUrls || []).length > 0,
  correctImages: item.correctImages || [],
}));

    

setQuestions(
  questionsWithImages.map((q) => ({
    ...q,
    enableImage: q.images.length > 0, // force-enable toggle for loaded image questions
    files: [], // ensure clean state
  }))
);


    setCurrentPage(0);
    setIsEditingExisting(true); // <-- Mark that we're editing an existing survey
  }
}}


      className="border p-2 rounded ml-2 "
    >
      
      <option value="">-- Choose Survey --</option>
      {userprevs.map((s) => (
        <option key={s.id} value={s.id}>
          {s.title}
        </option>
      ))}
    </select>
      
    
 
  </div>
)}
        </div>
        

        {modalOpen && selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setModalOpen(false)} // Click anywhere to close
          >
            <div className="relative max-w-4xl max-h-[90vh] overflow-auto rounded-xl">
              <img
                src={selectedImage}
                alt="Full view"
                className="rounded-xl object-contain max-h-[90vh] max-w-full"
              />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Preview Modal */}

        <PreviewModal
          previewOpen={previewOpen}
          setPreviewOpen={setPreviewOpen}
          questions={questions}
          title={title}
        />
{introModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="bg-white max-w-lg w-full rounded-xl shadow-2xl p-8 space-y-6 relative animate-fadeIn">
      <div className="text-center space-y-2">
          <h1 className="  border-2  p-2 font-bold text-purple-700   rounded-md   tracking-wide text-center mb-2  hover:bg-black/15">
   Qanvas(画布)
</h1>
        <p className="text-gray-600 text-base">
          {introStep === 0 &&
            "Easily build and share custom question sets. Add text, images, and more across multiple steps."}
          {introStep === 1 &&
            "For each question, you can enable image uploads. Toggle image support, preview your survey, and customize freely."}
          {introStep === 2 &&
            "When done, you can save, edit later, or share your survey link after approval. Great for feedback, polls, research, and more."}
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2">
        {[0, 1, 2].map((step) => (
          <span
            key={step}
            className={`w-3 h-3 rounded-full ${
              introStep === step ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          disabled={introStep === 0}
          onClick={() => setIntroStep((s) => Math.max(0, s - 1))}
          className="px-4 py-2 rounded-md border hover:bg-gray-100 disabled:opacity-40"
        >
          Back
        </button>
        {introStep < 2 ? (
          <button
            onClick={() => setIntroStep((s) => s + 1)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Next
          </button>
        ) : (
          <button
            onClick={async () => {
              setIntroModalOpen(false);
              if (user?.uid) {
                const userRef = doc(db, "users", user.uid);
                await setDoc(userRef, { hasSeenIntro: true }, { merge: true });
              }
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Get Started
          </button>
        )}
      </div>

      {/* Dismiss Button */}
      <button
        onClick={() => setIntroModalOpen(false)}
        className="absolute top-3 right-4 text-gray-400 hover:text-red-600"
      >
        ✕
      </button>
    </div>
  </div>
)}


      </div>
    </PrivateRoute>
  );
}
