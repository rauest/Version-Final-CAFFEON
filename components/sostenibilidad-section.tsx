import { Leaf, Recycle, Droplets, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const pilares = [
  {
    icon: Leaf,
    titulo: 'Comercio Justo',
    descripcion: 'Pagamos un 30% más que el precio de mercado a nuestros productores, garantizando una compensación justa por su trabajo y dedicación.',
  },
  {
    icon: Recycle,
    titulo: 'Packaging Sostenible',
    descripcion: '100% de nuestros envases son reciclables o biodegradables. Trabajamos constantemente en reducir nuestro impacto ambiental.',
  },
  {
    icon: Droplets,
    titulo: 'Agua y Carbono',
    descripcion: 'Compensamos el 100% de nuestra huella de carbono y apoyamos proyectos de conservación de recursos hídricos en las zonas cafeteras.',
  },
  {
    icon: Users,
    titulo: 'Comunidades',
    descripcion: 'Reinvertimos el 5% de nuestros beneficios en proyectos educativos y de desarrollo en las regiones cafeteras de Colombia.',
  },
]

export function SostenibilidadSection() {
  return (
    <section id="sostenibilidad" className="py-24 bg-blanco-menta">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-dorado text-sm font-semibold uppercase tracking-wider mb-4">
            Nuestro Compromiso
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-verde-profundo mb-4">
            Compromisos con el Planeta y las Personas
          </h2>
          <p className="text-verde-profundo/70 max-w-2xl mx-auto">
            Creemos que un gran café comienza con prácticas responsables. Desde el cultivo 
            hasta tu taza, cada paso refleja nuestro compromiso con la sostenibilidad.
          </p>
        </div>

        {/* Pilares Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pilares.map((pilar) => (
            <Card 
              key={pilar.titulo} 
              className="bg-white border-verde-profundo/10 hover:border-dorado/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-dorado/10 flex items-center justify-center mb-6">
                  <pilar.icon className="h-7 w-7 text-dorado" />
                </div>
                <h3 className="font-serif text-2xl text-verde-profundo mb-3">
                  {pilar.titulo}
                </h3>
                <p className="text-verde-profundo/70 leading-relaxed">
                  {pilar.descripcion}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-verde-profundo hover:bg-verde-profundo/90 text-blanco-menta"
          >
            Conoce Nuestros Informes de Impacto
          </Button>
        </div>
      </div>
    </section>
  )
}
