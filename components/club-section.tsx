'use client'

import { useState } from 'react'
import { Coffee, Gift, Sparkles, Bell, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

const beneficios = [
  {
    icon: Gift,
    titulo: 'Ofertas Exclusivas',
    descripcion: 'Descuentos especiales solo para miembros',
  },
  {
    icon: Bell,
    titulo: 'Novedades Anticipadas',
    descripcion: 'Sé el primero en conocer nuevos productos',
  },
  {
    icon: Sparkles,
    titulo: 'Contenido Premium',
    descripcion: 'Recetas, guías y tips de expertos',
  },
]

export function ClubSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return
    
    setIsSubmitting(true)
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('¡Bienvenido al Club Caffeon! Revisa tu email.')
    setEmail('')
    setIsSubmitting(false)
  }

  return (
    <section id="club" className="py-24 bg-cafe-oscuro relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-dorado/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-verde-profundo/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-dorado/20 flex items-center justify-center mx-auto mb-8">
            <Coffee className="h-10 w-10 text-dorado" />
          </div>

          {/* Header */}
          <span className="inline-block text-dorado text-sm font-semibold uppercase tracking-wider mb-4">
            Newsletter
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-blanco-menta mb-4">
            Club Caffeon
          </h2>
          <p className="text-blanco-menta/70 max-w-xl mx-auto mb-10">
            Únete a nuestra comunidad y recibe contenido exclusivo, ofertas especiales 
            y las últimas novedades del mundo del café de especialidad.
          </p>

          {/* Beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {beneficios.map((beneficio) => (
              <div 
                key={beneficio.titulo}
                className="p-6 rounded-xl bg-blanco-menta/5 border border-blanco-menta/10"
              >
                <div className="w-12 h-12 rounded-full bg-dorado/20 flex items-center justify-center mx-auto mb-4">
                  <beneficio.icon className="h-6 w-6 text-dorado" />
                </div>
                <h3 className="font-serif text-lg text-blanco-menta mb-2">
                  {beneficio.titulo}
                </h3>
                <p className="text-blanco-menta/60 text-sm">
                  {beneficio.descripcion}
                </p>
              </div>
            ))}
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-blanco-menta/10 border-blanco-menta/20 text-blanco-menta placeholder:text-blanco-menta/50 focus:border-dorado h-12"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-dorado hover:bg-dorado/90 text-verde-profundo font-semibold h-12 px-8"
            >
              {isSubmitting ? (
                'Suscribiendo...'
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Unirme al Club
                </>
              )}
            </Button>
          </form>

          <p className="text-blanco-menta/40 text-xs mt-4">
            Al suscribirte, aceptas nuestra política de privacidad. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}
