import { useState } from 'react';
import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation, useParallax } from '../../hooks/useScrollAnimation'

export default function ShareMoment() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const textRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const imageRef = useParallax<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.name}! Tu historia ha sido enviada.`);
    setFormData({ name: '', message: '' });
  };

  return (
    <section className="bg-sand-50 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image */}
        <div ref={imageRef} className="parallax-block w-full md:w-[45%] rounded-lg overflow-hidden">
          <img
            src="/images/share-moment.jpg"
            alt="Persona disfrutando café con vista a los Andes"
            className="w-full aspect-[3/4] object-cover"
            loading="lazy"
          />
        </div>

        {/* Form */}
        <div ref={textRef} className="w-full md:w-[55%] md:pl-16 max-w-lg">
          <AccentLabel text="COMPARTE TU EXPERIENCIA" />
          <h2 className="font-serif text-3xl md:text-[40px] text-coffee-700 leading-[1.2] mt-6">
            Cuéntanos tu historia con Don Moncho
          </h2>
          <p className="text-base text-coffee-500 font-sans leading-relaxed mt-4">
            ¿Cómo disfrutas tu café Don Moncho? Comparte tu momento favorito con nosotros y podrías aparecer en nuestra galería y redes sociales.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-xs font-sans font-bold uppercase tracking-[0.05em] text-coffee-500 mb-1.5">
                Tu nombre
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-coffee-300 text-coffee-700 text-base font-sans placeholder:text-coffee-300 focus:outline-none focus:border-cafe-500 transition-colors"
                placeholder="Escribe tu nombre"
              />
            </div>

            <div>
              <label className="block text-xs font-sans font-bold uppercase tracking-[0.05em] text-coffee-500 mb-1.5">
                Tu mensaje
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white border border-coffee-300 text-coffee-700 text-base font-sans placeholder:text-coffee-300 focus:outline-none focus:border-cafe-500 transition-colors resize-y"
                placeholder="Cuéntanos tu experiencia con Don Moncho..."
              />
            </div>

            <div>
              <label className="block text-xs font-sans font-bold uppercase tracking-[0.05em] text-coffee-500 mb-1.5">
                Tu foto (opcional)
              </label>
              <div className="w-full py-6 rounded-lg border-2 border-dashed border-coffee-300 text-center hover:border-cafe-500 transition-colors cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D7CCC8" strokeWidth="1.5" className="mx-auto">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="text-sm text-coffee-300 font-sans mt-2">
                  Arrastra una foto o haz clic para subir
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-pill bg-coffee-900 text-white text-xs font-sans font-bold uppercase tracking-[0.1em] hover:bg-cafe-500 transition-colors duration-200"
            >
              Enviar mi historia
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
