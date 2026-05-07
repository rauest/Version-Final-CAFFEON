'use client'

import Image from 'next/image'
import { ShoppingBag, Phone, Coffee, MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { useCart } from '@/context/cart-context'
import { toast } from 'sonner'
import type { Producto } from '@/lib/products'

interface ProductDetailModalProps {
  producto: Producto | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductDetailModal({ producto, open, onOpenChange }: ProductDetailModalProps) {
  const { addItem } = useCart()

  if (!producto) return null

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
    onOpenChange(false)
  }

  const lineaLabel = {
    particular: 'Particular',
    profesional: 'Profesional',
    pack: 'Pack',
  }

  const categoriaLabel = {
    arabico: 'Arábico',
    robusto: 'Robusto',
    iberico: 'Ibérico',
    excelsior: 'Excelsior',
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-blanco-menta">
        <DialogHeader className="sr-only">
          <DialogTitle>{producto.nombre}</DialogTitle>
          <DialogDescription>{producto.descripcion}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-verde-profundo/5">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              fill
              className="object-cover"
            />
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {producto.badge && (
                <Badge className="bg-dorado text-verde-profundo font-semibold">
                  {producto.badge}
                </Badge>
              )}
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

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <span className="text-dorado text-sm font-semibold uppercase tracking-wider mb-2">
              {categoriaLabel[producto.categoria]}
            </span>

            {/* Name */}
            <h2 className="font-serif text-2xl md:text-3xl text-verde-profundo mb-3">
              {producto.nombre}
            </h2>

            {/* Origin & Format */}
            <div className="flex items-center gap-4 text-sm text-verde-profundo/70 mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {producto.origen}
              </span>
              <span className="flex items-center gap-1">
                <Coffee className="h-4 w-4" />
                {producto.formato}
              </span>
            </div>

            {/* Description */}
            <p className="text-verde-profundo/80 mb-4 leading-relaxed">
              {producto.descripcion}
            </p>

            {/* Flavor notes */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-verde-profundo mb-2 flex items-center gap-2">
                <Star className="h-4 w-4 text-dorado" />
                Notas de sabor
              </h4>
              <div className="flex flex-wrap gap-2">
                {producto.notasSabor.map((nota) => (
                  <span
                    key={nota}
                    className="text-sm px-3 py-1 rounded-full bg-verde-profundo/10 text-verde-profundo"
                  >
                    {nota}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-3xl text-dorado font-semibold">
                {formatPrice(producto.precio)}
              </span>
              {producto.precioAnterior && (
                <span className="text-lg text-verde-profundo/40 line-through">
                  {formatPrice(producto.precioAnterior)}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-auto">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-dorado hover:bg-dorado/90 text-verde-profundo font-semibold"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Añadir al Carrito
              </Button>
              {producto.linea === 'profesional' && (
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-verde-profundo/20 text-verde-profundo hover:bg-verde-profundo/5"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Pedir Presupuesto
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
