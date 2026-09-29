import Link from 'next/link';
import {
  Mail,
  Clock,
  Zap,
  ShieldCheck,
  MessageCircle,
  HelpCircle,
  Tv,
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contacto y Soporte Técnico — Reflexsat IPTV España',
  description:
    'Contacta con el equipo de soporte oficial de Reflexsat IPTV en España. Atención al cliente 24/7 en español para consultas sobre planes, activación y resolución de dudas.',
  alternates: {
    canonical: 'https://www.reflexsat.es/contacto',
  },
};

export default function ContactoPage({ searchParams }) {
  const planParam = searchParams?.plan || '';

  return (
    <div className="pt-4 pb-12 sm:pt-6 sm:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Contacto y Soporte', href: '/contacto' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold bg-spanish-red/10 text-spanish-redBright border border-spanish-red/20 uppercase tracking-widest">
          Atención al Cliente en España
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Contacto y Soporte <span className="text-transparent bg-clip-text bg-gradient-to-r from-spanish-red via-spanish-redBright to-spanish-gold">Reflexsat IPTV</span>
        </h1>
        <div className="w-24 h-1 spanish-flag-line mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          ¿Tienes alguna duda sobre la compatibilidad de tu televisor, formas de pago o activación? Rellena el formulario o consulta nuestras guías de ayuda directa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
        {/* Left Column: Contact Information & Support Guarantees */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Canales de Asistencia Directa
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-spanish-gold/10 border border-spanish-gold/20 flex items-center justify-center text-spanish-gold flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Disponibilidad del Servicio</div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Lunes a Domingo — 24 horas ininterrumpidas
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-spanish-red/10 border border-spanish-red/20 flex items-center justify-center text-spanish-redBright flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Tiempo de Respuesta Habitual</div>
                  <div className="text-xs text-spanish-gold font-semibold mt-0.5">
                    Menos de 10 minutos (Vía WhatsApp o Email)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Activación Exprés</div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Envío automático de usuario, contraseña y enlace M3U
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Support Card */}
          <a
            href="https://wa.me/447882781998?text=Hola%20Reflexsat%20IPTV,%20deseo%20asistencia%20inmediata"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-2xl bg-gradient-to-r from-[#25D366]/20 via-[#25D366]/10 to-transparent border border-[#25D366]/40 hover:border-[#25D366] transition-all group shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-white text-base flex items-center gap-2">
                    <span>Soporte por WhatsApp</span>
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  </div>
                  <div className="text-xs text-gray-300 font-mono mt-0.5">+44 7882 781998</div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/20 px-3 py-1.5 rounded-lg group-hover:bg-[#25D366] group-hover:text-white transition-all">
                Chatear ahora →
              </span>
            </div>
          </a>

          {/* Quick Help Navigation Box */}
          <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 bg-dark-900/60">
            <h3 className="text-base font-bold text-white">¿Buscas una solución rápida?</h3>
            <div className="space-y-2.5 text-xs">
              <Link
                href="/faq"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-gray-200"
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-spanish-gold" />
                  <span>Consultar Preguntas Frecuentes</span>
                </span>
                <span>→</span>
              </Link>

              <Link
                href="/instalacion"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-gray-200"
              >
                <span className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-spanish-redBright" />
                  <span>Ver Guías de Instalación por Dispositivo</span>
                </span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <ContactForm defaultPlan={planParam} />
        </div>
      </div>
    </div>
  );
}
