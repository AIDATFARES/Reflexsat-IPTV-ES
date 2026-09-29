import Link from 'next/link';
import Image from 'next/image';
import {
  Tv,
  Zap,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  XCircle,
  Play,
  Film,
  Trophy,
  Sparkles,
  ArrowRight,
  Flame,
  Layers,
  Lock,
} from 'lucide-react';
import PricingCard from '../components/PricingCard';
import FaqAccordion from '../components/FaqAccordion';
import { singleScreenPlans, multiScreenPlans } from '../data/pricingData';
import { allFaqs } from '../data/faqData';

export const metadata = {
  title: 'Reflexsat IPTV España — Suscripción IPTV Premium 4K / HD Estable',
  description:
    'Suscripción IPTV en España con más de 35.000 canales en directo 4K, 120.000 VOD, deportes en vivo y servidores anti-buffering. Activación en 5 min. Prueba con 7 días de garantía.',
  alternates: {
    canonical: 'https://www.reflexsat.es/',
  },
};

export default function HomePage() {
  const topFaqs = allFaqs.slice(0, 6);

  // Home client reviews from Spanish cities
  const testimonials = [
    {
      name: 'Javier M.',
      city: 'Madrid',
      rating: 5,
      comment:
        'Increíble la estabilidad durante los partidos del domingo en 4K. Vengo de otro servicio que se caía en el descanso y con Reflexsat la fluidez es de 10. Activado en 4 minutos.',
      plan: 'Plan 12 Meses',
    },
    {
      name: 'Laura G.',
      city: 'Valencia',
      rating: 5,
      comment:
        'Lo instalé en mi Smart TV Samsung con IPTV Smarters siguiendo la guía de la web y fue facilísimo. El soporte por WhatsApp contestó al momento mis dudas. Muy recomendable.',
      plan: 'Plan 12 Meses',
    },
    {
      name: 'Marcos R.',
      city: 'Barcelona',
      rating: 5,
      comment:
        'Tenemos el pack familiar de 3 pantallas: los niños ven dibujos en la tablet, mi mujer sus series en la tele y yo el fútbol en el Fire Stick. Cero cortes en todas las pantallas.',
      plan: 'Plan Familiar 3 Pantallas',
    },
    {
      name: 'Antonio S.',
      city: 'Sevilla',
      rating: 5,
      comment:
        'El catálogo VOD es gigantesco y con el audio en castellano de España perfecto. Calidad de imagen nítida en 60 fps para Fórmula 1 y MotoGP. Calidad precio insuperable.',
      plan: 'Plan 6 Meses',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* ============================================================== */}
      {/* 1. HERO SECTION WITH CINEMATIC TV BACKGROUND                   */}
      {/* ============================================================== */}
      <section className="relative flex flex-col items-center justify-center pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-tv.jpg"
            alt="Reflexsat IPTV Fondo Smart TV España"
            fill
            priority
            className="object-cover object-center brightness-[0.28] contrast-[1.1] scale-105"
          />
          {/* Multi-layer cinematic dark gradient overlay for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/75 to-dark-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-transparent to-dark-950/90" />
          {/* Ambient Spanish Flag Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-spanish-red/25 blur-[160px] pointer-events-none rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-spanish-gold/15 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-dark-900/90 border border-white/15 shadow-glass backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-gray-200">
                Activación garantizada en menos de 5 min — 7 días a la semana 🇪🇸
              </span>
            </div>

            {/* H1 Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
              Suscripción <span className="text-transparent bg-clip-text bg-gradient-to-r from-spanish-red via-spanish-redBright to-spanish-gold">IPTV Premium</span> en España
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow">
              Accede a más de <strong>35.000 canales en directo en 4K / Full HD</strong> sin cortes mediante nuestros <Link href="/planes" className="text-spanish-gold font-bold hover:underline">planes de suscripción IPTV</Link>, junto a más de <strong>120.000 películas y series VOD</strong>. Todo el deporte y cine en tu <Link href="/instalacion/samsung-smart-tv" className="text-gray-200 underline decoration-white/30 hover:text-white">Smart TV</Link>, <Link href="/instalacion/fire-tv-stick" className="text-gray-200 underline decoration-white/30 hover:text-white">Fire Stick</Link> o <Link href="/dispositivos" className="text-spanish-gold hover:underline">dispositivos compatibles</Link>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#planes"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-spanish-red to-spanish-redBright hover:from-spanish-redBright hover:to-spanish-red shadow-glow-red hover:shadow-lg transition-all duration-200 group"
              >
                <span>Ver planes y ofertas</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/contacto?plan=prueba-gratis"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-bold text-gray-200 bg-dark-900/80 hover:bg-dark-800 backdrop-blur-md border border-white/15 hover:border-spanish-gold/40 hover:text-white transition-all duration-200"
              >
                <span>Solicitar prueba gratis</span>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="glass-card rounded-xl p-3.5 border border-white/10 backdrop-blur-md bg-dark-900/60">
                <div className="text-2xl lg:text-3xl font-black text-white">+35.000</div>
                <div className="text-xs text-gray-300 font-medium">Canales HD / 4K</div>
              </div>
              <div className="glass-card rounded-xl p-3.5 border border-white/10 backdrop-blur-md bg-dark-900/60">
                <div className="text-2xl lg:text-3xl font-black text-white">+120.000</div>
                <div className="text-xs text-gray-300 font-medium">Películas & Series VOD</div>
              </div>
              <div className="glass-card rounded-xl p-3.5 border border-white/10 backdrop-blur-md bg-dark-900/60">
                <div className="text-2xl lg:text-3xl font-black text-spanish-gold">±5 min</div>
                <div className="text-xs text-gray-300 font-medium">Activación exprés</div>
              </div>
              <div className="glass-card rounded-xl p-3.5 border border-white/10 backdrop-blur-md bg-dark-900/60">
                <div className="text-2xl lg:text-3xl font-black text-green-400">99.9%</div>
                <div className="text-xs text-gray-300 font-medium">Servidores estables</div>
              </div>
            </div>

            {/* Trust Pill */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-300 font-medium">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-spanish-gold" /> Pago 100% Seguro SSL
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green-400" /> Garantía de Reembolso 7 Días
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-spanish-redBright" /> Servidores en España y Europa
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. COMPATIBLE APPS & HARDWARE BANNER                           */}
      {/* ============================================================== */}
      <section className="py-8 sm:py-10 bg-dark-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-spanish-gold">
            Compatibilidad Universal Multiplataforma
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Compatible con tus aplicaciones y dispositivos favoritos
          </h2>
          <div className="w-24 h-1 spanish-flag-line mx-auto" />
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Configuración ultrarrápida mediante <strong>Xtream Codes API</strong> y <strong>enlace M3U</strong>. Sigue nuestras <Link href="/instalacion" className="text-spanish-gold font-semibold hover:underline">guías de instalación paso a paso</Link> para cada uno de los <Link href="/dispositivos" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">dispositivos compatibles</Link>.
          </p>

          {/* App Pills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-4">
            {[
              { name: 'IPTV Smarters Pro', type: 'Smart TV & Móvil' },
              { name: 'TiviMate Player', type: 'Fire TV & Android' },
              { name: 'IBO Player', type: 'Samsung & LG' },
              { name: 'Smart IPTV', type: 'Smart TV' },
              { name: 'XCIPTV Player', type: 'Android & TV Box' },
              { name: 'GSE Smart IPTV', type: 'iOS & Apple TV' },
              { name: 'SS IPTV', type: 'LG webOS' },
              { name: 'VLC Player', type: 'PC & Mac' },
            ].map((app, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-3 border border-white/5 hover:border-spanish-red/30 transition-all text-center flex flex-col justify-center items-center"
              >
                <Tv className="w-5 h-5 text-spanish-gold mb-1.5" />
                <span className="text-xs font-bold text-white line-clamp-1">{app.name}</span>
                <span className="text-[10px] text-gray-400">{app.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. KEY ADVANTAGES / WHY CHOOSE REFLEXSAT                       */}
      {/* ============================================================== */}
      <section className="py-10 sm:py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-spanish-redBright">
              Ventajas Exclusivas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              ¿Por qué elegir <span className="text-spanish-redBright">Reflexsat IPTV</span> en España?
            </h2>
            <div className="w-24 h-1 spanish-flag-line mx-auto" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Diseñado pensando específicamente en las necesidades del usuario español y europeo: servidores dedicados para ver televisión sin cortes con nuestros <Link href="/planes" className="text-spanish-gold font-bold hover:underline">planes recomendados</Link> y <Link href="/contacto" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">soporte técnico 24/7</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Transmisión 4K & FHD Sin Cortes',
                desc: 'Servidores dedicados con balanceo de carga automático y tecnología Anti-Freeze 2026. Latencia mínima para disfrutar del fútbol sin congelaciones.',
              },
              {
                icon: Tv,
                title: 'Compatibilidad Total con Dispositivos',
                desc: 'Smart TV (Samsung, LG, Sony, Philips), Amazon Fire TV Stick, Chromecast, Xiaomi Box, Apple TV, iPhone, iPad, Android y PC.',
              },
              {
                icon: Layers,
                title: 'Sin Permanencia ni Contratos',
                desc: 'Tú tienes el control total. Planes claros de 3, 6 o 12 meses sin renovaciones automáticas sorpresa ni cargos ocultos.',
              },
              {
                icon: Trophy,
                title: 'Todo el Deporte y Fútbol Total',
                desc: 'Disfruta de LaLiga, UEFA Champions League, Premier League, Fórmula 1, MotoGP, baloncesto y tenis en directo en máxima resolución.',
              },
              {
                icon: Film,
                title: '+120.000 Películas y Series VOD',
                desc: 'Catálogo bajo demanda actualizado semanalmente con estrenos de cine y series completas en audio en castellano y versión original.',
              },
              {
                icon: ShieldCheck,
                title: 'Garantía de Devolución de 7 Días',
                desc: 'Prueba el servicio con total tranquilidad. Si experimentas cualquier problema que no podamos solventar, te reembolsamos el 100%.',
              },
            ].map((adv, idx) => {
              const IconComp = adv.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-spanish-red/20 to-spanish-gold/20 border border-white/10 flex items-center justify-center text-spanish-gold mb-5">
                      <IconComp className="w-6 h-6 text-spanish-redBright" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{adv.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{adv.desc}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-spanish-gold">
                    <span>Garantizado por Reflexsat</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. PRICING PREVIEW SECTION                                     */}
      {/* ============================================================== */}
      <section id="planes" className="py-10 sm:py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-spanish-gold">
              Precios Transparentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Elige tu suscripción <span className="text-spanish-redBright">Reflexsat IPTV</span>
            </h2>
            <div className="w-24 h-1 spanish-flag-line mx-auto" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Planes claros sin costes ocultos. Activación rápida en 5 minutos tras el pago seguro. Respaldados por nuestra <Link href="/politica-de-reembolso" className="text-spanish-gold font-bold hover:underline">garantía incondicional de reembolso de 7 días</Link> y <Link href="/contacto" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">asistencia técnica personalizada</Link>.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {singleScreenPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Multi-screen CTA Link */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-dark-800/80 border border-white/10 max-w-2xl mx-auto">
              <div className="text-left text-sm">
                <span className="font-bold text-white block">¿Quieres ver en varias televisiones a la vez?</span>
                <span className="text-xs text-gray-400">Descubre nuestros Planes Familiares Multi-pantallas (2, 3 o 4 conexiones simultáneas).</span>
              </div>
              <Link
                href="/planes"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-spanish-red hover:bg-spanish-redBright transition-colors whitespace-nowrap flex-shrink-0"
              >
                Ver planes multi-pantalla →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SPORTS & FOOTBALL SHOWCASE SECTION                          */}
      {/* ============================================================== */}
      <section className="py-10 sm:py-14 bg-dark-950 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-spanish-red/10 border border-spanish-red/30 text-spanish-redBright">
                <Trophy className="w-3.5 h-3.5" /> Todo el Deporte en Directo 2026
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Vive la pasión del fútbol y el deporte a <span className="text-spanish-gold">60 FPS en 4K</span>
              </h2>
              <div className="w-20 h-1 spanish-flag-line" />
              <p className="text-gray-300 text-base leading-relaxed">
                Olvídate de los desfases y los cortes justo en el momento del gol. Nuestra red de servidores optimizada para España te asegura la mejor cobertura deportiva con nuestros <Link href="/planes" className="text-spanish-gold font-bold hover:underline">planes IPTV para eventos en vivo</Link>. También puedes consultar nuestra guía sobre <Link href="/blog/solucionar-problemas-buffering-cortes-iptv" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">cómo evitar el buffering en IPTV</Link>.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>LaLiga EA Sports & Hypermotion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>UEFA Champions League</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Fórmula 1 y MotoGP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Premier League y Serie A</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Euroliga y Baloncesto NBA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Tenis Grand Slams & UFC</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#planes"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-spanish-red to-spanish-redBright hover:from-spanish-redBright hover:to-spanish-red shadow-glow-red transition-all"
                >
                  <span>Ver planes para ver deporte</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/sports-stadium.jpg"
                  alt="Fútbol en directo en 4K con Reflexsat IPTV España"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-dark-900/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Servidores europeos con 0 buffering</span>
                  <span className="text-spanish-gold font-bold">1080p 60fps / 4K UHD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. HOW IT WORKS IN 3 STEPS                                     */}
      {/* ============================================================== */}
      <section id="como-funciona" className="py-10 sm:py-14 bg-dark-950 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-spanish-redBright">
              Fácil y Rápido
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cómo empezar con tu IPTV en <span className="text-spanish-gold">3 sencillos pasos</span>
            </h2>
            <div className="w-24 h-1 spanish-flag-line mx-auto" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              No necesitas ningún tipo de experiencia previa. En menos de 5 minutos estarás disfrutando de toda la programación en tu televisor consultando nuestras <Link href="/instalacion" className="text-spanish-gold font-bold hover:underline">guías de instalación ilustradas</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                step: '1',
                title: 'Elige tu plan de suscripción',
                desc: (
                  <>
                    Selecciona entre el <Link href="/planes" className="text-spanish-gold underline hover:text-white">Plan 3, 6 o 12 meses</Link> o los planes familiares y formaliza tu pedido de manera segura.
                  </>
                ),
              },
              {
                step: '2',
                title: 'Recibe tus claves en 5 minutos',
                desc: (
                  <>
                    Nuestro sistema te envía al instante por email y WhatsApp tus credenciales de acceso. Si requieres ayuda inmediata, abre nuestro <Link href="/contacto" className="text-spanish-gold underline hover:text-white">soporte técnico</Link>.
                  </>
                ),
              },
              {
                step: '3',
                title: 'Conéctate y disfruta en 4K',
                desc: (
                  <>
                    Descarga tu reproductor preferido como <Link href="/blog/como-instalar-iptv-smarters-pro-smart-tv-espana" className="text-spanish-gold underline hover:text-white">IPTV Smarters Pro</Link> o <Link href="/blog/tivimate-espana-configuracion-guia-paso-a-paso" className="text-spanish-gold underline hover:text-white">TiviMate</Link> e introduce tus datos.
                  </>
                ),
              },
            ].map((stepItem, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 border border-white/5 relative text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-spanish-red to-spanish-gold text-white font-black text-2xl flex items-center justify-center shadow-glow-red mb-6">
                  {stepItem.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{stepItem.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{stepItem.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/instalacion"
              className="inline-flex items-center gap-2 text-sm font-bold text-spanish-gold hover:underline"
            >
              <span>Consulta las guías de instalación paso a paso para cada dispositivo →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. COMPARISON TABLE: REFLEXSAT VS TRADITIONAL                  */}
      {/* ============================================================== */}
      <section className="py-10 sm:py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-spanish-gold">
              Comparativa de Calidad
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Reflexsat IPTV frente a otros proveedores
            </h2>
            <div className="w-24 h-1 spanish-flag-line mx-auto" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Comprueba la diferencia de contratar un <Link href="/planes" className="text-spanish-gold font-bold hover:underline">servicio IPTV profesional</Link> frente a listas inestables o gratuitas. Si tienes dudas sobre servidores, consulta nuestras <Link href="/faq" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">preguntas frecuentes</Link>.
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-dark-950/80">
                    <th className="py-5 px-6 font-bold text-gray-300">Características clave</th>
                    <th className="py-5 px-6 font-extrabold text-spanish-redBright bg-spanish-red/10 text-center">
                      Reflexsat IPTV 🇪🇸
                    </th>
                    <th className="py-5 px-6 font-semibold text-gray-500 text-center">
                      Proveedores genéricos
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    {
                      feat: 'Servidores dedicados con CDN en España & UE',
                      reflexsat: true,
                      others: false,
                    },
                    {
                      feat: 'Estabilidad 99.9% anti-buffering en partidos clave',
                      reflexsat: true,
                      others: false,
                    },
                    {
                      feat: 'Resolución real 4K / UHD a 60 FPS',
                      reflexsat: true,
                      others: false,
                    },
                    {
                      feat: 'Activación inmediata en menos de 5 minutos',
                      reflexsat: true,
                      others: false,
                    },
                    {
                      feat: 'Soporte técnico 24/7 en español por WhatsApp',
                      reflexsat: true,
                      others: false,
                    },
                    {
                      feat: 'Garantía incondicional de reembolso durante 7 días',
                      reflexsat: true,
                      others: false,
                    },
                    {
                      feat: 'Sin permanencia ni renovación obligatoria',
                      reflexsat: true,
                      others: false,
                    },
                    {
                      feat: 'Guía electrónica EPG y Replay de 7 días',
                      reflexsat: true,
                      others: false,
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium">{row.feat}</td>
                      <td className="py-4 px-6 bg-spanish-red/5 text-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <XCircle className="w-5 h-5 text-red-500/60 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. CLIENT TESTIMONIALS (SPAIN)                                 */}
      {/* ============================================================== */}
      <section className="py-10 sm:py-14 bg-dark-950 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-spanish-redBright">
              Opiniones Reales
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Lo que opinan nuestros clientes en España
            </h2>
            <div className="w-24 h-1 spanish-flag-line mx-auto" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              La satisfacción de miles de usuarios en toda España respalda la estabilidad y atención de <strong>Reflexsat IPTV</strong>. Descubre por qué eligen nuestros <Link href="/planes" className="text-spanish-gold font-bold hover:underline">planes de 3, 6 y 12 meses</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-spanish-gold text-sm tracking-widest">★★★★★</div>
                    <span className="text-[11px] font-semibold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                      Verificado
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed mb-4">
                    "{test.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <div className="font-bold text-white text-sm">{test.name}</div>
                  <div className="text-xs text-gray-500 flex items-center justify-between">
                    <span>📍 {test.city}, España</span>
                    <span className="text-spanish-gold">{test.plan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. FAQ ACCORDION SECTION                                       */}
      {/* ============================================================== */}
      <section className="py-10 sm:py-14 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-spanish-gold">
              Resolvemos tus Dudas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Preguntas Frecuentes sobre Reflexsat IPTV
            </h2>
            <div className="w-24 h-1 spanish-flag-line mx-auto" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Información clara sobre <Link href="/dispositivos" className="text-spanish-gold hover:underline">compatibilidad</Link>, <Link href="/instalacion" className="text-spanish-gold hover:underline">activación</Link>, <Link href="/planes" className="text-spanish-gold hover:underline">formas de pago</Link> y garantías. Si necesitas resolver cualquier cuestión técnica adicional, consulta nuestro <Link href="/faq" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">centro completo de preguntas frecuentes</Link>.
            </p>
          </div>

          <FaqAccordion items={topFaqs} includeSchema={true} />

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-spanish-redBright hover:underline"
            >
              <span>Ver todas las preguntas frecuentes de clientes →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. FINAL CONVERTING CTA BANNER                                */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-dark-900 via-spanish-redDark/30 to-dark-950 border-t border-white/10 relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold bg-spanish-gold/20 text-spanish-gold border border-spanish-gold/30">
            ¡Comienza en menos de 5 minutos!
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Disfruta de la mejor televisión IPTV en España hoy mismo
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Más de 35.000 canales 4K, todo el fútbol en directo y 120.000 títulos en VOD con la garantía y estabilidad de <strong>Reflexsat IPTV</strong>. Descubre nuestros <Link href="/planes" className="text-spanish-gold font-bold hover:underline">planes de suscripción</Link> o solicita tu <Link href="/contacto?plan=prueba-gratis" className="text-white underline decoration-spanish-red/60 hover:text-spanish-redBright">prueba gratuita</Link>.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#planes"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-spanish-red to-spanish-redBright hover:from-spanish-redBright hover:to-spanish-red shadow-glow-red hover:shadow-xl transition-all"
            >
              Ver planes y suscribirse
            </a>
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Contactar con un asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
