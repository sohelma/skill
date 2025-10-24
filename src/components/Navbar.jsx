import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import userImg from "../assets/user.png";
import logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);


  return (
    
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left Logo */}
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
            <img
              src={logo}
              alt="Logo"
              className="w-11 h-11 object-contain rounded-full shadow-sm border border-gray-200"
            />
            <span className="font-extrabold text-xl bg-gradient-to-r from-amber-600 to-orange-300 bg-clip-text text-transparent">
              SkillSwap
            </span>
          </Link>


          {/* Center Links */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-gray-700 font-semibold hover:text-blue-500 transition">Home</Link>
            <Link to="/profile" className="text-gray-700 font-semibold hover:text-blue-500 transition">My Profile</Link>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
           {user ? (
  <>
    <div className="relative group">
  <img
    src={user?.photoURL || userImg}
    alt={user?.displayName || "User"}
    className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 hover:border-green-600 transition"
  />
  
  {/* Hover করলে নাম দেখাবে */}
  <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
    {user?.displayName || "User"}
  </div>
</div>



    <button
      onClick={logOut}
      className="bg-gradient-to-r from-red-500 to-red-700 text-white px-3 py-1 rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  </>
) : (
  <>
    <Link
      to="/login"
      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
    >
      Login
    </Link>
    <Link
      to="/signup"
      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
    >
      Signup
    </Link>
  </>
)}

          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col gap-2 px-4 py-2">
          <Link to="/" className="block px-2 py-1 hover:bg-gray-100 rounded">Home</Link>
          <Link to="/profile" className="block px-2 py-1 hover:bg-gray-100 rounded">My Profile</Link>
          {user ? (
            <>
              <button
                onClick={logOut}
                className="w-full bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block w-full bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">Login</Link>
              <Link to="/signup" className="block w-full bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">Signup</Link>
            </>
          )}
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
