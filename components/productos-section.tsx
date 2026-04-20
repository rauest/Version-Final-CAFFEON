'use client'

import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ProductCard } from './product-card'
import { productos, type Producto } from '@/lib/products'

type Linea = 'todos' | 'particular' | 'profesional' | 'pack'
type Categoria = 'todos' | 'espresso' | 'filtro' | 'blend' | 'origen'

const lineasTabs: { value: Linea; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'particular', label: 'Particular' },
  { value: 'profesional', label: 'Profesional' },
  { value: 'pack', label: 'Pack' },
]

const categorias: { value: Categoria; label: string }[] = [
  { value: 'todos', label: 'Todas las categorías' },
  { value: 'espresso', label: 'Espresso' },
  { value: 'filtro', label: 'Filtro' },
  { value: 'blend', label: 'Blend' },
  { value: 'origen', label: 'Origen Único' },
]

export function ProductosSection() {
  const [lineaActiva, setLineaActiva] = useState<Linea>('todos')
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('todos')

  const productosFiltrados = useMemo(() => {
    return productos.filter((producto) => {
      const cumpleLinea = lineaActiva === 'todos' || producto.linea === lineaActiva
      const cumpleCategoria = categoriaActiva === 'todos' || producto.categoria === categoriaActiva
      return cumpleLinea && cumpleCategoria
    })
  }, [lineaActiva, categoriaActiva])

  return (
    <section id="productos" className="py-24 bg-blanco-menta">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-dorado text-sm font-semibold uppercase tracking-wider mb-4">
            Nuestro Café
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-verde-profundo mb-4">
            Nuestro Catálogo
          </h2>
          <p className="text-verde-profundo/70 max-w-2xl mx-auto">
            Café de especialidad colombiano 100% arábica. Desde opciones para el hogar 
            hasta soluciones profesionales para hostelería.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          {/* Linea Tabs */}
          <div className="flex items-center gap-2 p-1 bg-verde-profundo/5 rounded-lg">
            {lineasTabs.map((tab) => (
              <Button
                key={tab.value}
                variant="ghost"
                size="sm"
                onClick={() => setLineaActiva(tab.value)}
                className={`
                  px-4 py-2 rounded-md transition-all
                  ${lineaActiva === tab.value
                    ? 'bg-verde-profundo text-blanco-menta shadow-sm'
                    : 'text-verde-profundo hover:bg-verde-profundo/10'
                  }
                `}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Categoria Dropdown */}
          <Select
            value={categoriaActiva}
            onValueChange={(value) => setCategoriaActiva(value as Categoria)}
          >
            <SelectTrigger className="w-[200px] border-verde-profundo/20">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              {categorias.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        {productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-verde-profundo/60 text-lg">
              No hay productos que coincidan con los filtros seleccionados.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setLineaActiva('todos')
                setCategoriaActiva('todos')
              }}
            >
              Mostrar todos los productos
            </Button>
          </div>
        )}

        {/* Results count */}
        <div className="mt-8 text-center">
          <p className="text-sm text-verde-profundo/50">
            Mostrando {productosFiltrados.length} de {productos.length} productos
          </p>
        </div>
      </div>
    </section>
  )
}
