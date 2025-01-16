import { useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ShimmerEffect = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent shimmer"></div>
      </div>
    ))}
  </div>
);

export default function PornPage() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pornImages = [
    {
      id: 1,
      src: '/leaks/meliax leak (1).jpg',
      alt: 'MeliaX Porn - Exklusive Pornos und private Aufnahmen',
      title: 'MeliaX Porn Premium Content 1'
    },
    {
      id: 2,
      src: '/leaks/meliax leak (2).jpg',
      alt: 'MeliaX Porn Videos - Heiße Pornoszenen und private Momente',
      title: 'MeliaX Porn Exklusiv Video 2'
    },
    {
      id: 3,
      src: '/leaks/meliax leak (3).jpg',
      alt: 'MeliaX Porn Star - Private Pornoclips und exklusive Shows',
      title: 'MeliaX Porn Premium Show 3'
    },
    {
      id: 4,
      src: '/leaks/meliax leak (4).jpg',
      alt: 'MeliaX Porn Clips - Intime Pornoszenen und private Sessions',
      title: 'MeliaX Porn Exklusiv Content 4'
    },
    {
      id: 5,
      src: '/leaks/meliax leak (5).jpg',
      alt: 'MeliaX Porn Premium - Exklusive Pornoinhalte und private Videos',
      title: 'MeliaX Porn Premium Video 5'
    },
    {
      id: 6,
      src: '/leaks/meliax leak (6).jpg',
      alt: 'MeliaX Porn Exklusiv - Private Pornoclips und heiße Shows',
      title: 'MeliaX Porn Private Show 6'
    },
    {
      id: 7,
      src: '/leaks/meliax leak (7).jpg',
      alt: 'MeliaX Porn Content - Premium Pornoszenen und exklusive Aufnahmen',
      title: 'MeliaX Porn Premium Scene 7'
    },
    {
      id: 8,
      src: '/leaks/meliax leak (8).jpg',
      alt: 'MeliaX Porn Privat - Intime Pornoclips und private Momente',
      title: 'MeliaX Porn Private Content 8'
    },
    {
      id: 9,
      src: '/leaks/meliax leak (9).jpg',
      alt: 'MeliaX Porn XXX - Heiße Pornoszenen und exklusive Videos',
      title: 'MeliaX Porn XXX Scene 9'
    },
    {
      id: 10,
      src: '/leaks/meliax leak (10).jpg',
      alt: 'MeliaX Porn Shows - Premium Pornoclips und private Shows',
      title: 'MeliaX Porn Premium Show 10'
    }
  ];

  const firstImages = pornImages.slice(0, 1);
  const remainingImages = pornImages.slice(1);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>MeliaX Porn - Exklusive Pornos & Private Videos | Offizielle Seite</title>
        <meta name="description" content="Entdecke MeliaX Porn mit exklusiven Pornos und privaten Videos. Premium-Content, intime Einblicke und tägliche Updates. Jetzt Zugang sichern!" />
        <meta name="keywords" content="meliax porn, meliax pornos, meliax porn videos, meliax adult videos, meliax xxx videos, meliax explicit content" />
        <meta property="og:title" content="MeliaX Porn - Exklusive Pornos & Private Videos" />
        <meta property="og:description" content="Exklusive MeliaX Pornos und private Videos. Die heißesten Aufnahmen und intime Einblicke." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MeliaX Porn" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meliax-cam.de/meliax-porn" />
      </Head>

      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <main className="w-full max-w-[2000px] mx-auto px-4 lg:px-2 pb-16">
        <div className="mt-8 lg:mt-16">
          {loading ? (
            <ShimmerEffect />
          ) : (
            <div className="w-full">
              <div className="bg-gray-900/50 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-pink-500/10 p-6">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-pink-400">
                  MeliaX Porn Videos
                </h1>
                <p className="text-gray-300 mb-8">
                  Exklusive MeliaX Porn Videos und private Aufnahmen. Premium Adult Content und intime Einblicke in täglichen Updates.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {firstImages.map((image) => (
                    <div key={image.id} className="group relative aspect-[3/4] rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        title={image.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={image.id <= 4}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-sm font-medium">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Gratis Video Element */}
                  <div className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/10">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <h3 className="text-xl font-bold text-pink-400 mb-2">Gratis Porno von MeliaX</h3>
                      <p className="text-gray-300 text-sm mb-4">Exklusiver kostenloser Einblick</p>
                      <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold transition-colors text-sm">
                        Gratis Video ansehen
                      </button>
                    </div>
                  </div>

                  {remainingImages.map((image) => (
                    <div key={image.id} className="group relative aspect-[3/4] rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        title={image.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={image.id <= 4}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-sm font-medium">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Artikel */}
              <article className="mt-12 bg-gray-900/50 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-pink-500/10 p-6">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-pink-400">
                  MeliaX Porn - Dein exklusiver Einblick in private Momente
                </h2>
                
                <div className="prose prose-invert max-w-none">
                  <p className="mb-4">
                    Willkommen in der faszinierenden Welt von MeliaX Porn, wo du exklusive Einblicke und intime Momente erleben kannst. Als eine der gefragtesten Content-Kreatorinnen im deutschsprachigen Raum bietet MeliaX ihren Fans außergewöhnliche und authentische Adult-Unterhaltung auf höchstem Niveau.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Exklusive MeliaX Porn Inhalte
                  </h3>
                  <p className="mb-4">
                    In unserer ständig wachsenden Sammlung findest du eine Vielzahl an hochwertigen Produktionen. Von verführerischen Soloaufnahmen bis hin zu intensiven Begegnungen - MeliaX Porn bietet für jeden Geschmack das passende Material. Jedes Video wird mit größter Sorgfalt und Leidenschaft produziert, um dir unvergessliche Momente zu bescheren.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Premium Qualität und regelmäßige Updates
                  </h3>
                  <p className="mb-4">
                    Als Premium-Mitglied profitierst du von täglichen Updates und Zugang zum kompletten MeliaX Porn Archiv. Alle Videos werden in gestochen scharfer Qualität aufgenommen und bieten dir ein unvergleichliches Seherlebnis. Die professionelle Produktion garantiert beste Unterhaltung in Full HD.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Persönliche Interaktion und private Einblicke
                  </h3>
                  <p className="mb-4">
                    Was MeliaX Porn besonders macht, ist die authentische und persönliche Note. Durch regelmäßige Live-Sessions und private Chatmöglichkeiten entsteht eine einzigartige Bindung zwischen Creator und Community. Diese intime Atmosphäre macht jeden Besuch zu einem besonderen Erlebnis.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Sicher und diskret
                  </h3>
                  <p className="mb-4">
                    Deine Privatsphäre hat bei MeliaX Porn höchste Priorität. Alle Zahlungen und Interaktionen werden absolut diskret und sicher abgewickelt. Das Premium-Mitgliedschaftssystem garantiert dir exklusiven Zugang zu allen Inhalten, während deine persönlichen Daten bestmöglich geschützt bleiben.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Vielfältiges Content-Angebot
                  </h3>
                  <p className="mb-4">
                    Das MeliaX Porn Repertoire umfasst eine breite Palette an Kategorien und Genres. Von romantischen Softcore-Szenen bis hin zu leidenschaftlichen Hardcore-Produktionen findest du hier alles, was das Herz begehrt. Besonders beliebt sind die authentischen Solo-Performances und die intimen POV-Aufnahmen, die dir das Gefühl geben, hautnah dabei zu sein.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Technische Qualitätsstandards
                  </h3>
                  <p className="mb-4">
                    Bei MeliaX Porn wird großer Wert auf technische Exzellenz gelegt. Alle Videos werden mit modernster Aufnahmetechnik produziert und in verschiedenen Qualitätsstufen bis hin zu 4K angeboten. Die optimierte Streaming-Technologie gewährleistet dabei ein reibungsloses Seherlebnis auf allen Endgeräten - vom Smartphone bis zum Smart-TV.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Community und Interaktion
                  </h3>
                  <p className="mb-4">
                    Die MeliaX Porn Community ist bekannt für ihren respektvollen Umgang und den aktiven Austausch untereinander. In moderierten Foren und Chat-Bereichen können sich Mitglieder austauschen, Wünsche äußern und Feedback geben. Diese enge Verbindung zur Community fließt direkt in die Gestaltung neuer Inhalte ein.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Exklusive Vorteile für Premium-Mitglieder
                  </h3>
                  <p className="mb-4">
                    Premium-Mitglieder genießen bei MeliaX Porn zahlreiche Vorteile. Neben dem Zugriff auf das komplette Videoarchiv erhältst du Vorabzugang zu neuen Releases, kannst an exklusiven Live-Events teilnehmen und profitierst von speziellen Behind-the-Scenes Einblicken. Das Feedback der Premium-Community hat dabei direkten Einfluss auf zukünftige Produktionen.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Mobile Optimierung und Verfügbarkeit
                  </h3>
                  <p className="mb-4">
                    Die MeliaX Porn Plattform ist vollständig für mobile Endgeräte optimiert. Egal ob Android oder iOS - die responsive Webseite passt sich perfekt an dein Gerät an. Downloads sind in verschiedenen Qualitätsstufen verfügbar, sodass du deine Lieblingsvideos auch offline genießen kannst.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Regelmäßige Content-Updates
                  </h3>
                  <p className="mb-4">
                    Mit mehreren Updates pro Woche bleibt die MeliaX Porn Bibliothek stets aktuell und spannend. Der Veröffentlichungskalender wird regelmäßig im Voraus bekannt gegeben, sodass du keine neue Veröffentlichung verpasst. Zusätzlich gibt es spontane Bonus-Releases und Überraschungscontent für treue Mitglieder.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-pink-300">
                    Datenschutz und Sicherheit
                  </h3>
                  <p className="mb-4">
                    MeliaX Porn setzt modernste Verschlüsselungstechnologien ein, um deine Daten zu schützen. Alle Verbindungen sind SSL-verschlüsselt, und die Zahlungsabwicklung erfolgt über renommierte Payment-Provider. Die Mitgliederdaten werden nach strengsten Datenschutzrichtlinien verwaltet und niemals an Dritte weitergegeben.
                  </p>
                </div>
              </article>
            </div>
          )}
        </div>
      </main>

      {/* Shimmer Animation Styles hinzufügen */}
      <style jsx global>{`
        .shimmer {
          animation: shimmer 1.5s infinite linear;
          background-size: 200% 100%;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
} 