import React from "react";
import Sidebar from "./components/Sidebar";
import TopCards from "./components/TopCards";
import SentimentChart from "./components/SentimentChart";
import FeedbackList from "./components/FeedbackList";

const mockData = {
  avgRating: 4.1,
  totalReviews: 120,
  neutral: 20,
  positive: 80,
  negative: 20,
};

const mockReviews = [
  { text: "Great product!", rating: 5, sentiment: "POSITIVE" },
  { text: "Not satisfied", rating: 2, sentiment: "NEGATIVE" },
  { text: "Okayish", rating: 3, sentiment: "NEUTRAL" },
];

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <TopCards stats={mockData} />
        <SentimentChart sentimentData={mockData} />
        <FeedbackList reviews={mockReviews} />
      </div>
    </div>
  );
}

export default App;
