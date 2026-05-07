export interface Producto {
  id: string
  nombre: string
  precio: number
  precioAnterior?: number
  formato: string
  categoria: 'arabico' | 'robusto' | 'iberico' | 'excelsior'
  linea: 'particular' | 'profesional' | 'pack'
  origen: string
  descripcion: string
  notasSabor: string[]
  imagen: string
  badge?: string
  destacado?: boolean
}

export const productos: Producto[] = [
  // Línea Particular - Arábico (suaves, afrutados, elegantes)
  {
    id: 'signature-arabico',
    nombre: 'COFFEON Signature Arábico',
    precio: 14.90,
    formato: '250g',
    categoria: 'arabico',
    linea: 'particular',
    origen: 'Colombia Blend',
    descripcion: 'Blend exclusivo con notas de chocolate negro y frutos secos',
    notasSabor: ['Chocolate negro', 'Frutos secos', 'Caramelo'],
    imagen: '/images/products/signature-arabico.jpg',
    badge: 'Más vendido',
    destacado: true,
  },
  {
    id: 'origin-colombia',
    nombre: 'COFFEON Origin Colombia',
    precio: 16.50,
    formato: '250g',
    categoria: 'arabico',
    linea: 'particular',
    origen: 'Huila, Colombia',
    descripcion: 'Acidez brillante con notas de frutas rojas y caramelo',
    notasSabor: ['Frutas rojas', 'Caramelo', 'Cítricos'],
    imagen: '/images/products/origin-colombia.jpg',
  },
  {
    id: 'ethiopia-reserve',
    nombre: 'COFFEON Ethiopia Reserve',
    precio: 18.90,
    formato: '250g',
    categoria: 'arabico',
    linea: 'particular',
    origen: 'Yirgacheffe, Etiopía',
    descripcion: 'Floral con notas de jazmín, bergamota y melocotón',
    notasSabor: ['Jazmín', 'Bergamota', 'Melocotón'],
    imagen: '/images/products/ethiopia-reserve.jpg',
    badge: 'Edición Limitada',
  },
  
  // Línea Particular - Robusto (intensos, con cuerpo, cremosos)
  {
    id: 'robusto-intenso',
    nombre: 'COFFEON Robusto Intenso',
    precio: 12.90,
    formato: '250g',
    categoria: 'robusto',
    linea: 'particular',
    origen: 'Vietnam + Uganda',
    descripcion: 'Cuerpo potente con notas de cacao y madera',
    notasSabor: ['Cacao', 'Madera', 'Especias'],
    imagen: '/images/products/robusto-intenso.jpg',
  },
  {
    id: 'robusto-crema',
    nombre: 'COFFEON Robusto Crema',
    precio: 13.50,
    formato: '250g',
    categoria: 'robusto',
    linea: 'particular',
    origen: 'India + Brasil',
    descripcion: 'Crema densa y persistente, ideal para espresso',
    notasSabor: ['Nuez', 'Tostado', 'Crema densa'],
    imagen: '/images/products/robusto-crema.jpg',
    badge: 'Alta Crema',
  },
  
  // Línea Particular - Ibérico (blends tradicionales españoles)
  {
    id: 'iberico-tradicion',
    nombre: 'COFFEON Ibérico Tradición',
    precio: 11.90,
    formato: '250g',
    categoria: 'iberico',
    linea: 'particular',
    origen: 'Colombia + Brasil',
    descripcion: 'Blend tradicional español, equilibrado y suave',
    notasSabor: ['Chocolate con leche', 'Avellana', 'Tostado suave'],
    imagen: '/images/products/iberico-tradicion.jpg',
  },
  {
    id: 'iberico-natural',
    nombre: 'COFFEON Ibérico Natural',
    precio: 12.50,
    formato: '250g',
    categoria: 'iberico',
    linea: 'particular',
    origen: 'Centro América',
    descripcion: 'Tueste natural, sabor clásico de cafetería española',
    notasSabor: ['Caramelo', 'Pan tostado', 'Dulce'],
    imagen: '/images/products/iberico-natural.jpg',
  },
  
  // Línea Particular - Excelsior (premium, ediciones especiales)
  {
    id: 'excelsior-geisha',
    nombre: 'COFFEON Excelsior Geisha',
    precio: 34.90,
    formato: '200g',
    categoria: 'excelsior',
    linea: 'particular',
    origen: 'Panamá',
    descripcion: 'Variedad Geisha, notas florales excepcionales',
    notasSabor: ['Jazmín', 'Bergamota', 'Miel'],
    imagen: '/images/products/excelsior-geisha.jpg',
    badge: 'Ultra Premium',
    destacado: true,
  },
  {
    id: 'excelsior-bourbon',
    nombre: 'COFFEON Excelsior Bourbon',
    precio: 28.90,
    formato: '250g',
    categoria: 'excelsior',
    linea: 'particular',
    origen: 'Rwanda',
    descripcion: 'Variedad Bourbon rojo, complejidad frutal única',
    notasSabor: ['Frambuesa', 'Vino tinto', 'Chocolate'],
    imagen: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Excelsior%20Bourbon-kWRmC4VYVyaa6w69aGFE65AZkwHTae.jpg',
    badge: 'Edición Limitada',
  },
  {
    id: 'guatemala-excelsior',
    nombre: 'COFFEON Guatemala Excelsior',
    precio: 22.90,
    formato: '250g',
    categoria: 'excelsior',
    linea: 'particular',
    origen: 'Huehuetenango',
    descripcion: 'Microlote seleccionado, notas de caramelo y manzana',
    notasSabor: ['Caramelo', 'Manzana verde', 'Azúcar moreno'],
    imagen: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Guatemala%20Excelsior-WlnBkdP0PvFDZbcFZcIiYuboh5HNtN.jpg',
  },
  
  // Packs
  {
    id: 'pack-degustacion-particular',
    nombre: 'Pack Degustación 4 Categorías',
    precio: 24.90,
    formato: '4x250g',
    categoria: 'arabico',
    linea: 'pack',
    origen: 'Multi-origen',
    descripcion: 'Descubre las 4 categorías: Arábico, Robusto, Ibérico y Excelsior',
    notasSabor: ['Variado', 'Descubrimiento'],
    imagen: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pack%20Degustaci%C3%B3n%204%20Categor%C3%ADas-xH0Iv8u4MWi2Lchc2RtehPlYdRP9aM.jpg',
  },
  
  // Línea Profesional (B2B)
  {
    id: 'pro-arabico',
    nombre: 'COFFEON Pro Javaica',
    precio: 52.00,
    formato: '1 kg',
    categoria: 'arabico',
    linea: 'profesional',
    origen: 'Colombia Premium',
    descripcion: 'Consistencia perfecta para alto volumen, perfil suave',
    notasSabor: ['Chocolate', 'Nuez', 'Afrutado'],
    imagen: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pro%20Javaica-o6adrRZEVKLrydJUhCb07syDjapopI.jpg',
    badge: 'Para Negocios',
  },
  {
    id: 'pro-robusto',
    nombre: 'COFFEON Pro Robustas',
    precio: 48.00,
    formato: '1 kg',
    categoria: 'robusto',
    linea: 'profesional',
    origen: 'Vietnam Premium',
    descripcion: 'Crema excepcional para hostelería de alto volumen',
    notasSabor: ['Intenso', 'Crema densa', 'Persistente'],
    imagen: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pro%20Robustas-3kFwLDWmXTHL8Y3y0soE8qepwlZSiU.jpg',
    badge: 'Para Negocios',
  },
  {
    id: 'hosteleria-iberico',
    nombre: 'COFFEON Excelsior Ibérico',
    precio: 135.00,
    formato: '3x1kg',
    categoria: 'iberico',
    linea: 'profesional',
    origen: 'Colombia + Brasil',
    descripcion: 'Blend de cafés únicos, exóticos y robustos naturales',
    notasSabor: ['Equilibrado', 'Tradicional', 'Versátil'],
    imagen: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Excelsior%20Iberico-VyvAoaQOqxbEC66qnQUploop2AXqCN.jpg',
    badge: 'Hostelería',
    destacado: true,
  },
  {
    id: 'pro-excelsior',
    nombre: 'COFFEON Pro Excelsior',
    precio: 89.00,
    formato: '1 kg',
    categoria: 'excelsior',
    linea: 'profesional',
    origen: 'Multi-origen Premium',
    descripcion: 'Más que cafés únicos de cacao y frutas secas',
    notasSabor: ['Complejo', 'Elegante', 'Memorable'],
    imagen: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pro%20Excelsior-SCdTVhnPqhACNglUwmb3vBJ3yiXhfw.jpg',
    badge: 'Alta Cocina',
  },
  
  // Packs Profesionales
  {
    id: 'pack-inicio-particular',
    nombre: 'Pack Inicio Particular',
    precio: 39.90,
    precioAnterior: 46.90,
    formato: '3x250g',
    categoria: 'arabico',
    linea: 'pack',
    origen: 'Multi',
    descripcion: 'Los 3 cafés vendidos de línea particular',
    notasSabor: ['Variado', 'Best sellers'],
    imagen: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Inicio%20Particular-eqvUb5SO5T5kS3OewAUIsHxBw3eTEy.jpg',
    badge: 'Ahorro 15%',
  },
  {
    id: 'pack-degustacion-pro',
    nombre: 'Pack Degustación Pro',
    precio: 145.00,
    formato: '3x1kg',
    categoria: 'robusto',
    linea: 'pack',
    origen: 'Multi',
    descripcion: 'Prueba nuestra línea profesional',
    notasSabor: ['Profesional', 'Completo'],
    imagen: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Degustacion%20Pro-cXz438qhRtyBNPhVcdSqxdghsx42hi.jpg',
    badge: 'Para Negocios',
  },
]

export const stories = [
  {
    id: 'arte-tueste',
    titulo: 'El arte del tueste: cómo desarrollamos sabores únicos',
    categoria: 'Tueste',
    tiempoLectura: '5 min',
    imagen: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
    extracto: 'Descubre los secretos detrás de nuestro proceso de tueste artesanal.',
  },
  {
    id: 'huila-madrid',
    titulo: 'De Huila a Madrid: la ruta del café de especialidad',
    categoria: 'Origen',
    tiempoLectura: '8 min',
    imagen: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&q=80',
    extracto: 'Un viaje desde las montañas colombianas hasta tu taza.',
  },
  {
    id: 'metodos-extraccion',
    titulo: 'Métodos de extracción para alta cocina',
    categoria: 'Técnica',
    tiempoLectura: '6 min',
    imagen: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    extracto: 'Técnicas profesionales para servir el café perfecto.',
  },
  {
    id: 'sostenibilidad-real',
    titulo: 'Sostenibilidad real: nuestros compromisos con Colombia',
    categoria: 'Sostenibilidad',
    tiempoLectura: '4 min',
    imagen: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Colombia-xpCKZI3uxV39fOrpnFvRlVTuj3hXo6.jpg',
    extracto: 'Cómo impactamos positivamente en las comunidades cafeteras.',
  },
  {
    id: 'cafe-restaurante',
    titulo: 'Cómo elegir el café perfecto para tu restaurante',
    categoria: 'B2B',
    tiempoLectura: '7 min',
    imagen: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=600&q=80',
    extracto: 'Guía completa para profesionales de la hostelería.',
  },
  {
    id: 'don-carlos',
    titulo: 'El campesino detrás de tu taza: historia de Don Carlos',
    categoria: 'Origen',
    tiempoLectura: '10 min',
    imagen: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80',
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
    respuesta: 'Próximamente lanzaremos Club Coffeon con entrega mensual y beneficios exclusivos. ¡Suscríbete a nuestra newsletter para enterarte primero!',
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
