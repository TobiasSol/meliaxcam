import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AdBanner({ className = "" }) {
  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <div className="w-full max-w-[2000px] mx-auto">
        <div className="relative bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-500/20 rounded-xl lg:rounded-3xl p-4 lg:p-8 border border-pink-500/10 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-32 lg:w-64 h-32 lg:h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
            <div className="text-center lg:text-left w-full lg:w-auto">
              <h2 className="text-xl lg:text-3xl font-bold uppercase tracking-wider">
                <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 bg-clip-text text-transparent">
                  Ads Banner Mieten
                </span>
              </h2>
              <p className="mt-1 lg:mt-2 text-pink-200/80 uppercase text-xs lg:text-sm tracking-wider">
                Werbe hier für dein Produkt oder Service
              </p>
            </div>
            
            <button className="group relative flex items-center gap-2 px-6 lg:px-8 py-2 lg:py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg lg:rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 w-full lg:w-auto">
              <span className="relative z-10 text-white font-medium uppercase tracking-wider text-sm lg:text-base">
                Banner Mieten
              </span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}