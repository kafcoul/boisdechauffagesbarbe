import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BOIS DE CHAUFFAGE BARBE | Commerce de Bois et Matériaux - Québec',
  description: 'BOIS DE CHAUFFAGE BARBE - Commerce de détail de bois et de matériaux de construction. Achat de bois en longueur et transformation. Vente de bois de chauffage premium à Québec.',
  keywords: 'bois de chauffage, commerce détail bois, matériaux construction, transformation bois, érable, bouleau, frêne, livraison bois, Québec, Barbe',
  authors: [{ name: 'BOIS DE CHAUFFAGE BARBE' }],
  openGraph: {
    title: 'BOIS DE CHAUFFAGE BARBE | Commerce de Bois et Matériaux - Québec',
    description: 'Commerce de détail de bois et matériaux de construction. Achat, transformation et vente de bois de chauffage premium.',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'BOIS DE CHAUFFAGE BARBE',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-CA" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
