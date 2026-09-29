import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Zap, Headphones, Tv, Lock, CreditCard, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-white/10 text-gray-400 text-sm">
      {/* Top Value Badges Bar */}
      <div className="border-b border-white/5 bg-dark-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-spanish-red/10 border border-spanish-red/30 flex items-center justify-center text-spanish-redBright flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">Activación Inmediata</div>
                <div className="text-xs text-gray-400">Credenciales en ±5 min</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-spanish-gold/10 border border-spanish-gold/30 flex items-center justify-center text-spanish-gold flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">Garantía 7 Días</div>
                <div className="text-xs text-gray-400">Devolución sin preguntas</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-spanish-red/10 border border-spanish-red/30 flex items-center justify-center text-spanish-redBright flex-shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">Soporte 24/7 en Español</div>
                <div className="text-xs text-gray-400">Atención técnica VIP</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-spanish-gold/10 border border-spanish-gold/30 flex items-center justify-center text-spanish-gold flex-shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">Pago 100% Seguro</div>
                <div className="text-xs text-gray-400">Cifrado SSL 256-bit</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="Reflexsat IPTV">
              <div className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Reflexsat IPTV España"
                  width={190}
                  height={48}
                  className="w-48 h-auto object-contain"
                  style={{ width: '190px', height: 'auto', maxHeight: '48px' }}
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Reflexsat IPTV es el servicio de suscripción IPTV premium líder para España y usuarios europeos. Emisión estable en 4K/HD con más de 35.000 canales en directo, fútbol y deporte total, junto a más de 120.000 películas y series VOD sin permanencia.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Servidores activos 99.9%
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-spanish-red/10 border border-spanish-red/20 text-spanish-redBright">
                🇪🇸 España
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <p className="text-white font-bold text-base mb-4 tracking-wide">Navegación</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/planes" className="hover:text-white transition-colors">
                  Planes y Precios
                </Link>
              </li>
              <li>
                <Link href="/instalacion" className="hover:text-white transition-colors">
                  Tutoriales de Instalación
                </Link>
              </li>
              <li>
                <Link href="/dispositivos" className="hover:text-white transition-colors">
                  Dispositivos Compatibles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Noticias IPTV
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto & Soporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Device Guides */}
          <div>
            <p className="text-white font-bold text-base mb-4 tracking-wide">Guías por Dispositivo</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/instalacion/samsung-smart-tv" className="hover:text-white transition-colors">
                  Samsung Smart TV
                </Link>
              </li>
              <li>
                <Link href="/instalacion/lg-smart-tv" className="hover:text-white transition-colors">
                  LG Smart TV
                </Link>
              </li>
              <li>
                <Link href="/instalacion/fire-tv-stick" className="hover:text-white transition-colors">
                  Amazon Fire TV Stick
                </Link>
              </li>
              <li>
                <Link href="/instalacion/android-tv" className="hover:text-white transition-colors">
                  Android TV & Google TV
                </Link>
              </li>
              <li>
                <Link href="/instalacion/apple-tv" className="hover:text-white transition-colors">
                  Apple TV 4K
                </Link>
              </li>
              <li>
                <Link href="/instalacion/iphone-ipad" className="hover:text-white transition-colors">
                  iPhone & iPad
                </Link>
              </li>
              <li>
                <Link href="/instalacion/pc-windows-mac" className="hover:text-white transition-colors">
                  PC Windows & Mac (VLC)
                </Link>
              </li>
              <li>
                <Link href="/instalacion/mag-box" className="hover:text-white transition-colors">
                  MAG Box Stalker
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <p className="text-white font-bold text-base mb-4 tracking-wide">Atención al Cliente</p>
            <ul className="space-y-3">
              <li>
                <div className="text-xs text-gray-400">Horario de soporte:</div>
                <div className="text-white font-medium">Lunes a Domingo — 24 horas</div>
              </li>
              <li>
                <div className="text-xs text-gray-400">Tiempo estimado de respuesta:</div>
                <div className="text-spanish-gold font-medium">Menos de 10 minutos</div>
              </li>
              <li>
                <div className="text-xs text-gray-400">Canal de WhatsApp 24/7:</div>
                <a
                  href="https://wa.me/447882781998?text=Hola%20Reflexsat%20IPTV,%20deseo%20m%C3%A1s%20informaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold mt-1 text-sm group"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-green-400" />
                  <span className="underline decoration-green-400/50 group-hover:decoration-green-300">Abrir chat en directo →</span>
                </a>
              </li>
              <li>
                <div className="text-xs text-gray-400">Consulta comercial o técnica:</div>
                <Link
                  href="/contacto"
                  className="inline-flex items-center text-spanish-redBright underline decoration-spanish-redBright/60 hover:text-white font-semibold mt-1"
                >
                  Abrir formulario de contacto →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods Notice */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <CreditCard className="w-5 h-5 text-gray-400" />
            <span>Pagos seguros admitidos: Tarjetas Visa, Mastercard, Transferencia y pasarelas protegidas SSL.</span>
          </div>
          <div className="text-xs text-gray-400 text-center md:text-right">
            <span>Reflexsat IPTV opera con servidores de alta redundancia en España y la Unión Europea.</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="bg-dark-900 border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} Reflexsat IPTV (www.reflexsat.es) — Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <span>•</span>
            <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
            <span>•</span>
            <Link href="/politica-de-reembolso" className="hover:text-white transition-colors">
              Política de Reembolso
            </Link>
            <span>•</span>
            <Link href="/politica-de-cookies" className="hover:text-white transition-colors">
              Política de Cookies
            </Link>
            <span>•</span>
            <Link href="/aviso-legal" className="hover:text-white transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
