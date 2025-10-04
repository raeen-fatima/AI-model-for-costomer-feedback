import React from 'react'

export default function ResultCard({ result }) {
  return (
    <div className="bg-[#3E0703] backdrop-blur-lg p-5 rounded-xl text-center shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">Analysis Result</h2>
      <p><strong>Sentiment:</strong> {result.sentiment}</p>
      <p><strong>Category:</strong> {result.category}</p>
    </div>
  );
}
