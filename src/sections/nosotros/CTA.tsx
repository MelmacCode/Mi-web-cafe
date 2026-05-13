import PillButton from '../../components/PillButton'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function CTA() {
  const ref = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.2 });

  return (
    <section className="bg-cafe-900 py-24 md:py-28 px-6 md:px-12">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.2]">
          Prueba el sabor de los Andes
        </h2>
        <p className="text-lg text-white/80 font-sans mt-4 max-w-xl mx-auto">
          Cada taza de Don Moncho es un pedacito de Mérida. Haz tu pedido hoy y descubre por qué nuestro café es más que una bebida — es una experiencia.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <PillButton text="Comprar Ahora" to="/tienda" />
          <PillButton
            text="Síguenos"
            href="https://instagram.com/donmonchocafe"
            variant="outline"
            color="white"
          />
        </div>
      </div>
    </section>
  )
}
