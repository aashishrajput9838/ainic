'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import AuthStatus from '@/components/AuthStatus';
import { useSearch } from '@/contexts/SearchContext';

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const { setSearchTerm, activeCategory, setActiveCategory } = useSearch();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    // Scroll to the token section
    const element = document.getElementById('token-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black/80 backdrop-blur border-b border-gray-800 sticky top-0 z-[9999]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div 
          className="text-2xl font-bold cursor-pointer"
          onClick={handleLogoClick}
        >
          ainic
        </div>

        <nav className="flex items-center gap-8">
          <button 
            className={`font-semibold ${activeCategory === 'all' ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => handleCategoryClick('all')}
          >
            All Tools
          </button>
          <button 
            className={`font-semibold ${activeCategory === 'audio' ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => handleCategoryClick('audio')}
          >
            Text to Speech
          </button>
          <button 
            className={`font-semibold ${activeCategory === 'video' ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => handleCategoryClick('video')}
          >
            Text to Video
          </button>
          <button 
            className={`font-semibold ${activeCategory === 'image' ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`}
            onClick={() => handleCategoryClick('image')}
          >
            Text to Image
          </button>
        </nav>

        <AuthStatus />
      </div>
    </header>
  );
}