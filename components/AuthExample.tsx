'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function AuthExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { user, loading, signIn, signUp, logout } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      const { error } = await signIn(email, password);
      if (error) {
        console.error('Login error:', error);
      }
    } else {
      const { error } = await signUp(email, password);
      if (error) {
        console.error('Signup error:', error);
      }
    }
  };

  const handleLogout = async () => {
    const { error } = await logout();
    if (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg">
      {user ? (
        <div>
          <p className="text-white mb-4">Welcome, {user.email}!</p>
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black px-4 py-2 font-semibold rounded hover:bg-yellow-300 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-yellow-400 hover:text-yellow-300 transition"
          >
            {isLogin ? 'Need an account? Sign Up' : 'Have an account? Login'}
          </button>
        </form>
      )}
    </div>
  );
}