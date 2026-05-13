import { Link } from 'react-router';

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Tienda', to: '/tienda' },
  { label: 'Blog', to: '/blog' },
  { label: 'Comunidad', to: '/comunidad' },
];

export default function Footer() {
  return (
    <footer className="bg-cafe-900">
      <div className="px-6 md:px-12 pt-20 pb-10">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white uppercase tracking-wider">
              Don Moncho
            </h3>
            <p className="mt-4 text-sm text-cream/80 font-sans leading-relaxed">
              Café 100% orgánico, cultivado en las montañas de Mérida, Venezuela.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.1em] text-white mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/80 hover:text-cafe-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.1em] text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-cafe-300">
                Instagram:{' '}
                <a
                  href="https://instagram.com/donmonchocafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-cafe-300 transition-colors duration-200"
                >
                  @donmonchocafe
                </a>
              </li>
              <li className="text-sm text-cafe-300">
                WhatsApp: <span className="text-white/80">+58 412-3456789</span>
              </li>
              <li className="text-sm text-cafe-300">
                Tabay, Mérida, Venezuela
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">
              Recibe noticias de Don Moncho
            </h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-5 py-3 rounded-pill bg-transparent border border-coffee-500 text-cream text-sm font-sans placeholder:text-coffee-500 focus:outline-none focus:border-cafe-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-5 py-3 rounded-pill bg-cafe-500 text-white text-xs font-sans font-bold uppercase tracking-[0.1em] hover:bg-coffee-900 transition-colors duration-200"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-coffee-700 flex flex-col md:flex-row justify-between items-center gap-2 max-w-7xl mx-auto">
          <p className="text-xs text-cafe-300 font-sans">
            &copy; 2025 Don Moncho Café. Todos los derechos reservados.
          </p>
          <p className="text-xs text-cafe-300 font-sans">
            Hecho con amor en Mérida, Venezuela
          </p>
        </div>
      </div>
    </footer>
  );
}
