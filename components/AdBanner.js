import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

export default function AdBanner({ className = "" }) {
  const { setShowOffer } = usePopup();
  
  return (
    <div
      className={`relative w-full ${className} cursor-pointer`}
      onClick={() => setShowOffer(true)}
    >
      <div className="w-full">
        <img
          src="/videos/1.jpg"
          alt="Advertisement Banner"
          className="w-full h-auto border border-pink-50 "
        />
      </div>
    </div>
  );
}