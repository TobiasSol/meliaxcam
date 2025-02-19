import { useState } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Image from 'next/image';
import { Heart, ExternalLink, Instagram, Twitter, Facebook, Globe, Lock } from 'lucide-react';

export default function OnlyFansPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { label: 'Posts', value: '500+' },
    { label: 'Photos', value: '2.5K' },
    { label: 'Videos', value: '180+' },
    { label: 'Likes', value: '15K' }
  ];

  return (
    <div className="min-h-screen bg-[#00AFF0]/5 text-white">
      <Head>
        <title>MeliaX OnlyFans - Exklusive Inhalte & Shows | Offizielle Seite</title>
        <meta name="description" content="Folge MeliaX auf OnlyFans für exklusive Inhalte, private Shows und persönliche Interaktion. Premium-Content, exklusive Fotos und Videos. Jetzt Subscriber werden!" />
        <meta name="keywords" content="meliax onlyfans, meliax of, meliax premium, meliax exclusive content, meliax onlyfans model, meliax subscriber content" />
        <meta property="og:title" content="MeliaX OnlyFans - Exclusive Adult Content & Private Shows" />
        <meta property="og:description" content="Join MeliaX's Official OnlyFans for exclusive content and private shows. Premium adult entertainment." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX OnlyFans" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-cam.de/meliax-onlyfans" />
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
        <div className="mt-8 lg:mt-16">
          {/* Profile Header */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden border border-[#00AFF0]/20">
            {/* Banner Image */}
            <div className="h-32 lg:h-48 bg-gradient-to-r from-[#00AFF0] to-[#0095CC] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white/90 tracking-wider">
                  ONLYFANS
                </h1>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Profile Info */}
            <div className="p-4 lg:p-8">
              <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
                {/* Profile Image */}
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 -mt-16">
                  <div className="absolute inset-0 rounded-full border-4 border-black/40 overflow-hidden">
                    <Image
                      src="/leaks/meliax leak (1).jpg"
                      alt="MeliaX Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-xl lg:text-2xl font-bold mb-2">MeliaX Official</h1>
                  <p className="text-[#00AFF0] mb-4">@meliax • Content Creator</p>
                  
                  {/* OnlyFans Button */}
                  <a 
                    href="https://onlyfans.com/meliax/c20" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#00AFF0] text-white rounded-full hover:bg-[#0095CC] transition-colors shadow-lg shadow-[#00AFF0]/20"
                  >
                    <Heart size={20} />
                    <span className="font-semibold">Subscribe to OnlyFans</span>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-center border border-[#00AFF0]/20">
                <div className="text-xl lg:text-2xl font-bold text-[#00AFF0]">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

         
          {/* Content Preview */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#00AFF0]/20">
            <h2 className="text-xl lg:text-2xl font-bold mb-6">Exclusive Content</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'liaimg1 (1).jpg',
                'liaimg1 (2).jpg',
                'liaimg1 (3).jpg',
                'liaimg1 (4).jpg',
                'liaimg1 (5).jpg',
                'liaimg1 (1).jpeg',
                'liaimg1 (2).jpeg',
                'liaimg1 (3).jpeg',
                'liaimg1 (4).jpeg',
                'liaimg1 (5).jpeg',
                'liaimg1 (1).webp'
              ].map((image, index) => (
                <a
                  key={index}
                  href="https://onlyfans.com/meliax/c20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-xl relative overflow-hidden border border-[#00AFF0]/20 group"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/meliaof/${image}`}
                      alt={`MeliaX Content ${index + 1}`}
                      fill
                      className="object-cover blur-md group-hover:blur-lg transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                      <Lock className="text-white w-6 h-6 lg:w-8 lg:h-8 opacity-75 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
                      <span className="text-white text-sm lg:text-base font-medium opacity-75 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Jetzt Entsperren
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 