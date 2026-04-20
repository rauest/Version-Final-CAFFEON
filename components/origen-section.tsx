import Image from 'next/image'

const stats = [
  { value: '+50', label: 'Fincas Aliadas' },
  { value: '100%', label: 'Trazabilidad' },
  { value: '+85', label: 'Puntos SCA' },
]

export function OrigenSection() {
  return (
    <section id="origen" className="py-24 bg-blanco-menta">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-dorado text-sm font-semibold uppercase tracking-wider mb-4">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-verde-profundo mb-6 text-balance">
              El Origen de Caffeon
            </h2>
            <div className="space-y-4 text-verde-profundo/70 leading-relaxed">
              <p>
                En las montañas de Colombia, donde el café crece entre la niebla y el sol tropical, 
                nació nuestra pasión. Caffeon surgió de la convicción de que el café de especialidad 
                merece un puente directo entre el caficultor y las mejores mesas del mundo.
              </p>
              <p>
                Cada grano que seleccionamos cuenta una historia: la de familias campesinas que 
                durante generaciones han perfeccionado el arte del cultivo, la del tueste artesanal 
                que desarrolla sabores únicos, y la de un compromiso inquebrantable con la calidad.
              </p>
              <p>
                Trabajamos directamente con más de 50 fincas certificadas, garantizando un comercio 
                justo que beneficia a las comunidades productoras mientras ofrecemos a nuestros 
                clientes un café con trazabilidad completa, desde la semilla hasta la taza.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-verde-profundo/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-dorado mb-1">{stat.value}</p>
                  <p className="text-verde-profundo/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80"
                alt="Caficultor colombiano en su finca"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-dorado/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-verde-profundo/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
