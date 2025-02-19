import { useState } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Heart, ExternalLink, MessageCircle, DollarSign, Gift } from 'lucide-react';

export default function CamPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const streamStats = [
    { label: 'Viewers', value: '1.2K' },
    { label: 'Followers', value: '45K' },
    { label: 'Tips', value: '12.5K' },
    { label: 'Rating', value: '4.9★' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Cam - Live Webcam Shows & Private Chats | Offizielle Seite</title>
        <meta name="description" content="Erlebe MeliaX Cam mit exklusiven Live-Webcam-Shows und privaten Chat-Sessions. Tägliche Live-Streams, interaktive Shows und intime Einblicke. Jetzt kostenlos dabei sein!" />
        <meta name="keywords" content="meliax cam, meliax webcam, meliax live shows, meliax private chat, meliax cam model, meliax live streams" />
        <meta property="og:title" content="MeliaX Live Cams - Watch Hot Live Cam Shows & Adult Webcams" />
        <meta property="og:description" content="Join live adult webcam shows on MeliaX Cams. Watch hot cam models perform live and chat in real-time." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Cams" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-cam.de/meliax-cam" />
      </Head>

      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <main className="w-full max-w-[2000px] mx-auto px-2 lg:px-8 pb-16">
        <div className="mt-8 sm:mt-14 lg:mt-16">
          {/* Stream Window */}
          <div className="bg-gray-900/50 rounded-xl lg:rounded-2xl overflow-hidden backdrop-blur-sm border border-pink-500/10 mb-8">
            <div className="aspect-video bg-black/60 relative">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://swgczdsrrcuvmckcfowd.supabase.co/storage/v1/object/public/videos/0219.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <p className="text-pink-400 text-lg">Live Stream</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></span>
                    <span className="text-white/90">Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stream Info Bar */}
            <div className="p-4 lg:p-6 border-t border-pink-500/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-500/10"></div>
                  <div>
                    <h1 className="text-xl lg:text-2xl font-bold">MeliaX</h1>
                    <p className="text-pink-400 text-sm">Live Now</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href="https://tinyurl.com/meliaxcamstripchat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                  >
                    <Heart size={20} />
                    <span>Zum Stripchat</span>
                  </a>
                  <a 
                    href="https://tinyurl.com/meliaxcamstripchat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-xl hover:bg-pink-500/10 border border-pink-500/10 transition-all duration-300"
                  >
                    <MessageCircle size={20} />
                    <span>Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {streamStats.map((stat, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl backdrop-blur-sm p-4 text-center border border-pink-500/10">
                <div className="text-xl lg:text-2xl font-bold text-pink-400">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Chat Rules */}
            <div className="bg-gray-900/50 rounded-xl backdrop-blur-sm p-6 border border-pink-500/10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-pink-400">
                <MessageCircle size={20} />
                Chat Rules
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li>• Be respectful and friendly</li>
                <li>• No spam or harassment</li>
                <li>• Follow room topic</li>
                <li>• Have fun!</li>
              </ul>
            </div>

            {/* Tip Menu */}
            <div className="bg-gray-900/50 rounded-xl backdrop-blur-sm p-6 border border-pink-500/10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-pink-400">
                <DollarSign size={20} />
                Tip Menu
              </h2>
              <ul className="space-y-3">
                <li className="flex justify-between text-gray-300">
                  <span>Special Request</span>
                  <span className="text-pink-400">50 tokens</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Private Show</span>
                  <span className="text-pink-400">100 tokens</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Exclusive Show</span>
                  <span className="text-pink-400">500 tokens</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Room Goals */}
          <div className="mt-8 bg-gray-900/50 rounded-xl backdrop-blur-sm p-6 border border-pink-500/10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-pink-400">
              <Gift size={20} />
              Room Goals
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Special Show</span>
                  <span className="text-pink-400">1500/2000 tokens</span>
                </div>
                <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 