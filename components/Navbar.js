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

        <div className="flex-1 max-w-5xl mx-auto py-2 z-50">
          <AdBanner />
        </div>

        {/* Social Media Icons nach rechts mit mehr Abstand */}
        <div className="md:hidden lg:flex flex-col items-center mr-8">
          <span className="text-sm text-pink-500 animate-pulse mb-2 font-bold text-center">
            ❤️ Folg mir und bekomm was fürs Auge! ❤️
          </span>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://www.instagram.com/lia.the.real"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@me.lia.x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition-colors"
            >
              <FaTiktok size={24} />
            </a>
            <a 
              href="https://twitter.com/me_lia_x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
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
          
          {/* Neue Position für Social Media Icons im mobilen Layout */}
          <div className="flex flex-col items-end">
            <span className="text-xs text-pink-500 mb-1 font-medium">
              ❤️ Folg mir! ❤️
            </span>
            <div className="flex items-center gap-2">
              <a 
                href="https://www.instagram.com/lia.the.real"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@me.lia.x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                <FaTiktok size={20} />
              </a>
              <a 
                href="https://twitter.com/me_lia_x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full border border-pink-500">
          <AdBanner />
        </div>

        {/* Entferne den alten Social Media Bereich */}
      </div>
    </nav>
  );
}