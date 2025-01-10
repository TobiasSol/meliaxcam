import { Sparkles, ArrowRight, DollarSign } from 'lucide-react';

export default function RightAdBanner({ className = "" }) {
  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <div className="w-full">
        <div className="relative bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-500/20 rounded-xl p-5 border border-pink-500/10 backdrop-blur-sm">
          {/* Animated background effect */}
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="relative flex flex-col items-center gap-3.5">
            {/* Icon */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2.5 rounded-full">
              <DollarSign className="w-5 h-5 text-white" />
            </div>

            {/* Title */}
            <div className="text-center">
              <h2 className="text-lg font-bold uppercase tracking-wider">
                <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 bg-clip-text text-transparent">
                  Werbe hier
                </span>
              </h2>
              <p className="mt-1.5 text-pink-200/80 uppercase text-xs tracking-wider">
                Erreiche tausende Besucher
              </p>
            </div>

            {/* Price */}
            <div className="bg-black/20 px-3.5 py-2 rounded-full">
              <span className="text-pink-300 font-bold text-sm">ab 99€ / Monat</span>
            </div>

            {/* Features */}
            <ul className="text-pink-200/70 text-xs space-y-2 text-center">
              <li>✓ Premium Platzierung</li>
              <li>✓ Hohe Sichtbarkeit</li>
              <li>✓ Zielgruppen-Marketing</li>
            </ul>

            {/* CTA Button */}
            <button className="group relative w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <span className="relative z-10 text-white font-medium uppercase tracking-wider text-xs">
                Jetzt Werben
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 