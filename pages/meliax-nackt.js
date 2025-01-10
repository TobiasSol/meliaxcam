import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import ImageGallery from "../components/ImageGallery";

export default function NacktPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <title>MeliaX Nackt - Exklusive Nacktbilder & Videos | Offizielle Seite</title>
        <meta name="description" content="Sieh dir MeliaX Nackt an mit exklusiven Nacktbildern und Videos. Tägliche Updates, private Einblicke und intime Momente. Jetzt Premium-Zugang sichern!" />
        <meta name="keywords" content="meliax nackt, meliax nacktbilder, meliax nacktvideos, meliax nude, meliax nacktfotos, meliax intim" />
        <meta property="og:title" content="MeliaX Nackt - Exklusive Nacktbilder & Videos" />
        <meta property="og:description" content="Exklusive MeliaX Nacktbilder und Videos. Die heißesten Aufnahmen und private Einblicke." />
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
        <div className="mt-8 lg:mt-16 grid grid-cols-1 gap-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
            </div>
          ) : (
            <div className="w-full">
              <div className="bg-gray-900/50 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-pink-500/10 p-6">
                <h2 className="text-xl lg:text-2xl font-bold mb-6 text-pink-400">MeliaX Nacktbilder</h2>
                <ImageGallery />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 