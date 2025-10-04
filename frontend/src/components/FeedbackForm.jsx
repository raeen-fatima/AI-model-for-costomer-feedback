import { useState } from "react";
import React from 'react'

export default function FeedbackForm({ onAnalyze }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = () => {
    if (!text || !rating) return alert("Please enter feedback & rating!");
    onAnalyze(text, rating);
    setText("");
    setRating("");
  };

  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter customer feedback..."
        className="w-full p-3 rounded-lg bg-gray-800 text-white border-none outline-none"
      />
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating (1-5)"
        className="w-full mt-3 p-2 rounded-lg bg-gray-800 text-white"
      />
      <button
        onClick={handleSubmit}
        className="w-full mt-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold"
      >
        Analyze Feedback
      </button>
    </div>
  );
}
