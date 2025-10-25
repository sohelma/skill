// pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import Loader from "../components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loader for both login methods

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Loader show
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false); // Loader hide
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setLoading(true); // Loader show
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false); // Loader hide
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-sky-100 to-indigo-100">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-md p-6 bg-gradient-to-b from-white to-grey-100 rounded-2xl shadow-xl">
          <h2 className="text-2xl text-indigo-600 font-bold mb-6 text-center">
            <span className="font-light">Welcome to Our<br /></span>Login
          </h2>

          {/* Email/Password Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
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

            <div>
              <label className="block mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border p-2 rounded"
                  placeholder="Enter your password"
                />
                <span
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white py-2 rounded hover:from-blue-400 hover:to-blue-800 transition-all duration-300"
            >
              Login
            </button>
          </form>

          {/* Forgot Password & Google Login */}
          <div className="mt-4 flex justify-between items-center">
            <Link to="/forgot-password" state={{ email }} className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>

            <button
              onClick={handleGoogleLogin}
              className="bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-700 text-gray-200"
            >
              Login with Google
            </button>
          </div>

          {/* Signup Link */}
          <div className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
