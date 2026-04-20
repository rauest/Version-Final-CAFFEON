import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Información Legal | CAFFEON',
  description: 'Aviso legal, política de privacidad, cookies y términos de uso de CAFFEON.',
}

const sections = [
  { id: 'aviso-legal', title: 'Aviso Legal' },
  { id: 'privacidad', title: 'Política de Privacidad' },
  { id: 'cookies', title: 'Política de Cookies' },
  { id: 'terminos', title: 'Condiciones de Compra' },
]

export default function LegalesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-verde-profundo">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-blanco-menta mb-4">
            Información Legal
          </h1>
          <p className="text-blanco-menta/70 max-w-2xl mx-auto">
            Transparencia y confianza son valores fundamentales de Caffeon. 
            Aquí encontrarás toda la información legal relevante.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-20 z-40 bg-blanco-menta border-b border-verde-profundo/10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 py-4 overflow-x-auto">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-verde-profundo/70 hover:text-dorado transition-colors whitespace-nowrap"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="py-16 bg-blanco-menta">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Aviso Legal */}
          <section id="aviso-legal" className="mb-16 scroll-mt-40">
            <h2 className="font-serif text-3xl text-verde-profundo mb-6 pb-4 border-b border-verde-profundo/10">
              Aviso Legal
            </h2>
            
            <div className="prose prose-lg max-w-none text-verde-profundo/80">
              <div className="bg-dorado/10 border border-dorado/30 rounded-lg p-6 mb-8">
                <h3 className="font-serif text-xl text-verde-profundo mt-0 mb-3">Proyecto Académico</h3>
                <p className="mb-0">
                  Esta plataforma de comercio electrónico constituye un <strong>PROYECTO ACADÉMICO</strong> desarrollado 
                  con fines exclusivamente educativos. La marca, productos, servicios y entidad comercial presentados 
                  en este sitio web son completamente ficticios y han sido creados con propósitos didácticos.
                </p>
              </div>

              <h3 className="font-serif text-xl text-verde-profundo">Datos Identificativos</h3>
              <ul>
                <li><strong>Responsable:</strong> CAFFEON.ES</li>
                <li><strong>Nombre comercial:</strong> CAFFEON</li>
                <li><strong>Domicilio social:</strong> Bogotá, Colombia, 110110</li>
                <li><strong>Email de contacto:</strong> caffeon.oficial@contacto.com</li>
              </ul>

              <h3 className="font-serif text-xl text-verde-profundo">Aceptación del Aviso Legal</h3>
              <p>
                El acceso y uso del Sitio Web atribuye la condición de Usuario a toda persona que navegue 
                por el mismo e implica la aceptación plena y sin reservas del presente Aviso Legal, así como 
                de la Política de Privacidad y las Condiciones de Compra que resulten aplicables.
              </p>

              <h3 className="font-serif text-xl text-verde-profundo">Condiciones de Uso</h3>
              <p>
                El Usuario se compromete a utilizar el Sitio Web de forma diligente, responsable y conforme 
                a la ley, la moral, el orden público y el presente Aviso Legal. Para el uso de los servicios 
                ofrecidos es necesario ser mayor de 14 años.
              </p>

              <h3 className="font-serif text-xl text-verde-profundo">Propiedad Intelectual</h3>
              <p>
                Todos los contenidos del Sitio Web, incluyendo textos, imágenes, diseños, logotipos, marcas 
                y cualquier otro material, están protegidos por la normativa vigente en materia de propiedad 
                intelectual e industrial. Queda expresamente prohibida su reproducción sin autorización previa.
              </p>
            </div>
          </section>

          {/* Política de Privacidad */}
          <section id="privacidad" className="mb-16 scroll-mt-40">
            <h2 className="font-serif text-3xl text-verde-profundo mb-6 pb-4 border-b border-verde-profundo/10">
              Política de Privacidad
            </h2>
            
            <div className="prose prose-lg max-w-none text-verde-profundo/80">
              <h3 className="font-serif text-xl text-verde-profundo">Responsable del Tratamiento</h3>
              <p>
                CAFFEON.ES es responsable de garantizar la protección y el uso adecuado de los datos personales 
                de los usuarios, conforme al Reglamento (UE) 2016/679 (RGPD) y la normativa vigente.
              </p>

              <h3 className="font-serif text-xl text-verde-profundo">Finalidades del Tratamiento</h3>
              <ul>
                <li>Gestionar las consultas o solicitudes realizadas a través del formulario de contacto</li>
                <li>Permitir el registro de usuarios en la plataforma</li>
                <li>Gestionar los procesos de compra, pago y entrega de productos</li>
                <li>Enviar comunicaciones comerciales (con consentimiento previo)</li>
                <li>Gestionar la suscripción a la newsletter</li>
                <li>Mejorar la experiencia del usuario mediante análisis de navegación</li>
              </ul>

              <h3 className="font-serif text-xl text-verde-profundo">Tipos de Datos Recogidos</h3>
              <ul>
                <li><strong>Datos identificativos:</strong> nombre y apellidos</li>
                <li><strong>Datos de contacto:</strong> correo electrónico, dirección postal</li>
                <li><strong>Datos de registro:</strong> nombre de usuario y credenciales de acceso</li>
                <li><strong>Datos de compra:</strong> información de facturación y envío</li>
                <li><strong>Datos de navegación:</strong> dirección IP, dispositivo, páginas visitadas</li>
              </ul>

              <h3 className="font-serif text-xl text-verde-profundo">Derechos de los Usuarios</h3>
              <p>Los usuarios tienen derecho a:</p>
              <ul>
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos o incompletos</li>
                <li>Suprimir sus datos cuando ya no sean necesarios</li>
                <li>Limitar u oponerse al tratamiento</li>
                <li>Solicitar la portabilidad de sus datos</li>
                <li>Retirar el consentimiento en cualquier momento</li>
              </ul>

              <h3 className="font-serif text-xl text-verde-profundo">Ejercicio de Derechos</h3>
              <p>
                Para ejercer sus derechos, envíe una solicitud a <strong>caffeon.oficial@contacto.com</strong> incluyendo 
                nombre completo, copia de documento identificativo y derecho que desea ejercer.
              </p>
            </div>
          </section>

          {/* Política de Cookies */}
          <section id="cookies" className="mb-16 scroll-mt-40">
            <h2 className="font-serif text-3xl text-verde-profundo mb-6 pb-4 border-b border-verde-profundo/10">
              Política de Cookies
            </h2>
            
            <div className="prose prose-lg max-w-none text-verde-profundo/80">
              <h3 className="font-serif text-xl text-verde-profundo">¿Qué son las Cookies?</h3>
              <p>
                Las cookies son pequeños archivos de texto que se descargan en el dispositivo del usuario 
                cuando visita un sitio web. Permiten al sitio recordar información sobre la navegación, 
                como preferencias o acciones anteriores.
              </p>

              <h3 className="font-serif text-xl text-verde-profundo">Tipos de Cookies Utilizadas</h3>
              
              <h4 className="font-semibold text-verde-profundo mt-4">Cookies Técnicas (Necesarias)</h4>
              <p>
                Imprescindibles para el correcto funcionamiento del sitio. Permiten la navegación, 
                acceso a áreas seguras, gestión del carrito de compra y configuración de preferencias básicas.
              </p>

              <h4 className="font-semibold text-verde-profundo mt-4">Cookies Analíticas</h4>
              <p>
                Permiten recopilar información sobre cómo los usuarios utilizan el sitio (páginas visitadas, 
                tiempo de navegación). Esta información es anónima y se utiliza para mejorar el funcionamiento.
              </p>

              <h3 className="font-serif text-xl text-verde-profundo">Tabla de Cookies</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-verde-profundo/20">
                  <thead className="bg-verde-profundo/5">
                    <tr>
                      <th className="px-4 py-2 text-left border-b border-verde-profundo/20">Nombre</th>
                      <th className="px-4 py-2 text-left border-b border-verde-profundo/20">Tipo</th>
                      <th className="px-4 py-2 text-left border-b border-verde-profundo/20">Duración</th>
                      <th className="px-4 py-2 text-left border-b border-verde-profundo/20">Finalidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">cookie_session</td>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">Técnica</td>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">Sesión</td>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">Mantener sesión</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">carrito_compra</td>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">Técnica</td>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">Sesión</td>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">Gestión carrito</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">_ga</td>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">Analítica</td>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">2 años</td>
                      <td className="px-4 py-2 border-b border-verde-profundo/10">Google Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-serif text-xl text-verde-profundo mt-6">Gestión de Cookies</h3>
              <p>
                Puedes gestionar las cookies a través del banner de cookies del sitio o desde la 
                configuración de tu navegador. Consulta <a href="https://www.allaboutcookies.org" 
                target="_blank" rel="noopener noreferrer" className="text-dorado hover:text-dorado/80">
                allaboutcookies.org</a> para más información.
              </p>
            </div>
          </section>

          {/* Condiciones de Compra */}
          <section id="terminos" className="mb-16 scroll-mt-40">
            <h2 className="font-serif text-3xl text-verde-profundo mb-6 pb-4 border-b border-verde-profundo/10">
              Condiciones de Compra
            </h2>
            
            <div className="prose prose-lg max-w-none text-verde-profundo/80">
              <h3 className="font-serif text-xl text-verde-profundo">Objeto</h3>
              <p>
                Las presentes Condiciones de Compra regulan la adquisición de productos ofrecidos por 
                CAFFEON a través de su Sitio Web, incluyendo café, productos de merchandising y otros 
                servicios vinculados a la experiencia de marca.
              </p>

              <h3 className="font-serif text-xl text-verde-profundo">Usuarios</h3>
              <p>
                Podrán realizar compras aquellas personas físicas mayores de 14 años con capacidad legal 
                suficiente. Los menores de edad actúan bajo la supervisión de sus representantes legales.
              </p>

              <h3 className="font-serif text-xl text-verde-profundo">Precios y Formas de Pago</h3>
              <p>
                Los precios mostrados incluyen los impuestos aplicables según la normativa vigente. 
                CAFFEON se reserva el derecho de modificar los precios en cualquier momento, siendo 
                aplicables los vigentes en el momento de la confirmación del pedido.
              </p>
              <p><strong>Métodos de pago aceptados:</strong></p>
              <ul>
                <li>Tarjeta de crédito o débito</li>
                <li>Apple Pay y Google Pay</li>
                <li>Otros medios habilitados en el Sitio Web</li>
              </ul>

              <h3 className="font-serif text-xl text-verde-profundo">Proceso de Compra</h3>
              <ol>
                <li>Selección de productos deseados</li>
                <li>Revisión del pedido en el carrito</li>
                <li>Confirmación de la compra y aceptación de la obligación de pago</li>
                <li>Recepción de confirmación electrónica con el resumen de la compra</li>
              </ol>

              <h3 className="font-serif text-xl text-verde-profundo">Envíos</h3>
              <ul>
                <li><strong>Península:</strong> 24-48 horas laborables</li>
                <li><strong>Canarias y Baleares:</strong> 3-5 días laborables</li>
                <li><strong>Envío gratuito:</strong> en pedidos superiores a 40€ (península)</li>
              </ul>

              <h3 className="font-serif text-xl text-verde-profundo">Derecho de Desistimiento</h3>
              <p>
                De conformidad con la legislación aplicable, el derecho de desistimiento no será aplicable 
                a productos perecederos, productos personalizados o aquellos que por su naturaleza no puedan 
                ser devueltos. En caso de error en el pedido, CAFFEON ofrecerá una solución alternativa o 
                reembolso correspondiente.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  )
}
