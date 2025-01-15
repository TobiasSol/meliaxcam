import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AdBanner({ className = "" }) {
  return (
    <div className={`relative  w-full ${className}`}>
      <video
        className="absolute inset-0 w-full h-full object-fit"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/banner oben.mp4" type="video/mp4" />
      </video>
      
      <div className="w-full max-w-[2000px] mx-auto">
        <div className="relative rounded-xl lg:rounded-3xl ">
          <div className="h-24 lg:h-36"></div>
        </div>
      </div>
    </div>
  );
}