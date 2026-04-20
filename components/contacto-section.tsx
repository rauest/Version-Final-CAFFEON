'use client'

import { useState } from 'react'
import { Mail, Phone, Clock, Building2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'

export function ContactoSection() {
  const [tipoCliente, setTipoCliente] = useState('particular')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Mensaje enviado correctamente. Te responderemos pronto.')
    setIsSubmitting(false)
    
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <section id="contacto" className="py-24 bg-blanco-menta">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-dorado text-sm font-semibold uppercase tracking-wider mb-4">
            Hablemos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-verde-profundo mb-4">
            Contacta con Nosotros
          </h2>
          <p className="text-verde-profundo/70 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres más información sobre nuestros cafés? 
            Estaremos encantados de ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-verde-profundo/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-verde-profundo">
                      Nombre
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                      className="border-verde-profundo/20 focus:border-dorado"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-verde-profundo">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="border-verde-profundo/20 focus:border-dorado"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-verde-profundo">Tipo de cliente</Label>
                  <RadioGroup
                    value={tipoCliente}
                    onValueChange={setTipoCliente}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="particular" id="particular" />
                      <Label htmlFor="particular" className="text-verde-profundo/70 cursor-pointer">
                        Particular
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="negocio" id="negocio" />
                      <Label htmlFor="negocio" className="text-verde-profundo/70 cursor-pointer">
                        Negocio / Hostelería
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="asunto" className="text-verde-profundo">
                    Asunto
                  </Label>
                  <Input
                    id="asunto"
                    name="asunto"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    className="border-verde-profundo/20 focus:border-dorado"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-verde-profundo">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos más..."
                    rows={5}
                    required
                    className="border-verde-profundo/20 focus:border-dorado resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-dorado hover:bg-dorado/90 text-verde-profundo font-semibold"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* General Contact */}
            <Card className="border-verde-profundo/10">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-verde-profundo mb-4">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hola@caffeon.es"
                    className="flex items-center gap-3 text-verde-profundo/70 hover:text-dorado transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-dorado/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-dorado" />
                    </div>
                    <span>hola@caffeon.es</span>
                  </a>
                  <a
                    href="tel:+34900123456"
                    className="flex items-center gap-3 text-verde-profundo/70 hover:text-dorado transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-dorado/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-dorado" />
                    </div>
                    <span>+34 900 123 456</span>
                  </a>
                  <div className="flex items-center gap-3 text-verde-profundo/70">
                    <div className="w-10 h-10 rounded-full bg-dorado/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-dorado" />
                    </div>
                    <span>Lunes a Viernes, 9:00 - 18:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* B2B Card */}
            <Card className="border-dorado/30 bg-verde-profundo">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-dorado/20 flex items-center justify-center shrink-0">
                    <Building2 className="h-6 w-6 text-dorado" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-blanco-menta mb-2">
                      ¿Eres profesional de la hostelería?
                    </h3>
                    <p className="text-blanco-menta/70 text-sm mb-4">
                      Ofrecemos atención personalizada para restaurantes, hoteles y 
                      cafeterías. Consulta nuestras condiciones especiales y asesoría 
                      profesional.
                    </p>
                    <Button
                      variant="outline"
                      className="border-dorado text-dorado hover:bg-dorado/10"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Solicitar llamada comercial
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-verde-profundo/10 overflow-hidden">
              <div className="aspect-video bg-verde-profundo/5 flex items-center justify-center">
                <div className="text-center text-verde-profundo/50">
                  <p className="text-sm">Servicio en toda España</p>
                  <p className="text-xs mt-1">Envío peninsular 24-48h</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
