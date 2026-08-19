import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function PreviewModal({ previewOpen, setPreviewOpen, questions, title }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <AnimatePresence>
      {previewOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            className={`${
              isFullScreen ? 'w-full h-full max-w-none max-h-none' : 'w-full max-w-5xl max-h-[85vh]'
            } bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col`}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white truncate">
                  {title || "Untitled Review"}
              </h2>
              <div className="flex space-x-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="px-4 py-1 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setPreviewOpen(false)}
                  className="px-4 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
                >
                  Close
                </motion.button>
              </div>
            </div>

            {/* Body */}
            <div className="overflow-y-auto px-6 py-4 space-y-8 flex-1">
              {questions.map((q, idx) => (
                <div key={idx} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <p className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">
                    Q{idx + 1}: {q.text || "(No text provided)"}
                  </p>
                
                {Array.isArray(q.images) && q.images.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
    {q.images.map((img, i) => (
      <motion.img
        key={i}
        src={img}
        alt={`Preview ${idx + 1} - ${i + 1}`}
        layoutId={`preview-img-${idx}-${i}`}
        className="w-full max-h-[300px] object-contain rounded-xl shadow"
      />
    ))}
  </div>
)}
              </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default PreviewModal