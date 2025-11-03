'use client';

import { useState } from 'react';
import { useSearch } from '@/contexts/SearchContext';

export default function Hero() {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const { setSearchTerm } = useSearch();

  // Add real-time search update
  const handleRealTimeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setLocalSearchTerm(term);
    // Update search term in real-time
    setSearchTerm(term);
    
    // Scroll to the token section as user types
    const element = document.getElementById('token-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-96 pt-24">
      {/* Background video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex flex-col justify-center px-12 max-w-2xl">
        <h1 className="text-6xl font-bold mb-6 leading-tight">Ainic | The AI Playground You'll Never Want to Leave.</h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                 
                 
          
        </p>

        <div className="mb-8">
          <p className="text-yellow-400 text-lg font-semibold">Followers: 11k</p>
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search for aitools"
            value={localSearchTerm}
            onChange={handleRealTimeSearch}
            className="flex-1 bg-black/60 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
          />
        </div>
      </div>
    </div>
  )
}