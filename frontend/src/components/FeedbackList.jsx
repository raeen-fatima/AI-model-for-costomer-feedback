import React from "react";

const FeedbackList = ({ reviews }) => {
  return (
    <div className="bg-[#3E0703] rounded-xl shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Recent Feedbacks</h2>
      <ul className="divide-y divide-gray-200">
        {reviews.map((r, i) => (
          <li key={i} className="py-2">
            <p className="font-semibold">{r.text}</p>
            <p className="text-sm text-gray-500">Rating: {r.rating} | Sentiment: {r.sentiment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
