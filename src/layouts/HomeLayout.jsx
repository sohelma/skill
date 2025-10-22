// src/layouts/HomeLayout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/logo.png"; // logo import করা হলো
import Navbar from "../components/Navbar";
const HomeLayout = () => {
  return (
    <div className="min-h-screen w-11/12 bg-gray-50 flex flex-col">
      <Navbar></Navbar>


      <main className="flex-1 p-6">
        <Outlet />
      </main>

   
      <Footer />
    </div>
  );
};

export default HomeLayout;
