// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase.config';
import { signOut } from 'firebase/auth';
import userImg from '../assets/user.png';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  const handleLogout = async () => {
    await signOut(auth);
    alert('Logged out successfully');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Left side */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        <Link to="/" className="text-gray-700 font-semibold hover:text-blue-500">Home</Link>
        <Link to="/profile" className="text-gray-700 font-semibold hover:text-blue-500">My Profile</Link>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <img
              src={user.photoURL || userImg}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full"
              title={user.displayName || user.email}
            />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
