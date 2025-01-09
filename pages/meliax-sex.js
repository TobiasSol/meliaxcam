import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import AdBanner from "../components/AdBanner";
import ImageGallery from "../components/ImageGallery";

export default function SexPage() {
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    'All', 'Latest', 'Popular', 'Exclusive', 'Premium'
  ];

  const sexImages = Array.from({length: 15}, (_, i) => ({
    id: i + 1,
    src: `/leaks/meliax leak (${i + 1}).jpg`,
    alt: `MeliaX Sex Bild ${i + 1}`,
    title: `MeliaX Sex ${i + 1}`
  }));

  useEffect(() => {
    fetchVideos();
    setImages(sexImages);
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
        <title>MeliaX Sex - Exklusive Videos & Private Shows | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Sex mit exklusiven Videos und privaten Shows. Premium-Content, intime Einblicke und tägliche Updates. Jetzt Zugang sichern!" />
        <meta name="keywords" content="meliax sex, meliax sex videos, meliax private shows, meliax adult content, meliax explicit, meliax xxx" />
        <meta property="og:title" content="MeliaX Sex Videos - Exklusive Sex Clips & Private Shows" />
        <meta property="og:description" content="Exklusive MeliaX Sex Videos und private Shows. Die heißesten Clips und intime Einblicke." />
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
      
      <main className="w-full max-w-[2000px] mx-auto px-4 lg:px-8 pb-16">
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

        <AdBanner />

        <div className="mt-8 lg:mt-16 grid grid-cols-1 gap-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
            </div>
          ) : (
            <div className="w-full">
              <div className="bg-gray-900/50 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-pink-500/10 p-6">
                <h2 className="text-xl lg:text-2xl font-bold mb-6 text-pink-400">MeliaX Sex Bilder</h2>
                <ImageGallery images={images} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 