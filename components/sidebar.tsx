"use client";

import { useState } from "react";
import { Star, Instagram, Linkedin, Github } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";

export default function Sidebar() {
  const { favorites } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);

  const hasFavorites = favorites.length > 0;

  const togglePanel = () => {
    if (!hasFavorites) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-20 bg-black border-r border-gray-800 flex flex-col items-center py-8 gap-8">
      {/* Favorites star trigger */}
      <button
        type="button"
        onClick={togglePanel}
        className={`p-3 rounded-full transition ${
          hasFavorites ? "hover:bg-yellow-400/10 cursor-pointer" : "cursor-default"
        }`}
        aria-label="Toggle favorite tools"
      >
        <Star
          size={24}
          className={hasFavorites || isOpen ? "text-yellow-400" : "text-gray-600"}
        />
      </button>

      {/* Favorites floating panel (collapsible) */}
      {isOpen && hasFavorites && (
        <div className="absolute left-20 top-8 z-20 w-64 max-h-80 overflow-y-auto bg-black border border-gray-800 rounded-xl shadow-xl p-4">
          <h3 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">
            Favorites
          </h3>
          <div className="flex flex-col gap-2">
            {favorites.map((tool) => (
              <div
                key={tool.id ?? tool.name}
                className="flex items-center gap-2 rounded-md bg-gray-900/60 border border-gray-800 px-2 py-1"
              >
                <div className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center text-xs text-yellow-300">
                  {tool.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white truncate">{tool.name}</p>
                  {tool.category && (
                    <p className="text-[10px] text-gray-400 truncate">{tool.category}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
