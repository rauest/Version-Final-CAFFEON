import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { stories } from '@/lib/products'

export function StoriesSection() {
  return (
    <section id="stories" className="py-24 bg-verde-profundo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-dorado text-sm font-semibold uppercase tracking-wider mb-4">
            Blog
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-blanco-menta mb-4">
            Caffeon Stories
          </h2>
          <p className="text-blanco-menta/70 max-w-2xl mx-auto">
            Historias que nacen en las fincas y llegan a tu mesa. Descubre el mundo 
            del café de especialidad a través de nuestros artículos.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card 
              key={story.id} 
              className="group overflow-hidden bg-blanco-menta/5 border-blanco-menta/10 hover:border-dorado/30 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.imagen}
                  alt={story.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-verde-profundo/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-dorado text-verde-profundo">
                  {story.categoria}
                </Badge>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-blanco-menta/50 text-sm mb-3">
                  <Clock className="h-4 w-4" />
                  <span>{story.tiempoLectura} lectura</span>
                </div>
                <h3 className="font-serif text-xl text-blanco-menta mb-3 line-clamp-2 group-hover:text-dorado transition-colors">
                  {story.titulo}
                </h3>
                <p className="text-blanco-menta/60 text-sm mb-4 line-clamp-2">
                  {story.extracto}
                </p>
                <Button
                  variant="ghost"
                  className="text-dorado hover:text-dorado/80 hover:bg-dorado/10 p-0 h-auto font-semibold"
                >
                  Leer más
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blanco-menta/30 text-blanco-menta hover:bg-blanco-menta/10"
          >
            Ver todas las historias
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
