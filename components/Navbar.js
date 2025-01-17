import { Bell, User, Menu } from 'lucide-react';
import { FaTwitch, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
import AdBanner from './AdBanner';

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-auto bg-black/80 backdrop-blur-lg border-b border-pink-500/10 z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center min-h-[120px] px-6">
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

        <div className="flex-1 max-w-5xl mx-auto px-4">
          <AdBanner />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col">
        <div className="flex items-center justify-between h-16 px-4">
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
        </div>
        
        <div className="w-full">
          <AdBanner />
        </div>
      </div>
    </nav>
  );
}