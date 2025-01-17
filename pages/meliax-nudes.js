import { useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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

export default function NudesPage() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nudesImages = [
    {
      id: 1,
      src: '/leaks/meliax leak (1).jpg',
      alt: 'MeliaX Nudes - Exklusive Nude Pictures und private Einblicke',
      title: 'MeliaX Nudes Premium 1'
    },
    {
      id: 2,
      src: '/leaks/meliax leak (2).jpg',
      alt: 'MeliaX Nude Collection - Private Nudes exklusiv',
      title: 'MeliaX Nudes Exklusiv 2'
    },
    {
      id: 3,
      src: '/leaks/meliax leak (3).jpg',
      alt: 'MeliaX Nude Gallery - Intime Nudes und private Momente',
      title: 'MeliaX Nudes Premium 3'
    },
    {
      id: 4,
      src: '/leaks/meliax leak (4).jpg',
      alt: 'MeliaX Private Nudes - Exklusive private Nude Pictures',
      title: 'MeliaX Nudes Privat 4'
    },
    {
      id: 5,
      src: '/leaks/meliax leak (5).jpg',
      alt: 'MeliaX Nudes Gallery - Premium Nudes Collection',
      title: 'MeliaX Nudes Collection 5'
    },
    {
      id: 6,
      src: '/leaks/meliax leak (6).jpg',
      alt: 'MeliaX Nudes Exklusiv - Private Nude Pictures',
      title: 'MeliaX Nudes Premium 6'
    },
    {
      id: 7,
      src: '/leaks/meliax leak (7).jpg',
      alt: 'MeliaX Nude Content - Exklusive Nudes und private Bilder',
      title: 'MeliaX Nudes Exclusive 7'
    },
    {
      id: 8,
      src: '/leaks/meliax leak (8).jpg',
      alt: 'MeliaX Premium Nudes - Private Nude Collection',
      title: 'MeliaX Nudes Privat 8'
    },
    {
      id: 9,
      src: '/leaks/meliax leak (9).jpg',
      alt: 'MeliaX New Nudes - Aktuelle Nude Pictures',
      title: 'MeliaX Nudes New 9'
    },
    {
      id: 10,
      src: '/leaks/meliax leak (10).jpg',
      alt: 'MeliaX Latest Nudes - Neueste private Nudes',
      title: 'MeliaX Nudes Latest 10'
    }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Nudes - Exklusive Nudes & Private Pictures | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Nudes mit exklusiven Nude Pictures und privaten Aufnahmen. Premium Nudes und intime Einblicke in täglichen Updates." />
        <meta name="keywords" content="meliax nudes, meliax nude pictures, meliax nude gallery, meliax private nudes, meliax nudes collection, meliax nudes exklusiv" />
        <meta property="og:title" content="MeliaX Nudes - Exklusive Nudes & Private Pictures" />
        <meta property="og:description" content="Exklusive MeliaX Nudes und private Aufnahmen. Die heißesten Nude Pictures und intime Einblicke." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Nudes" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-cam.de/meliax-nudes" />
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
                  MeliaX Nudes
                </h1>
                <p className="text-gray-300 mb-8">
                  Exklusive MeliaX Nudes und private Pictures. Premium Nude Content und intime Einblicke in täglichen Updates.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {nudesImages.map((image) => (
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