import Link from 'next/link'
import { Instagram, Linkedin, Facebook, Youtube, Mail, Phone } from 'lucide-react'

const footerLinks = {
  empresa: [
    { label: 'Nuestra Historia', href: '#origen' },
    { label: 'Sostenibilidad', href: '#sostenibilidad' },
    { label: 'Caffeon Stories', href: '#stories' },
    { label: 'Contacto', href: '#contacto' },
  ],
  productos: [
    { label: 'Línea Particular', href: '#productos' },
    { label: 'Línea Profesional', href: '#productos' },
    { label: 'Packs', href: '#productos' },
    { label: 'Club Caffeon', href: '#club' },
  ],
  soporte: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Métodos de Pago', href: '/legales#pago' },
    { label: 'Envíos', href: '/legales#envios' },
    { label: 'Devoluciones', href: '/legales#devoluciones' },
  ],
  legal: [
    { label: 'Aviso Legal', href: '/legales#aviso-legal' },
    { label: 'Política de Privacidad', href: '/legales#privacidad' },
    { label: 'Política de Cookies', href: '/legales#cookies' },
    { label: 'Términos y Condiciones', href: '/legales#terminos' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/caffeon_oficial', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/caffeon', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/caffeon', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com/@caffeon', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="bg-verde-profundo text-blanco-menta">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-3xl tracking-widest">
                COFFE<span className="text-dorado">O</span>N
              </span>
            </Link>
            <p className="text-blanco-menta/70 text-sm leading-relaxed mb-6 max-w-xs">
              Café de especialidad colombiano 100% arábica. Del origen a la mesa, 
              trazabilidad completa desde la finca hasta tu negocio.
            </p>
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blanco-menta/10 hover:bg-dorado/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-dorado text-sm tracking-wider">@caffeon_oficial</p>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-dorado">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blanco-menta/70 hover:text-dorado transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-dorado">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blanco-menta/70 hover:text-dorado transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-dorado">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blanco-menta/70 hover:text-dorado transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-dorado">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blanco-menta/70 hover:text-dorado transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-blanco-menta/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="mailto:hola@caffeon.es"
                className="flex items-center gap-2 text-blanco-menta/70 hover:text-dorado transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                hola@caffeon.es
              </a>
              <a
                href="tel:+34900123456"
                className="flex items-center gap-2 text-blanco-menta/70 hover:text-dorado transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                +34 900 123 456
              </a>
            </div>
            <p className="text-blanco-menta/50 text-xs">
              Horario de atención: L-V 9:00 - 18:00
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-blanco-menta/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blanco-menta/50 text-xs">
              © 2025 Caffeon. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/legales#privacidad"
                className="text-blanco-menta/50 hover:text-dorado transition-colors text-xs"
              >
                Privacidad
              </Link>
              <Link
                href="/legales#cookies"
                className="text-blanco-menta/50 hover:text-dorado transition-colors text-xs"
              >
                Cookies
              </Link>
              <Link
                href="/legales#terminos"
                className="text-blanco-menta/50 hover:text-dorado transition-colors text-xs"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
