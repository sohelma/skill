import React, { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";

  // from Login email sent
  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);

const handleResetPassword = async (e) => {
  e.preventDefault();

  if (!email) {
    toast.error("Please enter your email!");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    toast.success(`✅ Reset email sent to ${email}.`);
    setEmail(""); // clear form
    navigate("/login"); // redirect to login
  } catch (error) {
    toast.error("❌ " + error.message);
  }
 };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border p-2 rounded"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Send Reset Email
          </button>
        </form>

        <div className="mt-4 text-center">
          Remembered your password?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
