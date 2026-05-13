export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'El Café Moca de Don Moncho es simplemente el mejor que he probado. Se siente el amor y el cuidado en cada taza.',
    name: 'Mariana G.',
    location: 'Caracas, Venezuela',
  },
  {
    id: 2,
    quote: 'Desde que descubrí a Don Moncho, mi mañana no es la misma. El aroma que llena mi cocina es increíble.',
    name: 'Carlos R.',
    location: 'Mérida, Venezuela',
  },
  {
    id: 3,
    quote: 'Llevo su café a todos mis viajes. Es mi pedacito de los Andes dondequiera que vaya.',
    name: 'Andrea P.',
    location: 'Valencia, España',
  },
  {
    id: 4,
    quote: 'El torrefacto tiene un sabor que no encontré en ningún otro lado. Intenso, dulce, perfecto.',
    name: 'Luis M.',
    location: 'Maracaibo, Venezuela',
  },
  {
    id: 5,
    quote: 'Compré el combo familiar y ahora toda mi casa es team Don Moncho. ¡Mis hijos aman el moca!',
    name: 'Patricia S.',
    location: 'Barquisimeto, Venezuela',
  },
  {
    id: 6,
    quote: 'Como barista, valoro la calidad del grano. El orgánico de Don Moncho es excepcional para espresso.',
    name: 'Daniel T.',
    location: 'Bogotá, Colombia',
  },
];
