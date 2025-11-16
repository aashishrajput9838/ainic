"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface FavoriteTool {
  id?: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

interface FavoritesContextType {
  favorites: FavoriteTool[];
  isFavorite: (tool: FavoriteTool) => boolean;
  toggleFavorite: (tool: FavoriteTool) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteTool[]>([]);

  // Load favorites from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem("ainic_favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load favorites from localStorage", error);
    }
  }, []);

  // Persist favorites to localStorage whenever they change
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("ainic_favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites to localStorage", error);
    }
  }, [favorites]);

  const isFavorite = (tool: FavoriteTool) => {
    const key = tool.id ?? tool.name;
    return favorites.some((f) => (f.id ?? f.name) === key);
  };

  const toggleFavorite = (tool: FavoriteTool) => {
    const key = tool.id ?? tool.name;
    setFavorites((prev) => {
      const exists = prev.some((f) => (f.id ?? f.name) === key);
      if (exists) {
        return prev.filter((f) => (f.id ?? f.name) !== key);
      }
      return [...prev, tool];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
