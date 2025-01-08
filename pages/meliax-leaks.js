import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import AdBanner from "../components/AdBanner";
import ImageGallery from "../components/ImageGallery";

export default function LeaksPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    'All', 'Latest', 'Popular', 'Exclusive', 'Premium'
  ];

  const images = [
    {
      src: '/leaks/meliax leak (1).jpg',
      alt: 'MeliaX exklusive Leaks und private Aufnahmen - Premium Content'
    },
    {
      src: '/leaks/meliax leak (2).jpg',
      alt: 'MeliaX Premium Leaks und unveröffentlichte Bilder - Exklusiv Material'
    },
    {
      src: '/leaks/meliax leak (3).jpg',
      alt: 'MeliaX private Sammlung - Leaked Content'
    },
    {
      src: '/leaks/meliax leak (4).jpg',
      alt: 'MeliaX unveröffentlichte Premium Fotos - Exclusive Collection'
    },
    {
      src: '/leaks/meliax leak (5).jpg',
      alt: 'MeliaX private Leaks - Neue Aufnahmen'
    },
    {
      src: '/leaks/meliax leak (6).jpg',
      alt: 'MeliaX exklusive Sammlung - Premium Leaks'
    },
    {
      src: '/leaks/meliax leak (7).jpg',
      alt: 'MeliaX private Galerie - Exklusive Einblicke'
    },
    {
      src: '/leaks/meliax leak (8).jpg',
      alt: 'MeliaX Premium Content - Neue Leaks'
    },
    {
      src: '/leaks/meliax leak (9).jpg',
      alt: 'MeliaX unveröffentlichte Leaks - Private Collection'
    },
    {
      src: '/leaks/meliax leak (10).jpg',
      alt: 'MeliaX exklusive Updates - Premium Galerie'
    },
    {
      src: '/leaks/meliax leak (11).jpg',
      alt: 'MeliaX private Premium Leaks - Neue Bilder'
    },
    {
      src: '/leaks/meliax leak (12).jpg',
      alt: 'MeliaX Leak Collection - Exklusive Aufnahmen'
    },
    {
      src: '/leaks/meliax leak (13).jpg',
      alt: 'MeliaX Premium Bildergalerie - Private Leaks'
    },
    {
      src: '/leaks/meliax leak (14).jpg',
      alt: 'MeliaX exklusive Premium Leaks - Neue Updates'
    }
  ];

  useEffect(() => {
    fetchVideos();
  }, []);
  
  const fetchVideos = async () => {
    try {
      const response = await fetch('/api/admin/videos');
      if (response.ok) {
        const data = await response.json();
        setVideos(data);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Leaks - Exklusive Inhalte & Private Videos | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Leaks mit exklusiven Inhalten und privaten Videos. Täglich neue Updates, Premium-Material und unveröffentlichte Aufnahmen. Jetzt Zugang sichern!" />
        <meta name="keywords" content="meliax leaks, meliax exklusiv, meliax private videos, meliax premium content, meliax leaked content, meliax unveröffentlicht" />
        <meta property="og:title" content="MeliaX Leaks - Exclusive Leaked Content & Private Videos" />
        <meta property="og:description" content="Watch exclusive MeliaX leaked content and private videos. Premium leaked material." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Leaks" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-porn.de/meliax-leaks" />
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
        {/* Categories */}
        <div className="mt-8 lg:mt-12 mb-8 lg:mb-12 flex gap-3 lg:gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-xs lg:text-sm font-medium whitespace-nowrap transition-all duration-300
                ${selectedCategory === category.toLowerCase()
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-500/20'
                  : 'bg-gray-900/50 text-gray-300 hover:bg-pink-500/10 border border-pink-500/10'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Ad Banner */}
        <AdBanner />

        {/* Main Content */}
        <div className="mt-8 lg:mt-16 grid grid-cols-1 gap-8">
        

          {/* Images Section */}
          <div className="w-full">
            <div className="bg-gray-900/50 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-pink-500/10 p-6">
              <h2 className="text-xl lg:text-2xl font-bold mb-6 text-pink-400">MeliaX Leak Bilder</h2>
              <ImageGallery images={images} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 