// src/pages/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login successful!');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success('Google Login successful!');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input input-bordered" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input input-bordered" required />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <button onClick={handleGoogleLogin} className="btn btn-outline mt-3 w-full">Login with Google</button>
      <p className="mt-2 text-sm">Don't have an account? <Link to='/signup' className="text-blue-500 underline">Signup</Link></p>
      <Toaster />
    </div>
  );
};

export default Login;
