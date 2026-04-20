export interface Producto {
  id: string
  nombre: string
  precio: number
  precioAnterior?: number
  formato: string
  categoria: 'espresso' | 'filtro' | 'blend' | 'origen'
  linea: 'particular' | 'profesional' | 'pack'
  origen: string
  descripcion: string
  notasSabor: string[]
  imagen: string
  badge?: string
  destacado?: boolean
}

export const productos: Producto[] = [
  // Línea Particular
  {
    id: 'signature-espresso',
    nombre: 'CAFFEON Signature Espresso',
    precio: 14.90,
    formato: '250g',
    categoria: 'espresso',
    linea: 'particular',
    origen: 'Colombia Blend',
    descripcion: 'Blend exclusivo con notas de chocolate negro y frutos secos',
    notasSabor: ['Chocolate negro', 'Frutos secos', 'Caramelo'],
    imagen: '/placeholder.svg?height=400&width=400&text=Signature+Espresso',
    badge: 'Más vendido',
    destacado: true,
  },
  {
    id: 'origin-colombia',
    nombre: 'CAFFEON Origin Colombia',
    precio: 16.50,
    formato: '250g',
    categoria: 'origen',
    linea: 'particular',
    origen: 'Huila, Colombia',
    descripcion: 'Acidez brillante con notas de frutas rojas y caramelo',
    notasSabor: ['Frutas rojas', 'Caramelo', 'Cítricos'],
    imagen: '/placeholder.svg?height=400&width=400&text=Origin+Colombia',
  },
  {
    id: 'ethiopia-reserve',
    nombre: 'CAFFEON Ethiopia Reserve',
    precio: 18.90,
    formato: '250g',
    categoria: 'filtro',
    linea: 'particular',
    origen: 'Yirgacheffe, Etiopía',
    descripcion: 'Floral con notas de jazmín, bergamota y melocotón',
    notasSabor: ['Jazmín', 'Bergamota', 'Melocotón'],
    imagen: '/placeholder.svg?height=400&width=400&text=Ethiopia+Reserve',
    badge: 'Edición Limitada',
  },
  {
    id: 'smooth-blend',
    nombre: 'CAFFEON Smooth Blend',
    precio: 13.50,
    formato: '250g',
    categoria: 'blend',
    linea: 'particular',
    origen: 'Colombia + Brasil',
    descripcion: 'Equilibrado, chocolate con leche y avellana, baja acidez',
    notasSabor: ['Chocolate con leche', 'Avellana', 'Tostado suave'],
    imagen: '/placeholder.svg?height=400&width=400&text=Smooth+Blend',
  },
  {
    id: 'guatemala',
    nombre: 'CAFFEON Guatemala',
    precio: 15.90,
    formato: '250g',
    categoria: 'origen',
    linea: 'particular',
    origen: 'Huehuetenango',
    descripcion: 'Notas de caramelo, manzana verde y azúcar moreno',
    notasSabor: ['Caramelo', 'Manzana verde', 'Azúcar moreno'],
    imagen: '/placeholder.svg?height=400&width=400&text=Guatemala',
  },
  {
    id: 'pack-degustacion-particular',
    nombre: 'Pack Degustación Particular',
    precio: 24.90,
    formato: '4x100g',
    categoria: 'origen',
    linea: 'pack',
    origen: 'Multi-origen',
    descripcion: 'Descubre 4 orígenes diferentes',
    notasSabor: ['Variado', 'Descubrimiento'],
    imagen: '/placeholder.svg?height=400&width=400&text=Pack+Degustacion',
  },
  
  // Línea Profesional (B2B)
  {
    id: 'pro-espresso',
    nombre: 'CAFFEON Pro Espresso',
    precio: 52.00,
    formato: '1 kg',
    categoria: 'espresso',
    linea: 'profesional',
    origen: 'Colombia Premium',
    descripcion: 'Consistencia perfecta para alto volumen, crema densa',
    notasSabor: ['Chocolate', 'Nuez', 'Crema densa'],
    imagen: '/placeholder.svg?height=400&width=400&text=Pro+Espresso',
    badge: 'Para Negocios',
  },
  {
    id: 'pro-filtro',
    nombre: 'CAFFEON Pro Filtro',
    precio: 54.00,
    formato: '1 kg',
    categoria: 'filtro',
    linea: 'profesional',
    origen: 'Blend Colombia',
    descripcion: 'Optimizado para métodos de filtro en volumen',
    notasSabor: ['Frutal', 'Floral', 'Limpio'],
    imagen: '/placeholder.svg?height=400&width=400&text=Pro+Filtro',
    badge: 'Para Negocios',
  },
  {
    id: 'hosteleria-blend',
    nombre: 'CAFFEON Hostelería Blend',
    precio: 145.00,
    formato: '3 kg',
    categoria: 'blend',
    linea: 'profesional',
    origen: 'Colombia + Centro América',
    descripcion: 'Para café de autor en restaurantes y hoteles',
    notasSabor: ['Equilibrado', 'Complejo', 'Versátil'],
    imagen: '/placeholder.svg?height=400&width=400&text=Hosteleria+Blend',
    badge: 'Alta Cocina',
    destacado: true,
  },
  
  // Packs
  {
    id: 'pack-inicio-particular',
    nombre: 'Pack Inicio Particular',
    precio: 39.90,
    precioAnterior: 46.90,
    formato: '3x250g',
    categoria: 'blend',
    linea: 'pack',
    origen: 'Multi',
    descripcion: 'Los 3 más vendidos de la línea particular',
    notasSabor: ['Variado', 'Best sellers'],
    imagen: '/placeholder.svg?height=400&width=400&text=Pack+Inicio',
    badge: 'Ahorro 15%',
  },
  {
    id: 'pack-degustacion-pro',
    nombre: 'Pack Degustación Pro',
    precio: 145.00,
    formato: '3x1kg',
    categoria: 'blend',
    linea: 'pack',
    origen: 'Multi',
    descripcion: 'Prueba nuestra línea profesional',
    notasSabor: ['Profesional', 'Completo'],
    imagen: '/placeholder.svg?height=400&width=400&text=Pack+Pro',
    badge: 'Para Negocios',
  },
]

export const stories = [
  {
    id: 'arte-tueste',
    titulo: 'El arte del tueste: cómo desarrollamos sabores únicos',
    categoria: 'Tueste',
    tiempoLectura: '5 min',
    imagen: '/placeholder.svg?height=300&width=400&text=Arte+del+Tueste',
    extracto: 'Descubre los secretos detrás de nuestro proceso de tueste artesanal.',
  },
  {
    id: 'huila-madrid',
    titulo: 'De Huila a Madrid: la ruta del café de especialidad',
    categoria: 'Origen',
    tiempoLectura: '8 min',
    imagen: '/placeholder.svg?height=300&width=400&text=Huila+a+Madrid',
    extracto: 'Un viaje desde las montañas colombianas hasta tu taza.',
  },
  {
    id: 'metodos-extraccion',
    titulo: 'Métodos de extracción para alta cocina',
    categoria: 'Técnica',
    tiempoLectura: '6 min',
    imagen: '/placeholder.svg?height=300&width=400&text=Metodos+Extraccion',
    extracto: 'Técnicas profesionales para servir el café perfecto.',
  },
  {
    id: 'sostenibilidad-real',
    titulo: 'Sostenibilidad real: nuestros compromisos con Colombia',
    categoria: 'Sostenibilidad',
    tiempoLectura: '4 min',
    imagen: '/placeholder.svg?height=300&width=400&text=Sostenibilidad',
    extracto: 'Cómo impactamos positivamente en las comunidades cafeteras.',
  },
  {
    id: 'cafe-restaurante',
    titulo: 'Cómo elegir el café perfecto para tu restaurante',
    categoria: 'B2B',
    tiempoLectura: '7 min',
    imagen: '/placeholder.svg?height=300&width=400&text=Cafe+Restaurante',
    extracto: 'Guía completa para profesionales de la hostelería.',
  },
  {
    id: 'don-carlos',
    titulo: 'El campesino detrás de tu taza: historia de Don Carlos',
    categoria: 'Origen',
    tiempoLectura: '10 min',
    imagen: '/placeholder.svg?height=300&width=400&text=Don+Carlos',
    extracto: 'Conoce a uno de nuestros caficultores aliados.',
  },
]

export const faqItems = [
  {
    pregunta: '¿Cuánto tarda el envío?',
    respuesta: '24-48 horas en península, 3-5 días para Canarias y Baleares.',
  },
  {
    pregunta: '¿Tienen envío gratis?',
    respuesta: 'Sí, envío gratuito en pedidos superiores a 40€ en península.',
  },
  {
    pregunta: '¿Cuál es el café más recomendado para empezar?',
    respuesta: 'Recomendamos el Signature Espresso para quienes buscan un sabor clásico equilibrado, o el Pack Inicio Particular para descubrir diferentes perfiles.',
  },
  {
    pregunta: '¿Hacen envíos a hostelería en grandes cantidades?',
    respuesta: 'Sí, contamos con una línea profesional específica para hostelería con precios especiales por volumen y asesoría personalizada.',
  },
  {
    pregunta: '¿El café viene recién tostado?',
    respuesta: 'Tostamos bajo pedido, máximo 3 días antes del envío, garantizando la máxima frescura.',
  },
  {
    pregunta: '¿Tienen suscripción mensual?',
    respuesta: 'Próximamente lanzaremos Club Caffeon con entrega mensual y beneficios exclusivos. ¡Suscríbete a nuestra newsletter para enterarte primero!',
  },
  {
    pregunta: '¿Puedo devolver un producto?',
    respuesta: 'Sí, tienes 14 días para devoluciones. Sin embargo, por ser productos perecederos, los cafés abiertos no son elegibles para devolución.',
  },
  {
    pregunta: '¿De dónde viene exactamente el café?',
    respuesta: 'Trabajamos con fincas certificadas principalmente en Colombia (Huila, Nariño), así como en Etiopía (Yirgacheffe) y Guatemala (Huehuetenango).',
  },
]
