import { useState } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Image from 'next/image';
import { Heart, ExternalLink, Star, MessageCircle, DollarSign, Gift } from 'lucide-react';

export default function StripchatPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const streamStats = [
    { label: 'Viewers', value: '1.2K' },
    { label: 'Followers', value: '45K' },
    { label: 'Tips', value: '12.5K' },
    { label: 'Rating', value: '4.9★' }
  ];

  return (
    <div className="min-h-screen bg-[#E72C4B]/5 text-white">
      <Head>
        <title>MeliaX Stripchat - Live Cam Shows & Private Chats | Offizielle Seite</title>
        <meta name="description" content="Besuche MeliaX auf Stripchat für exklusive Live-Cam-Shows und private Chats. Erlebe heiße Live-Unterhaltung, interaktive Shows und intime Momente. Jetzt kostenlos beitreten!" />
        <meta name="keywords" content="meliax stripchat, stripchat meliax, meliax live cam, stripchat live shows, meliax private chat, stripchat model meliax" />
        <meta property="og:title" content="MeliaX Stripchat - Watch Live Adult Cam Shows" />
        <meta property="og:description" content="Join MeliaX's official Stripchat room for exclusive live adult cam shows and real-time interaction." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Stripchat" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-cam.de/meliax-stripchat" />
      </Head>

      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <main className="w-full max-w-[2000px] mx-auto px-4 lg:px-8 pb-16">
        <div className="mt-8 sm:mt-14 lg:mt-16">
          {/* Stream Window */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden border border-[#E72C4B]/20 mb-8">
            <div className="aspect-video bg-black relative">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://swgczdsrrcuvmckcfowd.supabase.co/storage/v1/object/public/videos/0220.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Stream wird geladen...</p>
              </div>
            </div>

            {/* Stream Info Bar */}
            <div className="p-4 lg:p-6 border-t border-[#E72C4B]/20">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {/* Neon Glow Effect */}
                    <div className="absolute -inset-0.5 bg-green-500 rounded-full blur opacity-75 animate-glow-pulse"></div>
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/leaks/meliax leak (1).jpg"
                        alt="MeliaX Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h1 className="text-xl lg:text-2xl font-bold">MeliaX</h1>
                    <p className="text-[#E72C4B] text-sm">Live Now</p>
                  </div>
                </div>
                
                <a 
                  href="https://tinyurl.com/meliaxcamstripchat" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E72C4B] text-white rounded-full hover:bg-[#D41E3C] transition-colors shadow-lg shadow-[#E72C4B]/20"
                >
                  <Heart size={20} />
                  <span className="font-semibold">Watch Live on Stripchat</span>
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <style jsx global>{`
              @keyframes glowPulse {
                0%, 100% { opacity: 0.75; }
                50% { opacity: 0.25; }
              }
              
              .animate-glow-pulse {
                animation: glowPulse 2s ease-in-out infinite;
              }
            `}</style>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {streamStats.map((stat, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-center border border-[#E72C4B]/20">
                <div className="text-xl lg:text-2xl font-bold text-[#E72C4B]">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Chat Rules */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#E72C4B]/20">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#E72C4B]">
                <MessageCircle size={20} />
                Chat Rules
              </h2>
              <ul className="space-y-3 text-gray-200">
                <li>• Be respectful and friendly</li>
                <li>• No spam or harassment</li>
                <li>• Follow room topic</li>
                <li>• Have fun!</li>
              </ul>
            </div>

            {/* Tip Menu */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#E72C4B]/20">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#E72C4B]">
                <DollarSign size={20} />
                Tip Menu
              </h2>
              <ul className="space-y-3">
                <li className="flex justify-between text-gray-200">
                  <span>Special Request</span>
                  <span className="text-[#E72C4B]">50 tokens</span>
                </li>
                <li className="flex justify-between text-gray-200">
                  <span>Private Show</span>
                  <span className="text-[#E72C4B]">100 tokens</span>
                </li>
                <li className="flex justify-between text-gray-200">
                  <span>Exclusive Show</span>
                  <span className="text-[#E72C4B]">500 tokens</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Room Goals */}
          <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#E72C4B]/20">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#E72C4B]">
              <Gift size={20} />
              Room Goals
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-200">Special Show</span>
                  <span className="text-[#E72C4B]">1500/2000 tokens</span>
                </div>
                <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E72C4B] w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 