'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useAuth as useAuthHook } from '@/hooks/useAuth';

interface AuthContextType {
  user: any;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ user: any; error: any }>;
  signUp: (email: string, password: string) => Promise<{ user: any; error: any }>;
  signInWithGoogle: () => Promise<{ user: any; error: any }>;
  logout: () => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuthHook();
  
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}