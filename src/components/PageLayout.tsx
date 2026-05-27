import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './Navigation';
import Footer from './Footer';
import BackButton from './BackButton';
import CookieBanner from './CookieBanner';

gsap.registerPlugin(ScrollTrigger);

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  // ← CORREGIDO: Tipo explícito para useRef
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as unknown as gsap.TickerCallback);
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    ScrollTrigger.refresh();
  }, [location.pathname]);

  const showBackButton = location.pathname !== '/';

  return (
    <>
      <Navigation />
      <main>{children}</main>
      
      {showBackButton && (
        <div className="bg-sand-50 px-6 md:px-12 py-6 max-w-6xl mx-auto">
          <BackButton label="Volver atrás" />
        </div>
      )}
      
      <Footer />
      <CookieBanner />
    </>
  );
}