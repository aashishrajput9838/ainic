"use client";

import React, { useState } from "react";
import { Chrome } from "lucide-react";
import { app } from "@/lib/firebase";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const auth = getAuth(app);
  
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to home page or dashboard
      window.location.href = "/";
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
      console.error(err);
    }
  };
  
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Redirect to home page or dashboard
      window.location.href = "/";
    } catch (err) {
      setError("Failed to login with Google.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-[#1E1E1E] p-8 rounded-2xl w-full max-w-md shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
            <span className="text-white font-bold text-xl">V</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-white mb-6">
          Log In to your account
        </h2>
        
        {error && (
          <div className="mb-4 p-2 bg-red-500 text-white text-sm rounded">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="hello.designwell@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-gray-400 text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <a href="#" className="text-sm text-orange-500 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Log In Button */}
        <button 
          onClick={handleEmailLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-all"
        >
          Log In
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-700" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-700" />
        </div>

        {/* Google Login */}
        <button 
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-[#0F0F0F] border border-gray-700 text-white py-2 rounded-lg hover:bg-[#1A1A1A] transition-all"
        >
          <Chrome size={20} />
          Log in with Google
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;