'use client'

import Image from 'next/image'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/context/cart-context'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(price)
  }

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="bg-blanco-menta border-l border-verde-profundo/10 w-full sm:max-w-md flex flex-col">
        <SheetHeader className="space-y-2">
          <SheetTitle className="font-serif text-2xl text-verde-profundo flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-dorado" />
            Tu Carrito
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 rounded-full bg-verde-profundo/10 flex items-center justify-center mb-4">
              <ShoppingBag className="h-10 w-10 text-verde-profundo/50" />
            </div>
            <p className="text-verde-profundo/70 text-lg mb-2">Tu carrito está vacío</p>
            <p className="text-verde-profundo/50 text-sm mb-6">
              Descubre nuestros cafés de especialidad
            </p>
            <Button
              onClick={closeCart}
              className="bg-dorado hover:bg-dorado/90 text-verde-profundo font-semibold"
            >
              Ver Productos
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-white rounded-lg border border-verde-profundo/10"
                >
                  <div className="relative w-20 h-20 rounded-md overflow-hidden bg-verde-profundo/5 shrink-0">
                    <Image
                      src={item.imagen}
                      alt={item.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-semibold text-verde-profundo truncate">
                      {item.nombre}
                    </h4>
                    <p className="text-xs text-verde-profundo/60 mt-0.5">{item.formato}</p>
                    <p className="text-dorado font-semibold text-sm mt-1">
                      {formatPrice(item.precio)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 border-verde-profundo/20"
                        onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">{item.cantidad}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 border-verde-profundo/20"
                        onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-verde-profundo/10 pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-verde-profundo/70">Subtotal</span>
                <span className="font-serif text-xl font-semibold text-verde-profundo">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <p className="text-xs text-verde-profundo/50">
                Envío gratuito en pedidos superiores a 40€
              </p>
              <Button className="w-full bg-dorado hover:bg-dorado/90 text-verde-profundo font-semibold h-12">
                Proceder al Pago
              </Button>
              <Button
                variant="outline"
                className="w-full border-verde-profundo/20 text-verde-profundo hover:bg-verde-profundo/5"
                onClick={closeCart}
              >
                Seguir Comprando
              </Button>
              <Button
                variant="ghost"
                className="w-full text-destructive hover:text-destructive text-sm"
                onClick={clearCart}
              >
                Vaciar carrito
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
