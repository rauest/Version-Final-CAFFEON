'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export interface CartItem {
  id: string
  nombre: string
  precio: number
  cantidad: number
  imagen: string
  formato: string
  linea: 'particular' | 'profesional' | 'pack'
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'cantidad'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, cantidad: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((newItem: Omit<CartItem, 'cantidad'>) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === newItem.id)
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === newItem.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }
      
      return [...currentItems, { ...newItem, cantidad: 1 }]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, cantidad: number) => {
    if (cantidad < 1) {
      removeItem(id)
      return
    }
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, cantidad } : item
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const totalItems = items.reduce((sum, item) => sum + item.cantidad, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
