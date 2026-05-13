import AccentLabel from '../../components/AccentLabel'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { products } from '../../data/products'

const showcaseProducts = products.slice(0, 3);

export default function ProductShowcase() {
  const headingRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.15 });
  const cardsRef = useScrollAnimation<HTMLDivElement>('fade-up', { stagger: 0.12, childSelector: '.product-card' });

  return (
    <section className="bg-sand-50 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <AccentLabel text="NUESTRO CAFÉ" variant="dark" className="mx-auto" />
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-700 leading-[1.2] mt-6">
            Café cultivado con dedicación
          </h2>
          <p className="text-lg text-coffee-500 font-sans mt-4 max-w-xl mx-auto">
            Cada variedad es tostada artesanalmente para resaltar los sabores únicos de nuestros Andes merideños.
          </p>
        </div>

        {/* Product Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseProducts.map((product) => (
            <div key={product.id} className="product-card bg-cream rounded-xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-400 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-3xl text-coffee-700">{product.name}</h3>
                <p className="text-sm text-coffee-500 font-sans mt-2 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-lg font-sans font-bold text-cafe-500 mt-3">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => alert(`${product.name} agregado al carrito`)}
                  className="mt-3 px-6 py-2.5 rounded-pill bg-coffee-900 text-white text-xs font-sans font-bold uppercase tracking-[0.1em] hover:bg-cafe-500 transition-colors duration-200"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
