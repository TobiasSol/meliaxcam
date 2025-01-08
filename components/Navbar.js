import { Search, Bell, User, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-lg border-b border-pink-500/10 z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center h-full px-6">
        <div className="flex items-center gap-4">
          <Menu 
            className="text-gray-400 cursor-pointer hover:text-pink-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent uppercase">
              MeLiax-CAM
            </span>
          </Link>
        </div>

        <div className="flex-1 max-w-2xl mx-auto">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="VIDEOS SUCHEN..."
              className="w-full bg-black/30 border border-pink-500/10 rounded-l-xl px-4 py-2 text-gray-200 focus:outline-none focus:border-pink-500 transition-colors uppercase"
            />
            <button className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-r-xl text-white transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Bell className="text-gray-400 hover:text-pink-500 transition-colors cursor-pointer" />
          <User className="text-gray-400 hover:text-pink-500 transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <Menu 
            className="text-gray-400 hover:text-pink-500 transition-colors cursor-pointer" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              MeliaX
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-400 hover:text-pink-500 transition-colors"
          >
            <Search size={20} />
          </button>
          <User className="text-gray-400 hover:text-pink-500 transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/80 backdrop-blur-lg p-4 border-b border-pink-500/10">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full bg-black/30 border border-pink-500/10 rounded-l-xl px-4 py-2 text-gray-200 focus:outline-none focus:border-pink-500 transition-colors"
              autoFocus
            />
            <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-r-xl text-white transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}