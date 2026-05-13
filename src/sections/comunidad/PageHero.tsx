import AccentLabel from '../../components/AccentLabel'

export default function PageHero() {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
      <img
        src="/images/comunidad-hero.jpg"
        alt="Amigos compartiendo café en una terraza"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(27,18,14,0.5)]" />
      <div className="relative z-10 text-center px-6">
        <AccentLabel text="ÚNETE A LA FAMILIA" variant="light" />
        <h1 className="font-serif text-5xl md:text-6xl text-white text-shadow-hero-sm mt-6 leading-[1.1]">
          Nuestra Comunidad
        </h1>
        <p className="text-lg text-white/85 font-sans mt-3">
          Comparte tu amor por el café con amigos de toda Venezuela
        </p>
      </div>
    </section>
  )
}
