"use client";

import React, { useState } from "react";
import { Chrome } from "lucide-react";
import { app } from "@/lib/firebase";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  
  const auth = getAuth(app);
  
  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to home page or dashboard
      window.location.href = "/";
    } catch (err) {
      setError("Failed to create account. Please try again.");
      console.error(err);
    }
  };
  
  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Redirect to home page or dashboard
      window.location.href = "/";
    } catch (err) {
      setError("Failed to signup with Google.");
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
          Create your account
        </h2>
        
        {error && (
          <div className="mb-4 p-2 bg-red-500 text-white text-sm rounded">
            {error}
          </div>
        )}

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Sign Up Button */}
        <button 
          onClick={handleEmailSignup}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-all"
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-700" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-700" />
        </div>

        {/* Google Signup */}
        <button 
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-3 bg-[#0F0F0F] border border-gray-700 text-white py-2 rounded-lg hover:bg-[#1A1A1A] transition-all"
        >
          <Chrome size={20} />
          Sign up with Google
        </button>

        {/* Already have account */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;