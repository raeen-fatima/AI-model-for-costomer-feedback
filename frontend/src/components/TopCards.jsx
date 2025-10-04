import React from "react";

const TopCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      <div className="bg-[#3E0703] p-6 rounded-xl shadow-lg">
        <p className="text-gray-500">Average Rating</p>
        <h2 className="text-2xl font-bold">{stats.avgRating || 0}</h2>
      </div>
      <div className="bg-[#3E0703] p-6 rounded-xl shadow-lg">
        <p className="text-gray-500">Total Reviews</p>
        <h2 className="text-2xl font-bold">{stats.totalReviews || 0}</h2>
      </div>
      <div className="bg-[#3E0703] p-6 rounded-xl shadow-lg">
        <p className="text-gray-500">Neutral</p>
        <h2 className="text-2xl font-bold">{stats.neutral || 0}</h2>
      </div>
      <div className="bg-[#3E0703] p-6 rounded-xl shadow-lg">
        <p className="text-gray-500">Positive</p>
        <h2 className="text-2xl font-bold">{stats.positive || 0}</h2>
      </div>
    </div>
  );
};

export default TopCards;
