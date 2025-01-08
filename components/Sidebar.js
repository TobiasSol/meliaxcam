import { Home, PlaySquare, Heart, Video, Lock, Camera, Film } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState('/');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { icon: <Home size={20} />, label: 'HOME', href: '/' },
    { icon: <PlaySquare size={20} />, label: 'LIVE CAMS', href: '/meliax-cam' },
    { icon: <Heart size={20} />, label: 'ONLYFANS', href: '/meliax-onlyfans' },
    { icon: <Video size={20} />, label: 'STRIPCHAT', href: '/meliax-stripchat' },
    { icon: <Lock size={20} />, label: 'LEAKS', href: '/meliax-leaks' },
    { icon: <Camera size={20} />, label: 'NUDES', href: '/meliax-nudes' },
    { icon: <Film size={20} />, label: 'SEX', href: '/meliax-sex' },
    { icon: <Camera size={20} />, label: 'NACKT', href: '/meliax-nackt' },
  ];

  const sidebarContent = (
    <div className="relative h-[calc(100vh-64px)] flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative flex-1 flex flex-col h-full">
        <div className="p-8 mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent uppercase tracking-wider">
            MeliaX
          </h2>
        </div>

        <div className="px-6 flex-1">
          <h3 className="text-xs font-medium text-pink-500/60 uppercase tracking-wider mb-6 px-4">
            MENU
          </h3>
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 group relative
                  ${activeItem === item.href 
                    ? 'bg-pink-500/10 text-pink-400' 
                    : 'hover:bg-pink-500/5 text-gray-400 hover:text-pink-400'}`}
                onClick={() => {
                  setActiveItem(item.href);
                  isMobile && setIsMobileMenuOpen(false);
                }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                
                <span className={`relative transition-colors duration-300
                  ${activeItem === item.href ? 'text-pink-500' : 'group-hover:text-pink-500'}`}>
                  {item.icon}
                </span>
                
                <span className="relative text-sm font-medium tracking-wide uppercase">{item.label}</span>
                
                {activeItem === item.href && (
                  <span className="absolute right-4 w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-8">
          <div className="p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm">
            <p className="text-xs text-pink-300/60 text-center uppercase tracking-wider">
              © {new Date().getFullYear()} MeliaX
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40 md:hidden overflow-y-auto">
            {sidebarContent}
          </div>
        )}
      </>
    );
  }

  return (
    <aside className="hidden md:block w-80 bg-black/80 backdrop-blur-lg border-r border-pink-500/10 fixed left-0 top-16 h-[calc(100vh-64px)]">
      {sidebarContent}
    </aside>
  );
}