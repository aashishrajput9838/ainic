"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { addDocument, deleteDocument, getDocumentsByField } from "@/lib/firestore";

export interface FavoriteTool {
  // ID of the AI tool (from aiTools collection)
  id?: string;
  name: string;
  description: string;
  image: string;
  category: string;
  // Internal Firestore document id for the favorite record
  _favoriteDocId?: string;
}

interface FavoritesContextType {
  favorites: FavoriteTool[];
  isFavorite: (tool: FavoriteTool) => boolean;
  // Now async because we read/write Firestore
  toggleFavorite: (tool: FavoriteTool) => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<FavoriteTool[]>([]);

  // Load favorites for the current user from Firestore
  useEffect(() => {
    const load = async () => {
      if (!user) {
        setFavorites([]);
        return;
      }

      const { documents, error } = await getDocumentsByField(
        "userFavorites",
        "uid",
        user.uid
      );

      if (error) {
        console.error("Failed to load favorites from Firestore", error);
        return;
      }

      const mapped: FavoriteTool[] = (documents as any[]).map((doc) => ({
        id: doc.toolId,
        name: doc.name,
        description: doc.description,
        image: doc.image,
        category: doc.category,
        _favoriteDocId: doc.id,
      }));

      setFavorites(mapped);
    };

    load();
  }, [user]);

  const isFavorite = (tool: FavoriteTool) => {
    const key = tool.id ?? tool.name;
    return favorites.some((f) => (f.id ?? f.name) === key);
  };

  const toggleFavorite = async (tool: FavoriteTool) => {
    if (!user) {
      console.warn("User must be logged in to use favorites");
      return;
    }

    const key = tool.id ?? tool.name;
    const existing = favorites.find((f) => (f.id ?? f.name) === key);

    // If already a favorite, remove it
    if (existing) {
      setFavorites((prev) => prev.filter((f) => (f.id ?? f.name) !== key));

      if (existing._favoriteDocId) {
        const { error } = await deleteDocument("userFavorites", existing._favoriteDocId);
        if (error) {
          console.error("Failed to remove favorite from Firestore", error);
        }
      }

      return;
    }

    // Otherwise add as a new favorite
    const payload = {
      uid: user.uid,
      toolId: key,
      name: tool.name,
      description: tool.description,
      image: tool.image,
      category: tool.category,
    };

    const { id, error } = await addDocument("userFavorites", payload);

    if (error) {
      console.error("Failed to save favorite to Firestore", error);
      return;
    }

    setFavorites((prev) => [...prev, { ...tool, _favoriteDocId: id ?? undefined }]);
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
