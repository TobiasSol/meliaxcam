import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Twitch, Twitter, ArrowRight, Mail, Shield, Book } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import AdBanner from './AdBanner';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white lg:ml-56 lg:mr-80">
      <div className="max-w-7xl mx-auto">
        {/* Advertising Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
          <div className="container mx-auto px-4 lg:px-0 py-16">
            <div className="border border-pink-500">
              
              
                <AdBanner className="" />
    

             
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-4 xl:gap-16">
            {/* Newsletter Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Deine E-Mail Adresse"
                    className="w-full bg-black/30 border border-pink-500/10 rounded-l-xl px-4 py-2 text-gray-200 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                  <button className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-r-xl text-white transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/meliax_sweet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@me.lia.x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/me_lia_x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Rechtliches</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/impressum" className="text-gray-400 hover:text-pink-500 transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="text-gray-400 hover:text-pink-500 transition-colors">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="text-gray-400 hover:text-pink-500 transition-colors">
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-pink-500/10 text-center text-gray-400">
            <p className="text-sm">© {new Date().getFullYear()} Meliax. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 