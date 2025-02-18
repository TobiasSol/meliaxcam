import { useState, useEffect } from "react";
import Head from 'next/head';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Cam - Exklusive Live Cams & Private Shows | Offizielle Seite</title>
        <meta name="description" content="Erlebe MeliaX Cam mit heißen Live Shows und privaten Cam Sessions. Tägliche Live Streams, private Chats und exklusive Cam Shows. Jetzt kostenlos zusehen!" />
        <meta name="keywords" content="meliax cam, meliax live cam, meliax private shows, meliax camgirl, meliax live streams, meliax private chat" />
        <meta property="og:title" content="MeliaX Cam - Exklusive Live Cams & Private Shows" />
        <meta property="og:description" content="Entdecke MeliaX Cam mit exklusiven Live Shows und privaten Cam Sessions. Die heißesten Live Streams und Private Shows." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Cam Official" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://meliax-cam.de" />
      </Head>
      
      <main className="w-full max-w-[2000px] mx-auto px-4 lg:px-8 pb-16">
        {/* Live Cam Card */}
        <div className="mt-8 lg:mt-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl lg:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-gray-900/50 rounded-xl lg:rounded-2xl border border-pink-500/10 backdrop-blur-sm overflow-hidden">
              <div className="aspect-video relative flex items-center justify-center">
                {/* Video Background */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  controlsList="nodownload"
                  disablePictureInPicture
                >
                  <source src="https://swgczdsrrcuvmckcfowd.supabase.co/storage/v1/object/public/videos/0218.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                
                {/* Content */}
                <div className="relative text-center z-10">
                  <p className="text-pink-400 font-medium uppercase tracking-wider mb-2 lg:mb-3 text-xl lg:text-3xl">
                    Jetzt Live
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 lg:w-4 lg:h-4 bg-pink-500 rounded-full inline-block animate-[pulse_1.5s_ease-in-out_infinite]"></span>
                    <span className="text-white/90 text-sm font-bold uppercase tracking-wider">Live</span>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">MeliaX Cam Privat Show</h3>
                <p className="text-pink-300 text-base lg:text-lg mb-4 lg:mb-6">Live aus Berlin, DE</p>
                
                <div className="flex flex-wrap gap-2 lg:gap-3 mb-4 lg:mb-6">
                  {['HD', '4K', 'Premium', 'Deutsch'].map((tag) => (
                    <span key={tag} className="bg-pink-500/10 text-pink-300 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg lg:rounded-xl text-xs lg:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2.5 lg:py-3 rounded-xl hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group">
                  <span className="relative z-10 flex items-center justify-center gap-2 uppercase text-sm lg:text-lg tracking-wider">
                    Zum Stream
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Article */}
        <article className="mt-8 lg:mt-16 prose prose-invert max-w-none">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            MeliaX: Deine exklusive Live Cam Experience
          </h1>
          
          <p className="mb-4">
            Tauche ein in die Welt von MeliaX Cam, wo authentische Live-Unterhaltung auf höchstem Niveau geboten wird. 
            Als eine der gefragtesten Cam-Performerinnen Deutschlands bietet MeliaX ihren Zuschauern ein einzigartiges 
            und interaktives Live-Erlebnis.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Live Cam Features</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>HD & 4K Streaming Qualität</li>
            <li>Interaktive Live Shows</li>
            <li>Private Cam Sessions</li>
            <li>Chat & Voice Interaktion</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Stream Highlights</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Tägliche Live Shows</li>
            <li>Premium Content in Echtzeit</li>
            <li>Exklusive Member Events</li>
            <li>VIP Cam Sessions</li>
          </ul>

          <p className="text-sm text-gray-400 mt-8">
            Hinweis: Alle Live-Inhalte sind ausschließlich für Erwachsene bestimmt (18+)
          </p>
        </article>
      </main>
    </div>
  );
}