'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function AuthStatus() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      // Refresh the page to update the auth state
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="px-4 py-2 text-gray-400">
        Checking auth...
      </div>
    );
  }

  return (
    <div className="px-4 py-2 flex items-center gap-3">
      {user ? (
        <>
          <span className="text-gray-300 text-sm">{user.email}</span>
          <button
            onClick={handleLogout}
            className="text-yellow-400 hover:text-yellow-300 transition text-sm"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={() => router.push('/login')}
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          Login
        </button>
      )}
    </div>
  );
}