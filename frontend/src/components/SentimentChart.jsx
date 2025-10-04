import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const SentimentChart = ({ sentimentData }) => {
  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Feedback Count",
        data: [
          sentimentData.positive || 0,
          sentimentData.neutral || 0,
          sentimentData.negative || 0,
        ],
        backgroundColor: [ "#E6CFA9","#C1856D", "#9A3F3F"],
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
      maintainAspectRatio: false, // important: div ke size ko follow kare
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Sentiment Distribution",
        font: { size: 18 },
      },
    },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="bg-[#3E0703] shadow-lg p-4 mb-6" style={{ maxWidth: "600px", height: "400px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SentimentChart;
