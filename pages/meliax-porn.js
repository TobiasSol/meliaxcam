import { useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function PornPage() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pornImages = [
    {
      id: 1,
      src: '/leaks/meliax leak (1).jpg',
      alt: 'MeliaX Porn - Exklusive Pornos und private Aufnahmen',
      title: 'MeliaX Porn Premium Content 1'
    },
    {
      id: 2,
      src: '/leaks/meliax leak (2).jpg',
      alt: 'MeliaX Porn Videos - Heiße Pornoszenen und private Momente',
      title: 'MeliaX Porn Exklusiv Video 2'
    },
    {
      id: 3,
      src: '/leaks/meliax leak (3).jpg',
      alt: 'MeliaX Porn Star - Private Pornoclips und exklusive Shows',
      title: 'MeliaX Porn Premium Show 3'
    },
    {
      id: 4,
      src: '/leaks/meliax leak (4).jpg',
      alt: 'MeliaX Porn Clips - Intime Pornoszenen und private Sessions',
      title: 'MeliaX Porn Exklusiv Content 4'
    },
    {
      id: 5,
      src: '/leaks/meliax leak (5).jpg',
      alt: 'MeliaX Porn Premium - Exklusive Pornoinhalte und private Videos',
      title: 'MeliaX Porn Premium Video 5'
    },
    {
      id: 6,
      src: '/leaks/meliax leak (6).jpg',
      alt: 'MeliaX Porn Exklusiv - Private Pornoclips und heiße Shows',
      title: 'MeliaX Porn Private Show 6'
    },
    {
      id: 7,
      src: '/leaks/meliax leak (7).jpg',
      alt: 'MeliaX Porn Content - Premium Pornoszenen und exklusive Aufnahmen',
      title: 'MeliaX Porn Premium Scene 7'
    },
    {
      id: 8,
      src: '/leaks/meliax leak (8).jpg',
      alt: 'MeliaX Porn Privat - Intime Pornoclips und private Momente',
      title: 'MeliaX Porn Private Content 8'
    },
    {
      id: 9,
      src: '/leaks/meliax leak (9).jpg',
      alt: 'MeliaX Porn XXX - Heiße Pornoszenen und exklusive Videos',
      title: 'MeliaX Porn XXX Scene 9'
    },
    {
      id: 10,
      src: '/leaks/meliax leak (10).jpg',
      alt: 'MeliaX Porn Shows - Premium Pornoclips und private Shows',
      title: 'MeliaX Porn Premium Show 10'
    }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Porn - Exklusive Pornos & Private Videos | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Porn mit exklusiven Pornos und privaten Videos. Premium-Content, intime Einblicke und tägliche Updates. Jetzt Zugang sichern!" />
        <meta name="keywords" content="meliax porn, meliax pornos, meliax porn videos, meliax adult videos, meliax xxx videos, meliax explicit content" />
        <meta property="og:title" content="MeliaX Porn - Exklusive Pornos & Private Videos" />
        <meta property="og:description" content="Exklusive MeliaX Pornos und private Videos. Die heißesten Aufnahmen und intime Einblicke." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Porn" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-cam.de/meliax-porn" />
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
                  MeliaX Porn Videos
                </h1>
                <p className="text-gray-300 mb-8">
                  Exklusive MeliaX Porn Videos und private Aufnahmen. Premium Adult Content und intime Einblicke in täglichen Updates.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {pornImages.map((image) => (
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