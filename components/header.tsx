'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useCart } from '@/context/cart-context'
import { CartDrawer } from './cart-drawer'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#productos', label: 'Productos' },
  { href: '#stories', label: 'Caffeon Stories' },
  { href: '#sostenibilidad', label: 'Sostenibilidad' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#faq', label: 'FAQ' },
  { href: '#club', label: 'Club Caffeon' },
  { href: '/legales', label: 'Legales' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-verde-profundo/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl tracking-widest text-blanco-menta">
                COFFE<span className="text-dorado">O</span>N
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blanco-menta/90 hover:text-dorado transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Cart Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative text-blanco-menta hover:text-dorado hover:bg-blanco-menta/10"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-dorado text-verde-profundo text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Carrito de compras</span>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-blanco-menta hover:text-dorado hover:bg-blanco-menta/10"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-verde-profundo border-dorado/20 w-[300px]">
                  <div className="flex flex-col gap-6 pt-8">
                    <Link href="/" className="font-serif text-2xl tracking-widest text-blanco-menta">
                      COFFE<span className="text-dorado">O</span>N
                    </Link>
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-blanco-menta/90 hover:text-dorado transition-colors text-lg font-medium py-2 border-b border-blanco-menta/10"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  )
}
