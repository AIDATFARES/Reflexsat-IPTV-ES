import Link from 'next/link';
import {
  Tv,
  Flame,
  Smartphone,
  Monitor,
  Box,
  Tablet,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Zap,
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { devicesList } from '../../data/devicesData';

export const metadata = {
  title: 'Guía de Instalación IPTV España 2026 — Smart TV, Fire Stick, Android y Apple',
  description:
    'Tutoriales completos de instalación de IPTV en España paso a paso. Configura tu suscripción Reflexsat en Samsung, LG, Amazon Fire TV, Android TV, iPhone, PC o MAG en 5 minutos.',
  alternates: {
    canonical: 'https://www.reflexsat.es/instalacion',
  },
};

export default function InstalacionIndexPage() {
  const getIcon = (name) => {
    switch (name) {
      case 'Tv':
        return <Tv className="w-6 h-6 text-spanish-gold" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-spanish-redBright" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-spanish-gold" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-spanish-redBright" />;
      case 'Tablet':
        return <Tablet className="w-6 h-6 text-spanish-gold" />;
      case 'Box':
        return <Box className="w-6 h-6 text-spanish-redBright" />;
      default:
        return <Tv className="w-6 h-6 text-spanish-gold" />;
    }
  };

  return (
    <div className="pt-4 pb-12 sm:pt-6 sm:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Guía de Instalación', href: '/instalacion' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold bg-spanish-gold/10 text-spanish-gold border border-spanish-gold/20 uppercase tracking-widest">
          Centro de Configuración y Soporte
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Guía de Instalación <span className="text-transparent bg-clip-text bg-gradient-to-r from-spanish-red via-spanish-redBright to-spanish-gold">IPTV en España</span>
        </h1>
        <div className="w-24 h-1 spanish-flag-line mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Selecciona tu dispositivo a continuación para acceder al tutorial paso a paso con las mejores aplicaciones de reproducción, ajustes de aceleración y soluciones a dudas frecuentes. Si todavía no dispones de acceso activo, consulta nuestros <Link href="/planes" className="text-spanish-gold font-bold hover:underline">planes de suscripción IPTV</Link> o solicita una <Link href="/contacto?plan=prueba-gratis" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">prueba gratuita</Link>.
        </p>
      </div>

      {/* General 4-Step Summary Banner */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 mb-16">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-spanish-gold" />
          <span>Proceso general de conexión en 4 pasos</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div className="bg-dark-900/60 p-4 rounded-xl border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-full bg-spanish-red/20 text-spanish-redBright font-black flex items-center justify-center text-xs">
              1
            </div>
            <div className="font-bold text-white">Contratar tu plan</div>
            <p className="text-xs text-gray-400">
              Elige tu <Link href="/planes" className="text-spanish-gold underline hover:text-white">suscripción IPTV</Link> y recibe tus claves al instante por email y WhatsApp.
            </p>
          </div>

          <div className="bg-dark-900/60 p-4 rounded-xl border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-full bg-spanish-gold/20 text-spanish-gold font-black flex items-center justify-center text-xs">
              2
            </div>
            <div className="font-bold text-white">Descargar el reproductor</div>
            <p className="text-xs text-gray-400">
              Instala <Link href="/blog/guia-instalar-iptv-smarters-pro-smart-tv" className="text-spanish-gold underline hover:text-white">IPTV Smarters Pro</Link>, <Link href="/blog/guia-configuracion-tivimate-espana" className="text-spanish-gold underline hover:text-white">TiviMate</Link> o la app de tu sistema.
            </p>
          </div>

          <div className="bg-dark-900/60 p-4 rounded-xl border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-full bg-spanish-red/20 text-spanish-redBright font-black flex items-center justify-center text-xs">
              3
            </div>
            <div className="font-bold text-white">Introducir credenciales</div>
            <p className="text-xs text-gray-400">
              Introduce usuario, contraseña y URL de servidor mediante Xtream Codes API.
            </p>
          </div>

          <div className="bg-dark-900/60 p-4 rounded-xl border border-white/5 space-y-2">
            <div className="w-7 h-7 rounded-full bg-green-500/20 text-green-400 font-black flex items-center justify-center text-xs">
              4
            </div>
            <div className="font-bold text-white">Ver la televisión</div>
            <p className="text-xs text-gray-400">
              Tus canales, deportes y películas se sincronizan automáticamente en 4K.
            </p>
          </div>
        </div>
      </div>

      {/* Devices Grid */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">
          Elige tu dispositivo para ver el tutorial detallado
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {devicesList.map((device) => (
            <Link
              key={device.slug}
              href={`/instalacion/${device.slug}`}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/5 hover:border-spanish-red/40 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getIcon(device.iconName)}
                  </div>
                  {device.popular && (
                    <span className="text-[11px] font-bold text-spanish-gold bg-spanish-gold/10 px-2 py-0.5 rounded-full border border-spanish-gold/20">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-spanish-gold transition-colors mb-2 tracking-tight">
                  {device.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {device.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-spanish-redBright">
                <span>Ver tutorial ({device.estimatedTime})</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Need Help Banner */}
      <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 border border-white/10 max-w-3xl mx-auto space-y-4">
        <h3 className="text-2xl font-bold text-white">¿Prefieres que te ayudemos paso a paso?</h3>
        <p className="text-sm text-gray-300 max-w-xl mx-auto">
          Nuestro equipo de asistencia técnica está disponible las 24 horas del día por WhatsApp para guiarte en directo hasta que tengas todos los canales funcionando en tu televisor.
        </p>
        <div className="pt-2">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-spanish-red to-spanish-redBright shadow-glow-red hover:shadow-lg transition-all"
          >
            <span>Contactar con el soporte técnico</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
