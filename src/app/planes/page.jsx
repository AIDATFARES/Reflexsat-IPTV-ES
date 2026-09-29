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
import PricingCard from '../../components/PricingCard';
import FaqAccordion from '../../components/FaqAccordion';
import { singleScreenPlans, multiScreenPlans } from '../../data/pricingData';
import { allFaqs } from '../../data/faqData';

export default function PlanesPage() {
  const [activeTab, setActiveTab] = useState('single'); // 'single' or 'multi'

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
        price: '29.00',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
        url: 'https://www.reflexsat.es/planes',
      },
      {
        '@type': 'Offer',
        name: 'Plan 6 Meses',
        price: '39.00',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
        url: 'https://www.reflexsat.es/planes',
      },
      {
        '@type': 'Offer',
        name: 'Plan 12 Meses',
        price: '49.00',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
        url: 'https://www.reflexsat.es/planes',
      },
    ],
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Breadcrumbs items={[{ label: 'Planes y Precios', href: '/planes' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold bg-spanish-red/10 text-spanish-redBright border border-spanish-red/20 uppercase tracking-widest">
          Tarifas Transparentes 2026
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Planes de Suscripción <span className="text-transparent bg-clip-text bg-gradient-to-r from-spanish-red via-spanish-redBright to-spanish-gold">Reflexsat IPTV</span>
        </h1>
        <div className="w-24 h-1 spanish-flag-line mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Sin contratos de permanencia, sin cuotas ocultas y con activación en 5 minutos. Disfruta de la mejor televisión en tu hogar con la <strong>garantía de devolución incondicional de 7 días</strong>.
        </p>

        {/* Plan Switcher Tab */}
        <div className="pt-6 flex justify-center">
          <div className="p-1.5 rounded-2xl bg-dark-950 border border-white/10 flex items-center gap-1 shadow-glass">
            <button
              type="button"
              onClick={() => setActiveTab('single')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'single'
                  ? 'bg-gradient-to-r from-spanish-red to-spanish-redBright text-white shadow-glow-red'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              1 Pantalla (Individual)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('multi')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'multi'
                  ? 'bg-gradient-to-r from-spanish-red to-spanish-redBright text-white shadow-glow-red'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Multi-Pantallas (Familiar) 👨‍👩‍👧
            </button>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-20">
        {activeTab === 'single'
          ? singleScreenPlans.map((plan) => <PricingCard key={plan.id} plan={plan} />)
          : multiScreenPlans.map((plan) => <PricingCard key={plan.id} plan={plan} />)}
      </div>

      {/* Value Proposition Highlights */}
      <div className="glass-card rounded-2xl p-8 border border-white/10 mb-20">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
          Todo lo incluido en tu suscripción Reflexsat IPTV
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-3">
            <div className="font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-spanish-gold" />
              <span>Calidad y Servidores</span>
            </div>
            <ul className="space-y-2 text-gray-400">
              <li>• Calidad adaptable SD, HD, Full HD y 4K UHD.</li>
              <li>• Redundancia europea anti-congelación 99.9%.</li>
              <li>• Sin bloqueos geográficos en España y Europa.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-bold text-white flex items-center gap-2">
              <Tv className="w-5 h-5 text-spanish-redBright" />
              <span>Contenidos y Guía</span>
            </div>
            <ul className="space-y-2 text-gray-400">
              <li>• Más de 35.000 canales en directo ordenados.</li>
              <li>• Catálogo VOD de +120.000 películas y series.</li>
              <li>• Guía electrónica de programación EPG completa.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>Garantía y Asistencia</span>
            </div>
            <ul className="space-y-2 text-gray-400">
              <li>• 7 días de garantía total de satisfacción o reembolso.</li>
              <li>• Soporte técnico prioritario 24/7 en español.</li>
              <li>• Asistencia paso a paso para la instalación en tu TV.</li>
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
        <h3 className="text-lg font-bold text-white mb-2">¿Tienes alguna duda sobre qué plan elegir?</h3>
        <p className="text-sm text-gray-400 mb-4">
          Nuestro equipo de atención al cliente en España te asesora de forma personalizada en minutos.
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
