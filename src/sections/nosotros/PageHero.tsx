import AccentLabel from '../../components/AccentLabel'

export default function PageHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src="/images/nosotros-hero.jpg"
        alt="Vista panorámica de la finca de café Don Moncho en los Andes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(27,18,14,0.55)]" />
      <div className="relative z-10 text-center px-6">
        <AccentLabel text="CONOCE A DON MONCHO" variant="light" />
        <h1 className="font-serif text-5xl md:text-6xl text-white text-shadow-hero-sm mt-6 leading-[1.1]">
          Nuestra Historia
        </h1>
        <p className="text-lg text-white/85 font-sans mt-3">
          Tres generaciones de amor por el café
        </p>
      </div>
    </section>
  )
}
