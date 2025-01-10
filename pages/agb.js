import Link from 'next/link';

export default function AGB() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-pink-400 hover:text-pink-500 mb-8 group z-10 relative">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span className="ml-2">Zurück zur Startseite</span>
        </Link>

        <div className="bg-gray-900/50 rounded-xl backdrop-blur-sm border border-pink-500/10 p-8">
          <section className="prose prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Allgemeine Geschäftsbedingungen
            </h1>
            
            <h2 className="text-xl font-semibold text-pink-400 mt-8 mb-4">
              1. Geltungsbereich
            </h2>
            <p className="text-gray-300">
              FOLGT
            </p>

            <h2 className="text-xl font-semibold text-pink-400 mt-8 mb-4">
              2. Vertragsschluss
            </h2>
            <p className="text-gray-300">
              FOLGT
            </p>

            <h2 className="text-xl font-semibold text-pink-400 mt-8 mb-4">
              3. Preise und Zahlungsbedingungen
            </h2>
            <p className="text-gray-300">
              FOLGT
            </p>

            <h2 className="text-xl font-semibold text-pink-400 mt-8 mb-4">
              4. Widerrufsrecht
            </h2>
            <p className="text-gray-300">
              FOLGT
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 