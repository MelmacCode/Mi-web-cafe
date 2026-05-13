import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function NewsletterCTA() {
  const ref = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });

  return (
    <section className="bg-coffee-100 py-24 md:py-28 px-6 md:px-12">
      <div ref={ref} className="max-w-xl mx-auto text-center">
        <AccentLabel text="MANTENTE INSPIRADO" variant="dark" className="mx-auto" />
        <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
          Recibe historias de café en tu correo
        </h2>
        <p className="text-base text-coffee-500 font-sans mt-3 max-w-md mx-auto">
          Cada semana compartimos recetas, consejos de preparación y relatos del mundo del café directamente a tu bandeja de entrada.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('¡Gracias por suscribirte!');
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6"
        >
          <input
            type="email"
            placeholder="tu@email.com"
            required
            className="w-full sm:w-80 px-6 py-3.5 rounded-pill bg-white border border-coffee-300 text-coffee-700 text-base font-sans placeholder:text-coffee-300 focus:outline-none focus:border-cafe-500 transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3.5 rounded-pill bg-coffee-900 text-white text-xs font-sans font-bold uppercase tracking-[0.1em] hover:bg-cafe-500 transition-colors duration-200"
          >
            Suscribirme
          </button>
        </form>

        <p className="text-xs text-coffee-300 font-sans mt-3">
          Sin spam, solo café. Puedes darte de baja en cualquier momento.
        </p>
      </div>
    </section>
  )
}
