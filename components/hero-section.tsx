'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    id: 1,
    title: 'Del Origen a la Mesa',
    subtitle: 'Café de especialidad colombiano para alta cocina',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80',
  },
  {
    id: 2,
    title: 'Calidad Constante',
    subtitle: 'Trazabilidad completa desde la finca hasta tu negocio',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=80',
  },
  {
    id: 3,
    title: 'Alta Cocina',
    subtitle: 'Experiencias únicas para negocios que valoran la excelencia',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80',
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-verde-profundo/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="font-serif text-5xl md:text-7xl tracking-widest text-blanco-menta">
            COFFE<span className="text-dorado">O</span>N
          </h1>
          <p className="text-dorado text-sm md:text-base tracking-[0.3em] mt-2 uppercase">
            Café de Especialidad
          </p>
        </div>

        {/* Slide Content */}
        <div className="max-w-4xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute'
              }`}
            >
              {index === currentSlide && (
                <>
                  <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-blanco-menta mb-4 text-balance">
                    {slide.title}
                  </h2>
                  <p className="text-blanco-menta/80 text-lg md:text-xl lg:text-2xl mb-8 text-pretty">
                    {slide.subtitle}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Button
            asChild
            size="lg"
            className="bg-dorado hover:bg-dorado/90 text-verde-profundo font-semibold px-8 h-12 text-base"
          >
            <Link href="#productos">Ver Productos</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-blanco-menta border-blanco-menta text-verde-profundo hover:bg-blanco-menta/90 px-8 h-12 text-base"
          >
            <Link href="#origen">Conoce Nuestra Historia</Link>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-blanco-menta/10 hover:bg-blanco-menta/20 backdrop-blur-sm flex items-center justify-center transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6 text-blanco-menta" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-blanco-menta/10 hover:bg-blanco-menta/20 backdrop-blur-sm flex items-center justify-center transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-6 w-6 text-blanco-menta" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-dorado'
                : 'w-2 bg-blanco-menta/50 hover:bg-blanco-menta/70'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <Link
          href="#origen"
          className="flex flex-col items-center gap-2 text-blanco-menta/70 hover:text-blanco-menta transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Descubre más</span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
