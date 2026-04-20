'use client'

import Image from 'next/image'
import { ShoppingBag, Phone, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useCart } from '@/context/cart-context'
import { toast } from 'sonner'
import type { Producto } from '@/lib/products'

interface ProductCardProps {
  producto: Producto
}

export function ProductCard({ producto }: ProductCardProps) {
  const { addItem } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(price)
  }

  const handleAddToCart = () => {
    addItem({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      formato: producto.formato,
      linea: producto.linea,
    })
    toast.success(`${producto.nombre} añadido al carrito`)
  }

  const lineaLabel = {
    particular: 'Particular',
    profesional: 'Profesional',
    pack: 'Pack',
  }

  return (
    <Card className="group overflow-hidden bg-white border-verde-profundo/10 hover:border-dorado/30 transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-verde-profundo/5">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {producto.badge && (
            <Badge className="bg-dorado text-verde-profundo font-semibold">
              {producto.badge}
            </Badge>
          )}
        </div>
        {/* Linea indicator */}
        <div className="absolute top-3 right-3">
          <Badge 
            variant="outline" 
            className={`
              text-xs font-medium backdrop-blur-sm
              ${producto.linea === 'profesional' 
                ? 'bg-verde-profundo/90 text-blanco-menta border-verde-profundo' 
                : producto.linea === 'pack'
                ? 'bg-cafe-oscuro/90 text-blanco-menta border-cafe-oscuro'
                : 'bg-blanco-menta/90 text-verde-profundo border-verde-profundo/20'
              }
            `}
          >
            {lineaLabel[producto.linea]}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Origin & Format */}
        <div className="flex items-center justify-between text-xs text-verde-profundo/60 mb-2">
          <span className="flex items-center gap-1">
            <Coffee className="h-3 w-3" />
            {producto.origen}
          </span>
          <span>{producto.formato}</span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-lg text-verde-profundo mb-2 line-clamp-2 min-h-[3.5rem]">
          {producto.nombre}
        </h3>

        {/* Description */}
        <p className="text-sm text-verde-profundo/60 mb-3 line-clamp-2">
          {producto.descripcion}
        </p>

        {/* Flavor notes */}
        <div className="flex flex-wrap gap-1 mb-4">
          {producto.notasSabor.slice(0, 3).map((nota) => (
            <span
              key={nota}
              className="text-xs px-2 py-0.5 rounded-full bg-verde-profundo/5 text-verde-profundo/70"
            >
              {nota}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-serif text-2xl text-dorado font-semibold">
            {formatPrice(producto.precio)}
          </span>
          {producto.precioAnterior && (
            <span className="text-sm text-verde-profundo/40 line-through">
              {formatPrice(producto.precioAnterior)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-dorado hover:bg-dorado/90 text-verde-profundo font-semibold"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Añadir al Carrito
          </Button>
          {producto.linea === 'profesional' && (
            <Button
              variant="outline"
              className="w-full border-verde-profundo/20 text-verde-profundo hover:bg-verde-profundo/5"
            >
              <Phone className="h-4 w-4 mr-2" />
              Pedir Presupuesto
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
