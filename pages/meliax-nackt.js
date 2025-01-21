import { useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// Gemeinsame ShimmerEffect Komponente
const ShimmerEffect = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent shimmer"></div>
      </div>
    ))}
  </div>
);

const LoadingEffect = () => (
  <div className="space-y-8">
    <div className="flex items-center justify-center flex-col gap-4">
      <div className="w-16 h-16 border-4 border-pink-500/20 border-t-pink-500 rounded-full animate-spin"></div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-pink-400 mb-2">Premium Content wird geladen</h3>
        <p className="text-gray-400 text-sm animate-pulse">Bitte warten...</p>
      </div>
    </div>
    
    {/* Fortschrittsbalken */}
    <div className="max-w-md mx-auto">
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 w-[85%] animate-progress"></div>
      </div>
      <p className="text-center text-gray-400 text-sm mt-2">Bilder werden geladen (85%)</p>
    </div>
  </div>
);

export default function NacktPage() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nacktImages = [
    {
      id: 1,
      src: '/leaks/meliax leak (1).jpg',
      alt: 'MeliaX Nackt - Exklusive Nacktaufnahmen und private Einblicke',
      title: 'MeliaX Nackt Premium 1'
    },
    {
      id: 2,
      src: '/leaks/meliax leak (2).jpg',
      alt: 'MeliaX Nacktbilder - Private Nacktaufnahmen exklusiv',
      title: 'MeliaX Nackt Exklusiv 2'
    },
    {
      id: 3,
      src: '/leaks/meliax leak (3).jpg',
      alt: 'MeliaX Nacktfotos - Intime Nacktbilder und private Momente',
      title: 'MeliaX Nackt Premium 3'
    },
    {
      id: 4,
      src: '/leaks/meliax leak (4).jpg',
      alt: 'MeliaX Nackt Privat - Exklusive private Nacktaufnahmen',
      title: 'MeliaX Nackt Privat 4'
    },
    {
      id: 5,
      src: '/leaks/meliax leak (5).jpg',
      alt: 'MeliaX Nacktgalerie - Premium Nacktbilder Collection',
      title: 'MeliaX Nackt Collection 5'
    },
    {
      id: 6,
      src: '/leaks/meliax leak (6).jpg',
      alt: 'MeliaX Nackt Exklusiv - Private Nacktaufnahmen',
      title: 'MeliaX Nackt Premium 6'
    },
    {
      id: 7,
      src: '/leaks/meliax leak (7).jpg',
      alt: 'MeliaX Nacktcontent - Exklusive Nacktbilder',
      title: 'MeliaX Nackt Exclusive 7'
    },
    {
      id: 8,
      src: '/leaks/meliax leak (8).jpg',
      alt: 'MeliaX Nackt Premium - Private Nacktbildersammlung',
      title: 'MeliaX Nackt Privat 8'
    },
    {
      id: 9,
      src: '/leaks/meliax leak (9).jpg',
      alt: 'MeliaX Nackt Neu - Aktuelle Nacktaufnahmen',
      title: 'MeliaX Nackt New 9'
    },
    {
      id: 10,
      src: '/leaks/meliax leak (10).jpg',
      alt: 'MeliaX Nackt Aktuell - Neueste private Nacktbilder',
      title: 'MeliaX Nackt Latest 10'
    }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Nackt - Exklusive Nacktbilder & Private Aufnahmen | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Nackt mit exklusiven Nacktbildern und privaten Aufnahmen. Premium Nacktcontent und intime Einblicke in täglichen Updates." />
        <meta name="keywords" content="meliax nackt, meliax nacktbilder, meliax nacktfotos, meliax private nacktaufnahmen, meliax nacktcontent, meliax nackt exklusiv" />
        <meta property="og:title" content="MeliaX Nackt - Exklusive Nacktbilder & Private Aufnahmen" />
        <meta property="og:description" content="Exklusive MeliaX Nacktbilder und private Aufnahmen. Die heißesten Nacktfotos und intime Einblicke." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Nackt" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-cam.de/meliax-nackt" />
      </Head>

      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <main className="w-full max-w-[2000px] mx-auto px-4 lg:px-2 pb-16">
        <div className="mt-8 lg:mt-16">
          {loading ? (
            <div className="bg-gray-900/50 rounded-xl backdrop-blur-sm border border-pink-500/10 p-12">
              <LoadingEffect />
            </div>
          ) : (
            <div className="w-full">
              <div className="bg-gray-900/50 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-pink-500/10 p-6">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-pink-400">
                  MeliaX Nackt
                </h1>
                <p className="text-gray-300 mb-8">
                  Exklusive MeliaX Nacktbilder und private Aufnahmen. Premium Nacktcontent und intime Einblicke in täglichen Updates.
                </p>
                
                {loading ? <ShimmerEffect /> : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <a href="https://onlyfans.com/meliax/c20" target="_blank" rel="noopener noreferrer" className="block">
                      <div className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/10 transition-transform hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                          <h3 className="text-xl font-bold text-pink-400 mb-2">Gratis Nacktbilder von MeliaX</h3>
                          <p className="text-gray-300 text-sm mb-4">Exklusiver kostenloser Einblick</p>
                          <span className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold transition-colors text-sm">
                            Gratis Bilder ansehen
                          </span>
                        </div>
                      </div>
                    </a>

                    {nacktImages.map((image) => (
                      <div 
                        key={image.id}
                        className="group relative aspect-[3/4] rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          title={image.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={image.id <= 4}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white text-sm font-medium">
                              {image.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        .shimmer {
          animation: shimmer 1.5s infinite linear;
          background-size: 200% 100%;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes progress {
          0% { width: 0%; }
          50% { width: 85%; }
          100% { width: 85%; }
        }
        
        .animate-progress {
          animation: progress 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 