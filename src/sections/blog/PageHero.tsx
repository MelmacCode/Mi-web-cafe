import AccentLabel from '../../components/AccentLabel'

export default function PageHero() {
  return (
    <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden">
      <img
        src="/images/blog-hero.jpg"
        alt="Cuaderno de notas sobre café con una taza de café"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(27,18,14,0.5)]" />
      <div className="relative z-10 text-center px-6">
        <AccentLabel text="BLOG DE CAFÉ" variant="light" />
        <h1 className="font-serif text-5xl md:text-6xl text-white text-shadow-hero-sm mt-6 leading-[1.1]">
          Historias del Café
        </h1>
        <p className="text-lg text-white/85 font-sans mt-3">
          Consejos, recetas y relatos del mundo del café
        </p>
      </div>
    </section>
  )
}
