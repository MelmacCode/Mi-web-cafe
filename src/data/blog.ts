export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Guía completa para preparar el café perfecto en casa',
    excerpt: 'Desde la selección del grano hasta el último sorbo, te compartimos los secretos que hemos aprendido tras tres generaciones de cultivo y preparación. Descubre métodos como V60, prensa francesa y café tradicional venezolano.',
    category: 'PREPARACIÓN',
    date: '15 de enero, 2025',
    readTime: '8 min',
    image: '/images/featured-article.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Tabay: el corazón cafetalero de los Andes venezolanos',
    excerpt: 'Un recorrido por el pintoresco pueblo andino donde nace el café Don Moncho, entre montañas, tradición y gente trabajadora.',
    category: 'ORIGEN',
    date: '3 de enero, 2025',
    readTime: '6 min',
    image: '/images/article-tabay.jpg',
  },
  {
    id: 3,
    title: 'El café en Venezuela: de la colonia al café de especialidad',
    excerpt: 'Un viaje por la historia del café venezolano, desde las grandes haciendas coloniales hasta los pequeños tostadores artesanales de hoy.',
    category: 'CULTURA',
    date: '20 de diciembre, 2024',
    readTime: '10 min',
    image: '/images/article-historia.jpg',
  },
  {
    id: 4,
    title: 'V60 vs Prensa Francesa: ¿cuál es mejor?',
    excerpt: 'Comparamos dos de los métodos más populares de preparación para ayudarte a descubrir cuál se adapta mejor a tu paladar.',
    category: 'PREPARACIÓN',
    date: '10 de diciembre, 2024',
    readTime: '5 min',
    image: '/images/article-v60.jpg',
  },
  {
    id: 5,
    title: '¿Por qué el café de altitud sabe mejor?',
    excerpt: 'La ciencia detrás del sabor: cómo la altitud, el clima y el suelo de los Andes crean condiciones ideales para granos excepcionales.',
    category: 'ORIGEN',
    date: '28 de noviembre, 2024',
    readTime: '7 min',
    image: '/images/article-altitud.jpg',
  },
  {
    id: 6,
    title: 'Café con leche merideño: la receta de la abuela',
    excerpt: 'La receta tradicional de café con leche que ha pasado de generación en generación en las familias de los Andes venezolanos.',
    category: 'RECETAS',
    date: '15 de noviembre, 2024',
    readTime: '4 min',
    image: '/images/article-receta.jpg',
  },
  {
    id: 7,
    title: 'Conociendo a los caficultores de Tabay',
    excerpt: 'Retratos y historias de las familias que cultivan café en las montañas de Mérida, sus desafíos y sus sueños.',
    category: 'CULTURA',
    date: '1 de noviembre, 2024',
    readTime: '8 min',
    image: '/images/article-caficultores.jpg',
  },
];
