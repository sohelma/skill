import React, { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // যদি login পেজ থেকে email পাঠানো হয়, তাহলে সেটাকে autofill করব
  useEffect(() => {
    const preEmail = location.state?.email || "";
    if (preEmail) setEmail(preEmail);
  }, [location]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
      // ৩ সেকেন্ড পর Gmail এ নিয়ে যাওয়া হবে
      setTimeout(() => {
        window.location.href = "https://mail.google.com";
      }, 3000);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <Toaster />
      <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
      <form onSubmit={handleReset} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered"
          required
        />
        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Reset Password
        </button>
      </form>
      <p className="text-sm text-center mt-3 text-gray-600">
        Remembered password?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-blue-500 underline"
        >
          Go back to Login
        </button>
      </p>
    </div>
  );
};

export default ForgotPassword;
