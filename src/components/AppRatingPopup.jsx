import React, { useEffect, useState } from "react";

export default function AppRatingPopup() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const today = new Date().toDateString();
    const data = JSON.parse(localStorage.getItem("qs_app_rating") || "{}");

    if (data.date === today && data.count >= 2) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const submit = () => {
    const today = new Date().toDateString();
    const data = JSON.parse(localStorage.getItem("qs_app_rating") || "{}");

    localStorage.setItem(
      "qs_app_rating",
      JSON.stringify({
        date: today,
        count: (data.count || 0) + 1,
        rating,
        feedback,
      })
    );

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-xl w-11/12 max-w-sm">
        <h3 className="font-semibold text-lg mb-2">
          Enjoying QuickSeva?
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          Rate your app experience
        </p>

        <div className="flex gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              onClick={() => setRating(n)}
              className={`text-2xl cursor-pointer ${
                n <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Feedback (optional)"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <button
          onClick={submit}
          className="w-full p-3 bg-qsBlue-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
