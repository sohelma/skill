import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-11/12 mx-auto">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="bg-gray-200 text-center py-4 mt-6">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
