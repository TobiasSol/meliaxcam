import { useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function LeaksPage() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leakImages = [
    {
      id: 1,
      src: '/leaks/meliax leak (1).jpg',
      alt: 'MeliaX Leaks - Exklusive geleakte Bilder und private Aufnahmen',
      title: 'MeliaX Leaks Premium Content 1'
    },
    {
      id: 2,
      src: '/leaks/meliax leak (2).jpg',
      alt: 'MeliaX Leaks Collection - Geleakte Privataufnahmen',
      title: 'MeliaX Leaks Exklusiv 2'
    },
    {
      id: 3,
      src: '/leaks/meliax leak (3).jpg',
      alt: 'MeliaX Leaked Content - Private Leaks und exklusive Einblicke',
      title: 'MeliaX Leaks Premium 3'
    },
    {
      id: 4,
      src: '/leaks/meliax leak (4).jpg',
      alt: 'MeliaX Private Leaks - Intime geleakte Momente',
      title: 'MeliaX Leaks Private 4'
    },
    {
      id: 5,
      src: '/leaks/meliax leak (5).jpg',
      alt: 'MeliaX Leak Collection - Exklusive geleakte Inhalte',
      title: 'MeliaX Leaks Collection 5'
    },
    {
      id: 6,
      src: '/leaks/meliax leak (6).jpg',
      alt: 'MeliaX Leaked Pictures - Private geleakte Aufnahmen',
      title: 'MeliaX Leaks Premium 6'
    },
    {
      id: 7,
      src: '/leaks/meliax leak (7).jpg',
      alt: 'MeliaX Exclusive Leaks - Premium geleakte Inhalte',
      title: 'MeliaX Leaks Exclusive 7'
    },
    {
      id: 8,
      src: '/leaks/meliax leak (8).jpg',
      alt: 'MeliaX Premium Leaks - Geleakte Privatsammlung',
      title: 'MeliaX Leaks Private 8'
    },
    {
      id: 9,
      src: '/leaks/meliax leak (9).jpg',
      alt: 'MeliaX New Leaks - Aktuelle geleakte Aufnahmen',
      title: 'MeliaX Leaks New 9'
    },
    {
      id: 10,
      src: '/leaks/meliax leak (10).jpg',
      alt: 'MeliaX Latest Leaks - Neueste private Leaks',
      title: 'MeliaX Leaks Latest 10'
    }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Leaks - Exklusive Leaks & Private Aufnahmen | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Leaks mit exklusiven geleakten Inhalten und privaten Aufnahmen. Premium Leaked Content und intime Einblicke in täglichen Updates." />
        <meta name="keywords" content="meliax leaks, meliax leaked, meliax leak bilder, meliax private leaks, meliax geleakt, meliax leaked content" />
        <meta property="og:title" content="MeliaX Leaks - Exklusive Leaks & Private Aufnahmen" />
        <meta property="og:description" content="Exklusive MeliaX Leaks und private Aufnahmen. Die heißesten geleakten Inhalte und intime Einblicke." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Leaks" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-cam.de/meliax-leaks" />
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
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
            </div>
          ) : (
            <div className="w-full">
              <div className="bg-gray-900/50 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-pink-500/10 p-6">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-pink-400">
                  MeliaX Leaks
                </h1>
                <p className="text-gray-300 mb-8">
                  Exklusive MeliaX Leaks und private geleakte Aufnahmen. Premium Leaked Content und intime Einblicke in täglichen Updates.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {leakImages.map((image) => (
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
    </div>
  );
} 