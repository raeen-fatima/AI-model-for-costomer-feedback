import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#3E0703] text-white h-screen p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">AI Feedback App</h1>
      <nav className="flex flex-col space-y-4">
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Dashboard</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Feedbacks</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Settings</a>
      </nav>
    </div>
  );
};

export default Sidebar;
