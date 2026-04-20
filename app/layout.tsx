import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { CartProvider } from '@/context/cart-context'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CAFFEON | Café de Especialidad Colombiano',
  description: 'Café premium 100% arábica colombiano para negocios que valoran la calidad y autenticidad. Del origen a la mesa, trazabilidad completa desde la finca hasta tu negocio.',
  keywords: ['café colombiano', 'café de especialidad', 'café premium', 'café B2B', 'café para restaurantes', 'café gourmet', 'café arábica'],
  authors: [{ name: 'CAFFEON' }],
  creator: 'CAFFEON',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://caffeon.es',
    title: 'CAFFEON | Café de Especialidad Colombiano',
    description: 'Café premium 100% arábica colombiano para negocios que valoran la calidad y autenticidad.',
    siteName: 'CAFFEON',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAFFEON | Café de Especialidad Colombiano',
    description: 'Café premium 100% arábica colombiano para negocios que valoran la calidad y autenticidad.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} bg-blanco-menta`}>
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1a3a2f',
                color: '#f5fff9',
                border: '1px solid #b68c2d',
              },
            }}
          />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
