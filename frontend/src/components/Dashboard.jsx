import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale);

const Dashboard = ({ data }) => {
  const chartData = {
    labels: Object.keys(data.category_counts),
    datasets: [
      {
        label: "Feedback Count",
        data: Object.values(data.category_counts),
        backgroundColor: ["#f87171", "#34d399", "#fbbf24"], // red, green, yellow
      },
    ],
  };

  const options = { responsive: true, maintainAspectRatio: false };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Chart */}
      <div className="bg-white rounded-xl shadow p-4" style={{ height: "400px" }}>
        <h2 className="text-xl font-semibold mb-4">Feedback Priority Chart</h2>
        <Bar data={chartData} options={options} />
      </div>

      {/* Avg Rating */}
      <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4">Average Rating</h2>
        <p className="text-4xl font-bold">{data.avg_rating.toFixed(2)} ⭐</p>
      </div>

      {/* Top Feedbacks */}
      {Object.keys(data.top_feedbacks).map((cat) => (
        <div key={cat} className="bg-white rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold mb-2">{cat}</h3>
          {data.top_feedbacks[cat].map((item, idx) => (
            <div key={idx} className="border p-2 mb-2 rounded">
              <p className="text-gray-700">{item['reviews.text']}</p>
              <p className="text-gray-500 text-sm">Rating: {item['reviews.rating']}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
