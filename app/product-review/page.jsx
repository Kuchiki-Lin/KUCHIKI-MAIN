"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import { Switch, Tooltip } from "antd";
import toast from "react-hot-toast";

export default function ReviewResponsePage() {
  const [reviewData, setReviewData] = useState(null);
  const [responses, setResponses] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [textEnabled, setTextEnabled] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [reviewerName, setReviewerName] = useState("");

  const searchParams = useSearchParams();
  const surveyId = searchParams.get("surveyId");

  useEffect(() => {
    if (!surveyId) return;

    const fetchReview = async () => {
      const docRef = doc(db, "productQuestions", surveyId);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        setReviewData({
          ...data,
          isAnonymous: data.isAnonymous ?? true,
        });

        const length = data.items.length;
        setResponses(Array(length).fill(""));
        setSelectedImages(Array(length).fill(null));
        setTextEnabled(Array(length).fill(false));
      }
    };

    fetchReview();
  }, [surveyId]);

  const handleResponseChange = (index, value) => {
    const updated = [...responses];
    updated[index] = value;
    setResponses(updated);
  };

  const handleImageSelect = (qIndex, imageUrl) => {
    const updated = [...selectedImages];
    updated[qIndex] = imageUrl === updated[qIndex] ? null : imageUrl; // toggle selection
    setSelectedImages(updated);
  };

  const toggleTextInput = (index, checked) => {
    const updated = [...textEnabled];
    updated[index] = checked;
    setTextEnabled(updated);
  };

  const submitResponses = async () => {
    if (!reviewData.isAnonymous && reviewerName.trim() === "") {
      toast.error("Please enter your name before submitting.");
      return;
    }

    await addDoc(collection(db, "productResponses"), {
      reviewId: surveyId,
      reviewerName: reviewData.isAnonymous ? null : reviewerName.trim(),
      responses,
      selectedImages,
      submittedAt: new Date().toISOString(),
    });

    setSubmitted(true);
  };

  if (!reviewData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-xl">Loading survey...</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-green-600 text-2xl font-semibold">
          Thanks for your feedback!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {reviewData.title}
      </h1>

      {!reviewData.isAnonymous && (
        <div className="mb-8">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 text-center placeholder:text-center"
            placeholder="Enter your name"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
          />
        </div>
      )}

      <div className="space-y-10">
        {reviewData.items.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white"
          >
            <p className="text-lg font-medium text-gray-800 mb-4">
              Question {index + 1}: {item.question}
            </p>

            {/* Images */}
            <div
              className={`grid ${
                item.imageUrls?.length > 1
                  ? "grid-cols-1 sm:grid-cols-2 gap-4"
                  : "flex justify-center"
              } mt-4`}
            >
              {(item.imageUrls || []).map((url, i) => {
                const isSelected = selectedImages[index] === url;
                return (
                  <div
                    key={i}
                    className={`relative w-full h-[240px] rounded overflow-hidden cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "ring-4 ring-blue-500 scale-[1.02]"
                        : "border border-gray-200"
                    }`}
                    onClick={() => handleImageSelect(index, url)}
                    onDoubleClick={() => {
                      setModalImage(url);
                      setModalOpen(true);
                    }}
                  >
                    <img
                      src={url}
                      alt={`Q${index + 1} Image ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-blue-500 bg-opacity-30 flex items-center justify-center text-white text-lg font-semibold">
                        Selected
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Toggle Answer Input */}
            <div className="flex items-center justify-end mt-4 gap-2">
              <Tooltip title="Add text answer">
                <Switch
                  checked={textEnabled[index]}
                  onChange={(checked) => toggleTextInput(index, checked)}
                />
              </Tooltip>
              <span className="text-gray-600 text-sm">Add text response</span>
            </div>

            {/* Text Input (Toggled) */}
            {textEnabled[index] && (
              <textarea
                className="mt-4 w-full p-4 border border-gray-300 rounded-lg resize-none shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={responses[index]}
                onChange={(e) => handleResponseChange(index, e.target.value)}
                placeholder="Type your response here..."
                rows={3}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={submitResponses}
          className="px-6 py-2 shadow rounded-md transition border-2 text-black border-black hover:bg-gray-200"
        >
          Submit Responses
        </button>
      </div>

      {/* Fullscreen Image Modal */}
      {modalOpen && modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-auto rounded-xl">
            <img
              src={modalImage}
              alt="Full View"
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
    </div>
  );
}
