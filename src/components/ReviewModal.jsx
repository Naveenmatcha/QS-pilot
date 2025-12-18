import React, { useState } from "react";
import StarRating from "./StarRating";

export default function ReviewModal({ booking, onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [appRating, setAppRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm p-5 rounded-2xl shadow-lg">
        <h3 className="font-bold text-lg mb-3">Rate Your Experience</h3>

        <p className="text-sm text-gray-600">Professional Rating</p>
        <StarRating value={rating} onChange={setRating} />

        <p className="text-sm text-gray-600 mt-3">App Experience</p>
        <StarRating value={appRating} onChange={setAppRating} />

        <textarea
          placeholder="Write a short review (optional)"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full mt-3 p-3 border rounded"
        />

        <div className="flex gap-2 mt-4">
          <button
            onClick={onClose}
            className="flex-1 p-2 border rounded"
          >
            Skip
          </button>
          <button
            onClick={() =>
              onSubmit({ rating, appRating, review })
            }
            className="flex-1 p-2 bg-qsBlue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
