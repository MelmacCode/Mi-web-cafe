import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import CartDrawer from './CartDrawer';

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Tienda', to: '/tienda' },
  { label: 'Blog', to: '/blog' },
  { label: 'Comunidad', to: '/comunidad' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.85;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const showLightBg = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          showLightBg
            ? 'bg-sand-50/97 backdrop-blur-xl shadow-nav'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-16">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl uppercase tracking-wider transition-colors duration-300 ${
              showLightBg ? 'text-coffee-900' : 'text-white'
            }`}
          >
            Don Moncho
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] font-sans uppercase tracking-[0.08em] transition-opacity duration-200 hover:opacity-70 ${
                  showLightBg ? 'text-coffee-700' : 'text-white'
                } ${location.pathname === link.to ? 'opacity-100' : 'opacity-90'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section: CTA (desktop) + Cart + Hamburger (mobile) */}
          <div className="flex items-center gap-3">
            {/* CTA Button — solo desktop */}
            <Link
              to="/tienda"
              className="hidden md:inline-block px-6 py-2.5 rounded-pill bg-cafe-500 text-white text-xs font-sans font-bold uppercase tracking-[0.1em] hover:bg-coffee-900 transition-colors duration-200"
            >
              Comprar
            </Link>

            {/* 🛒 CARRITO — visible en desktop y mobile */}
            <CartDrawer
              triggerClassName={
                showLightBg ? 'text-coffee-900' : 'text-white'
              }
            />

            {/* Mobile Hamburger — solo mobile */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden flex flex-col gap-1.5 p-2 ${
                showLightBg ? 'text-coffee-900' : 'text-white'
              }`}
              aria-label="Abrir menú"
            >
              <span className="block w-6 h-0.5 bg-current" />
              <span className="block w-6 h-0.5 bg-current" />
              <span className="block w-6 h-0.5 bg-current" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-cafe-900 flex flex-col items-center justify-center">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-6 text-white p-2"
            aria-label="Cerrar menú"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>

          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-serif text-3xl text-white hover:text-cafe-300 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/tienda"
              className="mt-4 px-8 py-3 rounded-pill bg-cafe-500 text-white text-sm font-sans font-bold uppercase tracking-[0.1em] hover:bg-coffee-900 transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Comprar
            </Link>
          </div>
        </div>
      )}
    </>
  );
}