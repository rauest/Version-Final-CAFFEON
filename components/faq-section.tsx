'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqItems } from '@/lib/products'

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-verde-profundo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-dorado text-sm font-semibold uppercase tracking-wider mb-4">
            Ayuda
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-blanco-menta mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-blanco-menta/70 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros productos y servicios.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-blanco-menta/5 border border-blanco-menta/10 rounded-lg px-6 data-[state=open]:border-dorado/30"
              >
                <AccordionTrigger className="text-blanco-menta hover:text-dorado text-left py-5 font-medium [&[data-state=open]]:text-dorado">
                  {item.pregunta}
                </AccordionTrigger>
                <AccordionContent className="text-blanco-menta/70 pb-5 leading-relaxed">
                  {item.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-blanco-menta/60 mb-4">
            ¿No encuentras lo que buscas?
          </p>
          <a
            href="#contacto"
            className="text-dorado hover:text-dorado/80 font-semibold transition-colors"
          >
            Contacta con nosotros
          </a>
        </div>
      </div>
    </section>
  )
}
