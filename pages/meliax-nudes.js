import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import ImageGallery from "../components/ImageGallery";

export default function NudesPage() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const images = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: `/leaks/meliax leak (${i + 1}).jpg`,
    alt: `MeliaX Nude Bild ${i + 1}`,
    title: `MeliaX Nude ${i + 1}`
  }));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Nudes - Exklusive Bilder & Private Galerie | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Nudes mit exklusiven Bildern und privater Galerie. Premium-Content, intime Einblicke und tägliche Updates. Jetzt Zugang sichern!" />
        <meta name="keywords" content="meliax nudes, meliax bilder, meliax galerie, meliax premium content, meliax private bilder, meliax exklusiv" />
        <meta property="og:title" content="MeliaX Nudes - Exclusive Adult Content & Private Gallery" />
        <meta property="og:description" content="Join MeliaX's exclusive nude gallery for premium adult content and private photos." />
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
        <div className="mt-8 lg:mt-16 grid grid-cols-1 gap-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
            </div>
          ) : (
            <div className="w-full">
              <div className="bg-gray-900/50 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-pink-500/10 p-6">
                <h2 className="text-xl lg:text-2xl font-bold mb-6 text-pink-400">MeliaX Nudes</h2>
                <ImageGallery images={images} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}