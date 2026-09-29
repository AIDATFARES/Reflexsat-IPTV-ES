import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  AlertTriangle,
  Clock,
  Tv,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { devicesList } from '../../../data/devicesData';

export function generateStaticParams() {
  return devicesList.map((device) => ({
    dispositivo: device.slug,
  }));
}

export function generateMetadata({ params }) {
  const device = devicesList.find((d) => d.slug === params.dispositivo);
  if (!device) return { title: 'Dispositivo no encontrado' };

  return {
    title: `Cómo Instalar IPTV en ${device.name} (Guía Paso a Paso 2026)`,
    description: `Aprende a configurar tu suscripción de Reflexsat IPTV en ${device.name}. Tutorial con aplicaciones recomendadas, requisitos y solución a cortes.`,
    alternates: {
      canonical: `https://www.reflexsat.es/instalacion/${device.slug}`,
    },
  };
}

export default function DispositivoInstalacionPage({ params }) {
  const device = devicesList.find((d) => d.slug === params.dispositivo);

  if (!device) {
    notFound();
  }

  // HowTo Schema JSON-LD
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Cómo Instalar y Configurar IPTV en ${device.name}`,
    description: device.shortDesc,
    totalTime: 'PT5M',
    step: device.steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.title,
      text: step.description,
    })),
  };

  const otherDevices = devicesList.filter((d) => d.slug !== device.slug).slice(0, 4);

  return (
    <div className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Guía de Instalación', href: '/instalacion' },
          { label: device.name, href: `/instalacion/${device.slug}` },
        ]}
      />

      {/* Main Header */}
      <div className="mb-12 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-spanish-red/10 text-spanish-redBright border border-spanish-red/20 uppercase tracking-widest">
            {device.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <Clock className="w-3.5 h-3.5 text-spanish-gold" />
            <span>Tiempo estimado: {device.estimatedTime}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Cómo Instalar IPTV en <span className="text-spanish-redBright">{device.name}</span>
        </h1>
        <div className="w-20 h-1 spanish-flag-line" />
        <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
          {device.shortDesc} Sigue los pasos que detallamos a continuación para conectar tu servicio de <strong>Reflexsat IPTV</strong> y disfrutar de canales 4K sin complicaciones.
        </p>
      </div>

      {/* Quick Specs & Requirements Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-spanish-gold" />
            <span>Requisitos Previos</span>
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {device.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-spanish-redBright font-bold">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Tv className="w-5 h-5 text-spanish-redBright" />
            <span>Aplicaciones Recomendadas</span>
          </h2>
          <div className="flex flex-wrap gap-2 pt-1">
            {device.recommendedApps.map((app, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-200"
              >
                {app}
              </span>
            ))}
          </div>
          <div className="pt-2 text-xs text-gray-400">
            <strong>Métodos soportados:</strong> {device.connectionMethods.join(', ')}
          </div>
        </div>
      </div>

      {/* Step by Step Guide */}
      <div className="space-y-8 mb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Pasos de Instalación en {device.name}
        </h2>

        <div className="space-y-6">
          {device.steps.map((step) => (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-spanish-red to-spanish-gold text-white font-black text-xl flex items-center justify-center flex-shrink-0 shadow-glow-red">
                {step.number}
              </div>
              <div className="space-y-2 flex-grow">
                <h3 className="text-lg font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Troubleshooting Section */}
      {device.troubleshooting && device.troubleshooting.length > 0 && (
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/20 mb-16 space-y-4 bg-dark-900/60">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-spanish-gold" />
            <span>Solución de Problemas y Consejos de Rendimiento</span>
          </h2>
          <ul className="space-y-3 text-sm text-gray-300">
            {device.troubleshooting.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-spanish-gold mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Device FAQs */}
      {device.faqs && device.faqs.length > 0 && (
        <div className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Preguntas Frecuentes sobre {device.name}
          </h2>
          <div className="space-y-4">
            {device.faqs.map((faq, idx) => (
              <div key={idx} className="glass-card rounded-xl p-5 border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Devices Quick Links */}
      <div className="border-t border-white/10 pt-12 mb-16">
        <h2 className="text-xl font-bold text-white mb-6">Otras Guías de Instalación Disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {otherDevices.map((od) => (
            <Link
              key={od.slug}
              href={`/instalacion/${od.slug}`}
              className="glass-card p-4 rounded-xl border border-white/5 hover:border-spanish-red/40 transition-all flex items-center justify-between group"
            >
              <span className="text-xs font-bold text-gray-200 group-hover:text-white line-clamp-1">
                {od.name}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-spanish-redBright flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Bottom Card */}
      <div className="glass-card rounded-2xl p-8 border border-spanish-red/30 text-center space-y-4 bg-gradient-to-b from-dark-900 to-dark-950">
        <h2 className="text-2xl font-bold text-white">
          ¿Aún no tienes tu suscripción de Reflexsat IPTV?
        </h2>
        <p className="text-sm text-gray-300 max-w-lg mx-auto">
          Elige tu plan hoy mismo y recibe tus datos de conexión en 5 minutos para activar tu televisor.
        </p>
        <div className="pt-2">
          <Link
            href="/planes"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-spanish-red to-spanish-redBright shadow-glow-red hover:shadow-lg transition-all"
          >
            <span>Ver planes y contratar ahora</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
