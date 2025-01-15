import { ArrowRight } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

export default function RightAdBanner({ className = "" }) {
  const { setShowOffer } = usePopup();

  return (
    <div 
      className={`relative overflow-hidden w-full ${className} cursor-pointer`}
      onClick={() => setShowOffer(true)}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <div className="w-full">
        <div className="relative bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-500/20 rounded-xl overflow-hidden border border-pink-500/10 backdrop-blur-sm">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/rechtsbanner.mp4" type="video/mp4" />
          </video>
          
          {/* Leerer Container um die Höhe beizubehalten */}
          <div className="relative p-5">
            <div className="relative flex flex-col items-center gap-3.5" style={{ height: '280px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
} 