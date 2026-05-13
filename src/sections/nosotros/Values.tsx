import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { IconOrganico, IconArtesanal, IconComunidad } from '../../components/Icons'

const values = [
  {
    icon: IconOrganico,
    title: '100% Orgánico',
    description: 'Cultivamos sin pesticidas ni químicos sintéticos. Respetamos los ciclos naturales de la tierra para ofrecerte un café puro y saludable.',
  },
  {
    icon: IconArtesanal,
    title: 'Tostado Artesanal',
    description: 'Cada lote se tuesta a mano en pequeñas cantidades. Controlamos el proceso minuto a minuto para resaltar las notas únicas de nuestros granos.',
  },
  {
    icon: IconComunidad,
    title: 'Comunidad',
    description: 'Somos parte de Tabay. Apoyamos a las familias caficultoras locales y devolvemos a la tierra lo que ella nos da.',
  },
];

export default function Values() {
  const headingRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const cardsRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.12, childSelector: '.value-card' });

  return (
    <section className="bg-coffee-100 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <AccentLabel text="NUESTROS VALORES" variant="dark" className="mx-auto" />
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
            Lo que nos define
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="value-card bg-sand-50 rounded-xl p-10 text-center"
            >
              <div className="flex justify-center">
                <value.icon size={48} />
              </div>
              <h3 className="font-serif text-2xl text-coffee-700 mt-5">{value.title}</h3>
              <p className="text-sm text-coffee-500 font-sans leading-relaxed mt-3">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
