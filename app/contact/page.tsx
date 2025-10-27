import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contactez-nous - Commandez Votre Bois | Bois de Chauffage Barbe',
  description: 'Contactez Bois de Chauffage Barbe pour commander votre bois de chauffage ou poser vos questions. Téléphone: (418) 555-1234. Formulaire en ligne disponible 24/7.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
