import AccentLabel from '../../components/AccentLabel'
import PillButton from '../../components/PillButton'
import { ChevronDown } from '../../components/Icons'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(27,18,14,0.45)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <AccentLabel text="CAFÉ 100% ORGÁNICO · MÉRIDA, VENEZUELA" variant="light" />

        <h1 className="font-serif text-5xl md:text-7xl uppercase text-white text-shadow-hero mt-6 leading-[1.1]">
          Don Moncho
        </h1>

        <p className="text-lg text-white/85 font-sans mt-4 max-w-lg">
          Desde las montañas de Tabay, hasta tu taza.
        </p>

        <div className="mt-8">
          <PillButton text="Descubre Nuestro Café" to="/tienda" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 animate-bounce-down">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
