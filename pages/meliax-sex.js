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

export default function SexPage() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sexImages = [
    {
      id: 1,
      src: '/leaks/meliax leak (1).jpg',
      alt: 'MeliaX Sex - Exklusive Sexbilder und private Aufnahmen',
      title: 'MeliaX Sex Premium 1'
    },
    {
      id: 2,
      src: '/leaks/meliax leak (2).jpg',
      alt: 'MeliaX Sex Videos - Heiße Sexszenen und private Momente',
      title: 'MeliaX Sex Exklusiv 2'
    },
    {
      id: 3,
      src: '/leaks/meliax leak (3).jpg',
      alt: 'MeliaX Sex Content - Intime Sexaufnahmen und private Shows',
      title: 'MeliaX Sex Premium 3'
    },
    {
      id: 4,
      src: '/leaks/meliax leak (4).jpg',
      alt: 'MeliaX Sex Privat - Exklusive private Sexvideos',
      title: 'MeliaX Sex Privat 4'
    },
    {
      id: 5,
      src: '/leaks/meliax leak (5).jpg',
      alt: 'MeliaX Sex Gallery - Premium Sex Collection',
      title: 'MeliaX Sex Collection 5'
    },
    {
      id: 6,
      src: '/leaks/meliax leak (6).jpg',
      alt: 'MeliaX Sex Exklusiv - Private Sexaufnahmen',
      title: 'MeliaX Sex Premium 6'
    },
    {
      id: 7,
      src: '/leaks/meliax leak (7).jpg',
      alt: 'MeliaX Sex Clips - Exklusive Sexvideos',
      title: 'MeliaX Sex Exclusive 7'
    },
    {
      id: 8,
      src: '/leaks/meliax leak (8).jpg',
      alt: 'MeliaX Sex Premium - Private Sex Collection',
      title: 'MeliaX Sex Privat 8'
    },
    {
      id: 9,
      src: '/leaks/meliax leak (9).jpg',
      alt: 'MeliaX Sex Neu - Aktuelle Sexaufnahmen',
      title: 'MeliaX Sex New 9'
    },
    {
      id: 10,
      src: '/leaks/meliax leak (10).jpg',
      alt: 'MeliaX Sex XXX - Neueste private Sexvideos',
      title: 'MeliaX Sex Latest 10'
    }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Sex - Exklusive Sexvideos & Private Shows | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Sex mit exklusiven Sexvideos und privaten Shows. Premium Sex Content und intime Einblicke in täglichen Updates." />
        <meta name="keywords" content="meliax sex, meliax sexvideos, meliax sex clips, meliax private sex, meliax sex content, meliax sex exklusiv" />
        <meta property="og:title" content="MeliaX Sex - Exklusive Sexvideos & Private Shows" />
        <meta property="og:description" content="Exklusive MeliaX Sexvideos und private Shows. Die heißesten Sexaufnahmen und intime Einblicke." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Sex" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-cam.de/meliax-sex" />
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
            <ShimmerEffect />
          ) : (
            <div className="w-full">
              <div className="bg-gray-900/50 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-pink-500/10 p-6">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-pink-400">
                  MeliaX Sex
                </h1>
                <p className="text-gray-300 mb-8">
                  Exklusive MeliaX Sexvideos und private Shows. Premium Sex Content und intime Einblicke in täglichen Updates.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sexImages.map((image) => (
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
      `}</style>
    </div>
  );
} 