'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-yellow-400 text-black px-6 py-2 font-semibold hover:bg-yellow-300 transition rounded-lg"
            >
              Logout
            </button>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-yellow-400/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-400">
                  {user?.email?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome back!</h2>
                <p className="text-gray-400">{user?.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Your AI Tools</h3>
                <p className="text-gray-400">Access all 50+ AI tools in your playground</p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Saved Projects</h3>
                <p className="text-gray-400">View and manage your saved creations</p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Settings</h3>
                <p className="text-gray-400">Manage your account and preferences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}