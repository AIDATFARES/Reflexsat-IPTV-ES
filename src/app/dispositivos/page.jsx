import Link from 'next/link';
import {
  Tv,
  Flame,
  Smartphone,
  Monitor,
  Box,
  Tablet,
  Check,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { devicesList } from '../../data/devicesData';

export const metadata = {
  title: 'Dispositivos Compatibles con Reflexsat IPTV — Smart TV, Fire Stick, Android, iOS y PC',
  description:
    'Lista completa de dispositivos compatibles con Reflexsat IPTV en España. Comprueba los requisitos para Samsung, LG, Fire TV, Apple TV, móviles y ordenadores.',
  alternates: {
    canonical: 'https://www.reflexsat.es/dispositivos',
  },
};

export default function DispositivosPage() {
  const getIcon = (name) => {
    switch (name) {
      case 'Tv':
        return <Tv className="w-7 h-7 text-spanish-gold" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-spanish-redBright" />;
      case 'Smartphone':
        return <Smartphone className="w-7 h-7 text-spanish-gold" />;
      case 'Monitor':
        return <Monitor className="w-7 h-7 text-spanish-redBright" />;
      case 'Tablet':
        return <Tablet className="w-7 h-7 text-spanish-gold" />;
      case 'Box':
        return <Box className="w-7 h-7 text-spanish-redBright" />;
      default:
        return <Tv className="w-7 h-7 text-spanish-gold" />;
    }
  };

  return (
    <div className="pt-4 pb-12 sm:pt-6 sm:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Dispositivos Compatibles', href: '/dispositivos' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold bg-spanish-red/10 text-spanish-redBright border border-spanish-red/20 uppercase tracking-widest">
          Compatibilidad Universal
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Dispositivos Compatibles con <span className="text-transparent bg-clip-text bg-gradient-to-r from-spanish-red via-spanish-redBright to-spanish-gold">Reflexsat IPTV</span>
        </h1>
        <div className="w-24 h-1 spanish-flag-line mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Nuestra infraestructura permite conectar prácticamente cualquier pantalla conectada a Internet mediante <strong>Xtream Codes API</strong> o <strong>lista M3U</strong>. Consulta nuestras <Link href="/instalacion" className="text-spanish-gold font-bold hover:underline">guías de instalación detalladas</Link>, elige tu <Link href="/planes" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">plan de suscripción</Link> o solicita una <Link href="/contacto?plan=prueba-gratis" className="text-spanish-gold hover:underline">prueba gratuita de 24h</Link>.
        </p>
      </div>

      {/* Devices Detailed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {devicesList.map((device) => (
          <div
            key={device.slug}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-spanish-red/40 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getIcon(device.iconName)}
                </div>
                <span className="text-xs font-bold text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg">
                  {device.category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-spanish-gold transition-colors tracking-tight">
                {device.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                {device.shortDesc}
              </p>

              <div className="space-y-4 border-t border-white/5 pt-4 text-xs text-gray-300">
                <div>
                  <span className="font-bold text-white block mb-1.5">Apps recomendadas:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {device.recommendedApps.slice(0, 3).map((app, idx) => (
                      <span key={idx} className="bg-white/5 px-2 py-0.5 rounded text-[11px] text-gray-300">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-gray-400 pt-1">
                  <span>Tiempo de configuración:</span>
                  <span className="font-semibold text-white">{device.estimatedTime}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <Link
                href={`/instalacion/${device.slug}`}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-spanish-red hover:text-white text-gray-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Ver guía de instalación</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Network Recommendation */}
      <div className="glass-card rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto mb-16 space-y-4 bg-dark-900/60">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-spanish-gold" />
          <span>Recomendaciones de Conexión a Internet en España</span>
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Para exprimir al máximo la resolución 4K y 60 FPS en eventos en directo con nuestros <Link href="/planes" className="text-spanish-gold font-bold hover:underline">planes de suscripción</Link>, te sugerimos contar con una velocidad real mínima. Si experimentas problemas en tu red, revisa nuestro artículo sobre <Link href="/blog/solucionar-problemas-buffering-cortes-iptv" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">solucionar problemas de buffering en IPTV</Link>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-center text-xs">
          <div className="bg-dark-950 p-4 rounded-xl border border-white/5">
            <div className="font-black text-white text-base mb-1">Mínimo 10 Mbps</div>
            <div className="text-gray-400">Canales SD y HD estándar</div>
          </div>
          <div className="bg-dark-950 p-4 rounded-xl border border-white/5">
            <div className="font-black text-white text-base mb-1">Mínimo 20 Mbps</div>
            <div className="text-gray-400">Canales Full HD a 50/60 fps</div>
          </div>
          <div className="bg-dark-950 p-4 rounded-xl border border-spanish-gold/30">
            <div className="font-black text-spanish-gold text-base mb-1">Mínimo 30+ Mbps</div>
            <div className="text-gray-400">Canales 4K Ultra HD & VOD HDR</div>
          </div>
        </div>
      </div>
    </div>
  );
}
