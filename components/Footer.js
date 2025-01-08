import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Twitch, Twitter, ArrowRight, Mail, Shield, Book } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white md:ml-80">
      {/* Advertising Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="relative bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-500/20 rounded-3xl p-8 border border-pink-500/10 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold uppercase tracking-wider">
                  <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 bg-clip-text text-transparent">
                    Ads Banner Mieten
                  </span>
                </h2>
                <p className="mt-2 text-pink-200/80 uppercase text-sm tracking-wider">
                  Werbe hier für dein Produkt oder Service
                </p>
              </div>
              <button className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                <span className="relative z-10 text-white font-medium uppercase tracking-wider">
                  Banner Mieten
                </span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Newsletter Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-gray-900/50 p-8 rounded-2xl border border-pink-500/10 backdrop-blur-sm">
              <Mail className="text-pink-500 mb-4 h-8 w-8" />
              <h3 className="text-2xl font-bold text-white mb-4">Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail Adresse"
                  className="w-full bg-black/30 border border-pink-500/10 rounded-xl px-4 py-3 focus:border-pink-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-xl py-3 transition-colors"
                >
                  Anmelden
                </button>
              </form>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-gray-900/50 p-8 rounded-2xl border border-pink-500/10 backdrop-blur-sm">
              <Shield className="text-pink-500 mb-4 h-8 w-8" />
              <h3 className="text-2xl font-bold text-white mb-6">Social Media</h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-xl bg-black/20 hover:bg-pink-600/20 transition-colors group"
                >
                  <Instagram className="h-8 w-8 text-pink-400 group-hover:text-pink-300" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-pink-300">Instagram</span>
                </a>
                <a
                  href="https://twitch.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-xl bg-black/20 hover:bg-pink-600/20 transition-colors group"
                >
                  <Twitch className="h-8 w-8 text-pink-400 group-hover:text-pink-300" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-pink-300">Twitch</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 rounded-xl bg-black/20 hover:bg-pink-600/20 transition-colors group"
                >
                  <Twitter className="h-8 w-8 text-pink-400 group-hover:text-pink-300" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-pink-300">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-gray-900/50 p-8 rounded-2xl border border-pink-500/10 backdrop-blur-sm">
              <Book className="text-pink-500 mb-4 h-8 w-8" />
              <h3 className="text-2xl font-bold text-white mb-6">Rechtliches</h3>
              <div className="space-y-4">
                {['Impressum', 'Datenschutz', 'AGB'].map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase()}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors group"
                  >
                    <span className="w-2 h-2 bg-pink-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-pink-500/10 text-center text-gray-400">
          <p className="text-sm">© {new Date().getFullYear()} Meliax. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
} 