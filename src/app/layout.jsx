import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://www.reflexsat.es'),
  title: {
    default: 'Reflexsat IPTV España — Suscripción IPTV Premium 4K Sin Cortes 2026',
    template: '%s | Reflexsat IPTV España',
  },
  description:
    'Suscripción IPTV Premium en España con más de 35.000 canales en directo 4K/HD, 90.000 películas y series VOD, todo el deporte en directo y activación en 5 minutos. Servidores estables sin cortes. Garantía de 7 días.',
  keywords: [
    'IPTV España',
    'mejor IPTV España',
    'suscripción IPTV',
    'servicio IPTV',
    'canales IPTV',
    'IPTV Smart TV',
    'IPTV Samsung',
    'IPTV LG',
    'IPTV Fire TV Stick',
    'IPTV Android TV',
    'IPTV España 2026',
    'cómo instalar IPTV',
    'lista IPTV',
  ],
  authors: [{ name: 'Reflexsat IPTV' }],
  creator: 'Reflexsat IPTV',
  publisher: 'Reflexsat IPTV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.reflexsat.es/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.reflexsat.es/',
    siteName: 'Reflexsat IPTV',
    title: 'Reflexsat IPTV España — Suscripción IPTV Premium 4K Sin Cortes',
    description:
      'Disfruta de más de 35.000 canales en 4K/HD, fútbol en directo, 90.000 VOD y servidores dedicados en España. Activación en 5 minutos. Garantía 7 días.',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Reflexsat IPTV España',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reflexsat IPTV España — Suscripción IPTV Premium 4K',
    description:
      'Más de 35.000 canales en directo, fútbol y cine en 4K. Servidores ultra estables en España y Europa.',
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  // Organization Structured Data JSON-LD
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Reflexsat IPTV',
    url: 'https://www.reflexsat.es',
    logo: 'https://www.reflexsat.es/images/logo.svg',
    description:
      'Proveedor de suscripción IPTV premium en España con canales 4K/HD y catálogo VOD bajo demanda.',
    areaServed: [
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'AdministrativeArea', name: 'Europe' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['Spanish', 'English'],
      url: 'https://www.reflexsat.es/contacto',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Reflexsat IPTV',
    url: 'https://www.reflexsat.es',
    inLanguage: 'es-ES',
    description:
      'Servicio de televisión por Internet (IPTV) de alta fidelidad para el mercado español y europeo.',
  };

  return (
    <html lang="es" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-dark-900 text-white selection:bg-spanish-red selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
