'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { productos, type Producto } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SlidersHorizontal, Grid, List, Search, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

type SortOption = 'precio-asc' | 'precio-desc' | 'nombre-asc' | 'nombre-desc'

export default function TiendaPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLineas, setSelectedLineas] = useState<string[]>([])
  const [selectedCategorias, setSelectedCategorias] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 200])
  const [sortBy, setSortBy] = useState<SortOption>('nombre-asc')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const maxPrice = Math.max(...productos.map(p => p.precio))

  const filteredProducts = useMemo(() => {
    let filtered = [...productos]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p =>
        p.nombre.toLowerCase().includes(query) ||
        p.descripcion.toLowerCase().includes(query) ||
        p.origen.toLowerCase().includes(query)
      )
    }

    // Linea filter
    if (selectedLineas.length > 0) {
      filtered = filtered.filter(p => selectedLineas.includes(p.linea))
    }

    // Categoria filter
    if (selectedCategorias.length > 0) {
      filtered = filtered.filter(p => selectedCategorias.includes(p.categoria))
    }

    // Price filter
    filtered = filtered.filter(p =>
      p.precio >= priceRange[0] && p.precio <= priceRange[1]
    )

    // Sorting
    switch (sortBy) {
      case 'precio-asc':
        filtered.sort((a, b) => a.precio - b.precio)
        break
      case 'precio-desc':
        filtered.sort((a, b) => b.precio - a.precio)
        break
      case 'nombre-asc':
        filtered.sort((a, b) => a.nombre.localeCompare(b.nombre))
        break
      case 'nombre-desc':
        filtered.sort((a, b) => b.nombre.localeCompare(a.nombre))
        break
    }

    return filtered
  }, [searchQuery, selectedLineas, selectedCategorias, priceRange, sortBy])

  const toggleLinea = (linea: string) => {
    setSelectedLineas(prev =>
      prev.includes(linea)
        ? prev.filter(l => l !== linea)
        : [...prev, linea]
    )
  }

  const toggleCategoria = (categoria: string) => {
    setSelectedCategorias(prev =>
      prev.includes(categoria)
        ? prev.filter(c => c !== categoria)
        : [...prev, categoria]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedLineas([])
    setSelectedCategorias([])
    setPriceRange([0, maxPrice])
  }

  const hasActiveFilters = searchQuery || selectedLineas.length > 0 || selectedCategorias.length > 0 || priceRange[0] > 0 || priceRange[1] < maxPrice

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Linea */}
      <div>
        <h4 className="font-serif text-lg text-verde-profundo mb-3">Línea</h4>
        <div className="space-y-2">
          {['particular', 'profesional', 'pack'].map((linea) => (
            <div key={linea} className="flex items-center space-x-2">
              <Checkbox
                id={`linea-${linea}`}
                checked={selectedLineas.includes(linea)}
                onCheckedChange={() => toggleLinea(linea)}
              />
              <Label htmlFor={`linea-${linea}`} className="text-verde-profundo/70 capitalize cursor-pointer">
                {linea}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Categoria */}
      <div>
        <h4 className="font-serif text-lg text-verde-profundo mb-3">Categoría</h4>
        <div className="space-y-2">
          {['espresso', 'filtro', 'blend', 'origen'].map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox
                id={`cat-${cat}`}
                checked={selectedCategorias.includes(cat)}
                onCheckedChange={() => toggleCategoria(cat)}
              />
              <Label htmlFor={`cat-${cat}`} className="text-verde-profundo/70 capitalize cursor-pointer">
                {cat === 'origen' ? 'Origen Único' : cat}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-serif text-lg text-verde-profundo mb-3">Precio</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={Math.ceil(maxPrice)}
          step={5}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm text-verde-profundo/60">
          <span>{priceRange[0]}€</span>
          <span>{priceRange[1]}€</span>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={clearFilters}
          className="w-full border-verde-profundo/20"
        >
          <X className="h-4 w-4 mr-2" />
          Limpiar filtros
        </Button>
      )}
    </div>
  )

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-verde-profundo">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-blanco-menta mb-4">
            Nuestra Tienda
          </h1>
          <p className="text-blanco-menta/70 max-w-2xl mx-auto">
            Explora nuestra selección completa de cafés de especialidad. 
            Desde opciones para el hogar hasta soluciones profesionales para hostelería.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 bg-blanco-menta">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-verde-profundo/50" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-verde-profundo/20"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile Filters */}
              <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" className="border-verde-profundo/20">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filtros
                    {hasActiveFilters && (
                      <span className="ml-2 h-5 w-5 rounded-full bg-dorado text-verde-profundo text-xs flex items-center justify-center">
                        !
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                  <SheetHeader>
                    <SheetTitle className="font-serif text-verde-profundo">Filtros</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort */}
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-[180px] border-verde-profundo/20">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nombre-asc">Nombre A-Z</SelectItem>
                  <SelectItem value="nombre-desc">Nombre Z-A</SelectItem>
                  <SelectItem value="precio-asc">Precio menor</SelectItem>
                  <SelectItem value="precio-desc">Precio mayor</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="hidden sm:flex items-center gap-1 p-1 bg-verde-profundo/5 rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-verde-profundo text-blanco-menta' : ''}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-verde-profundo text-blanco-menta' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32 bg-white p-6 rounded-lg border border-verde-profundo/10">
                <h3 className="font-serif text-xl text-verde-profundo mb-6">Filtros</h3>
                <FilterContent />
              </div>
            </aside>

            {/* Products */}
            <div className="flex-1">
              {/* Results count */}
              <p className="text-sm text-verde-profundo/60 mb-6">
                Mostrando {filteredProducts.length} de {productos.length} productos
              </p>

              {filteredProducts.length > 0 ? (
                <div className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-4'
                }>
                  {filteredProducts.map((producto) => (
                    <ProductCard key={producto.id} producto={producto} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg border border-verde-profundo/10">
                  <p className="text-verde-profundo/60 text-lg mb-4">
                    No hay productos que coincidan con tu búsqueda
                  </p>
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="border-verde-profundo/20"
                  >
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
