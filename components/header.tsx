"use client";

import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <header className="bg-black/80 backdrop-blur border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">ainic</div>

        <nav className="flex items-center gap-8">
          <a href="#" className="text-gray-400 hover:text-white transition">
            Agentic AI
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Text to Speech
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Text to Video
          </a>
        </nav>

        {user ? (
          <button 
            onClick={handleLogout}
            className="bg-yellow-400 text-black px-6 py-2 font-semibold hover:bg-yellow-300 transition flex items-center gap-2"
          >
            Logout
          </button>
        ) : (
          <a 
            href="/signup" 
            className="bg-yellow-400 text-black px-6 py-2 font-semibold hover:bg-yellow-300 transition flex items-center gap-2"
          >
            Signup
          </a>
        )}
      </div>
    </header>
  )
}
