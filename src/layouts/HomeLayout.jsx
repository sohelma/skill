import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar সব পেজে কমন */}
      <Navbar />

      {/* Dynamic page content */}
      <main className="flex-grow max-w-6xl mx-auto p-4">
        <Outlet />
      </main>

      {/* Optional Footer */}
      <footer className="bg-gray-200 text-center py-3 mt-6 text-sm text-gray-700">
        © {new Date().getFullYear()} My Skill App — All rights reserved.
      </footer>
    </div>
  );
};

export default HomeLayout;
