import '../styles/globals.css';
import FontProvider from '../components/FontProvider';
import AgeVerificationPreloader from '../components/AgeVerificationPreloader';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import { useState } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col relative">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8LJYP0Q25D"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8LJYP0Q25D');
        `}
      </Script>

      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <div className="flex flex-1">
        <Sidebar 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 px-4 lg:px-0 lg:ml-48 xl:ml-56 lg:mr-80 pt-[120px] md:pt-[120px] pb-16">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default MyApp;