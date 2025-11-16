"use client";

import { Star, Instagram, Linkedin, Github } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";

export default function Sidebar() {
  const { favorites } = useFavorites();

  return (
    <div className="w-20 bg-black border-r border-gray-800 flex flex-col items-center py-8 gap-8">
      {/* Favorites section */}
      <div className="flex flex-col items-center gap-3">
        <Star size={24} className="text-yellow-400" />
        <div className="flex flex-col items-center gap-2">
          {favorites.length === 0 ? (
            <span className="text-[10px] text-gray-500 rotate-90 whitespace-nowrap">
              add fav
            </span>
          ) : (
            favorites.slice(0, 6).map((tool) => (
              <div
                key={tool.id ?? tool.name}
                className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center text-[10px] text-yellow-300"
                title={tool.name}
              >
                {tool.name.charAt(0).toUpperCase()}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Social links */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <a 
          href="https://www.linkedin.com/in/aashishrajput9838/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition p-3"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="https://github.com/aashishrajput9838" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition p-3"
        >
          <Github size={24} />
        </a>
        <a 
          href="https://www.instagram.com/aspirinexar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition p-3"
        >
          <Instagram size={24} />
        </a>
      </div>
    </div>
  )
}
