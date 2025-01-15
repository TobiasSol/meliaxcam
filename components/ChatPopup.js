import React, { useState, useEffect } from 'react';
import { MessageCircle, ExternalLink, X } from 'lucide-react';

const images = [
  '/meliaxporn/meliaxass.jpg',
  '/meliaxporn/meliaxxmouth.jpg',
  '/meliaxporn/meliaxassd.jpg',
  '/meliaxporn/meliaxtut.jpg'
];

export default function ChatPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Zeige Popup nach 5 Sekunden, aber nur einmal
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasBeenShown(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasBeenShown]);

  useEffect(() => {
    // Bildwechsel alle 5 Sekunden
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-auto animate-pulse-slow">
        <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl blur-[2px]"></div>
        <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl"></div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-4 -right-4 z-10 p-2 bg-black/80 rounded-full hover:bg-black/90 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="relative w-full bg-black rounded-xl overflow-hidden">
          <div className="relative w-full h-full aspect-[3/4]">
            <div className="absolute inset-0 transition-opacity duration-1000">
              {images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

            <div className="relative w-full h-full">
              <div className="relative h-full px-6 py-8 flex flex-col items-center justify-between gap-6">
                <div className="text-center space-y-4 w-full">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-white/90 text-xs font-medium uppercase tracking-wider drop-shadow-lg">Live</span>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
                      <span className="text-white/90 text-xs font-bold tracking-widest drop-shadow-lg">OnlyFans</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold">
                    <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-lg">
                      JETZT LIVE CHATTEN
                    </span>
                  </h2>
                  <p className="text-lg text-white/90 drop-shadow-lg">
                    Private Chat Session mit mir
                  </p>
                </div>

                <div className="w-full">
                  <button className="w-full group relative shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl"></div>
                    <div className="relative px-8 py-4 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center gap-3 group-hover:bg-white/5 transition-all duration-300">
                      <MessageCircle className="w-5 h-5 text-white drop-shadow" />
                      <span className="text-white font-medium tracking-wide whitespace-nowrap drop-shadow-lg">
                        JETZT CHATTEN
                      </span>
                      <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform drop-shadow" />
                    </div>
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-50%) translateY(-50%) rotate(45deg);
          }
          80%, 100% {
            transform: translateX(150%) translateY(-50%) rotate(45deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
} 