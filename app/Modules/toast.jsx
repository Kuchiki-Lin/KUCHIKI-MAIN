import toast from "react-hot-toast";

function showConfirmToast(message, onConfirm, onCancel) {
  toast.custom(
    (t) => (
      <div className="bg-white border-2 border-black p-4 shadow rounded flex flex-col gap-2 w-[32rem]">
        <p className="text-gray-800">{message}</p>
        <div className="flex justify-end gap-2 mt-2 mx-auto">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              onCancel?.();
            }}
            className="px-4 py-1 bg-yellow-200 rounded hover:bg-gray-300 text-sm"
          >
            SAVE AS NEW
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              onConfirm?.();
            }}
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm "
          >
            OVER-WRITE
          </button>
        </div>
      </div>
    ),
    {
      id: "confirm-toast", // optional: helps prevent duplicates
      duration: Infinity, // 👈 ensures it stays until dismissed
      position: "top-center", // optional: customize position
    }
  );
}


export default showConfirmToast;