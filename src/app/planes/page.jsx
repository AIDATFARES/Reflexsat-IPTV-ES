'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Zap,
  Lock,
  Tv,
  HelpCircle,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import PricingPlansSection from '../../components/PricingPlansSection';
import FaqAccordion from '../../components/FaqAccordion';
import { allFaqs } from '../../data/faqData';

export default function PlanesPage() {

  // Relevant FAQs for subscription page
  const subscriptionFaqs = allFaqs.filter((f) => f.category === 'suscripcion' || f.category === 'general').slice(0, 5);

  // Product Schema JSON-LD
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Suscripción Reflexsat IPTV España',
    description:
      'Suscripción IPTV Premium en España con más de 35.000 canales 4K/HD y 120.000 títulos VOD sin cortes.',
    brand: {
      '@type': 'Brand',
      name: 'Reflexsat IPTV',
    },
    url: 'https://www.reflexsat.es/planes',
    offers: [
      {
        '@type': 'Offer',
        name: 'Plan 3 Meses',
        price: '30.00',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
        url: 'https://www.reflexsat.es/planes',
      },
      {
        '@type': 'Offer',
        name: 'Plan 6 Meses',
        price: '45.00',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
        url: 'https://www.reflexsat.es/planes',
      },
      {
        '@type': 'Offer',
        name: 'Plan 12 Meses',
        price: '60.00',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
        url: 'https://www.reflexsat.es/planes',
      },
    ],
  };

  return (
    <div className="pt-4 pb-12 sm:pt-6 sm:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Breadcrumbs items={[{ label: 'Planes y Precios', href: '/planes' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold bg-spanish-red/10 text-spanish-redBright border border-spanish-red/20 uppercase tracking-widest">
          Tarifas Transparentes 2026
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Planes de Suscripción <span className="text-transparent bg-clip-text bg-gradient-to-r from-spanish-red via-spanish-redBright to-spanish-gold">Reflexsat IPTV</span>
        </h1>
        <div className="w-24 h-1 spanish-flag-line mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Sin contratos de permanencia ni cuotas ocultas. Activación exprés en 5 minutos compatible con <Link href="/dispositivos" className="text-spanish-gold font-semibold hover:underline">todos tus dispositivos</Link> mediante nuestras <Link href="/instalacion" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">guías paso a paso</Link>. Respaldado por nuestra <Link href="/politica-de-reembolso" className="text-spanish-gold font-bold hover:underline">garantía de devolución de 7 días</Link> o solicita tu <Link href="/contacto?plan=prueba-gratis" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">prueba gratuita</Link>.
        </p>
      </div>

      {/* Plans Section with Device Tabs */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Elige tu Plan de Suscripción IPTV
          </h2>
        </div>
        <PricingPlansSection defaultDevices={1} />
      </div>

      {/* Value Proposition Highlights */}
      <div className="glass-card rounded-2xl p-8 border border-white/10 mb-20">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
          Todo lo incluido en tu suscripción Reflexsat IPTV
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-3">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-spanish-gold" />
              <span>Calidad y Servidores</span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Calidad adaptable SD, HD, Full HD y 4K UHD.</li>
              <li>• Redundancia europea anti-congelación 99.9%.</li>
              <li>• Sin bloqueos geográficos en España y Europa.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Tv className="w-5 h-5 text-spanish-redBright" />
              <span>Contenidos y Guía</span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Más de 35.000 canales en directo ordenados.</li>
              <li>• Catálogo VOD de +120.000 películas y series.</li>
              <li>• Guía electrónica de programación EPG completa.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>Garantía y Asistencia</span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>• 7 días de <Link href="/politica-de-reembolso" className="text-gray-300 hover:text-spanish-gold underline">garantía total de satisfacción o reembolso</Link>.</li>
              <li>• Soporte técnico prioritario 24/7 en español a través de <Link href="/contacto" className="text-gray-300 hover:text-spanish-gold underline">contacto directo</Link>.</li>
              <li>• Asistencia paso a paso para la <Link href="/instalacion" className="text-gray-300 hover:text-spanish-gold underline">instalación en tu televisor</Link>.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Subscription FAQ Accordion */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Preguntas Frecuentes sobre la Contratación
        </h2>
        <FaqAccordion items={subscriptionFaqs} includeSchema={false} />
      </div>

      {/* Direct Contact Banner */}
      <div className="text-center p-8 rounded-2xl bg-dark-950 border border-white/10 max-w-2xl mx-auto">
        <h2 className="text-lg font-bold text-white mb-2">¿Tienes alguna duda sobre qué plan elegir?</h2>
        <p className="text-sm text-gray-400 mb-4">
          Nuestro equipo de atención al cliente en España te asesora de forma personalizada en minutos o puedes resolver dudas en nuestras <Link href="/faq" className="text-spanish-gold hover:underline">preguntas frecuentes</Link>.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 text-sm font-bold text-spanish-gold hover:underline"
        >
          <span>Escríbenos a través del formulario de contacto →</span>
        </Link>
      </div>
    </div>
  );
}
