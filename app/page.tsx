'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Header from "@/components/header"
import Hero from "@/components/hero"
import Sidebar from "@/components/sidebar"
import TokenSection from "@/components/token-section"
import AuthStatus from "@/components/AuthStatus"

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Show loading state while checking auth status
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Hero />
          <TokenSection />
        </main>
      </div>
    </div>
  );
}