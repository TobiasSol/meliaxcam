import React from 'react';
import { X, Heart, CreditCard, DollarSign } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

const SpecialOfferPopup = () => {
  const { showOffer, setShowOffer } = usePopup();

  if (!showOffer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg mx-auto">
        <button 
          onClick={() => setShowOffer(false)}
          className="absolute -top-4 -right-4 z-10 p-2 bg-black/80 rounded-full hover:bg-black/90 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* OnlyFans Sektion */}
        <div className="relative mb-4 group">
          <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-[2px]"></div>
          <div className="relative bg-black rounded-xl overflow-hidden">
            {/* Glanzeffekt */}
            <div className="absolute -inset-[1000%] animate-shine pointer-events-none" />
            
            <div className="p-6 flex flex-col items-center text-center relative">
              <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-4">
                <Heart className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-bold uppercase text-sm tracking-wider">60% Rabatt</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                OnlyFans VIP Zugang
              </h3>
              
              <p className="text-gray-300 mb-4">
                Exklusive Inhalte, private Chats & tägliche Updates
              </p>

              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <CreditCard className="w-5 h-5" />
                <span className="text-sm">Nur Kreditkarte akzeptiert</span>
              </div>

              <a 
                href="https://onlyfans.com/meliax" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Jetzt 60% sparen
              </a>
            </div>
          </div>
        </div>

        {/* Matoum Sektion */}
        <div className="relative group">
          <div className="absolute -inset-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur-[2px]"></div>
          <div className="relative bg-black rounded-xl overflow-hidden">
            {/* Glanzeffekt */}
            <div className="absolute -inset-[1000%] animate-shine pointer-events-none" />
            
            <div className="p-6 flex flex-col items-center text-center relative">
              <div className="flex items-center gap-2 bg-orange-500/20 px-4 py-2 rounded-full mb-4">
                <DollarSign className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-bold uppercase text-sm tracking-wider">Nur 2€</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Maloum Special
              </h3>
              
              <p className="text-gray-300 mb-4">
                Premium Content & exklusive Vorteile
              </p>

              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <span className="px-3 py-1.5 bg-blue-600 text-white rounded font-bold text-sm tracking-wide">PayPal</span>
                <span className="text-blue-400 font-medium">direkt bezahlen</span>
              </div>

              <a 
                href="https://maloum.com/meliax" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/25"
              >
                Für nur 2€ beitreten
              </a>
            </div>
          </div>
        </div>

        {/* Globale Styles für den Glanzeffekt */}
        <style jsx global>{`
          @keyframes shine {
            0% {
              transform: translateX(-100%) rotate(45deg);
            }
            100% {
              transform: translateX(100%) rotate(45deg);
            }
          }

          .animate-shine {
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            animation: shine 5s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default SpecialOfferPopup;