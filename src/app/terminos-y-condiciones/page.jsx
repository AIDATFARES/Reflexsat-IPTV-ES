import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Términos y Condiciones de Uso | Reflexsat IPTV España',
  description: 'Términos y condiciones de uso del servicio y la plataforma web de Reflexsat IPTV España.',
  alternates: {
    canonical: 'https://www.reflexsat.es/terminos-y-condiciones',
  },
};

export default function TerminosCondicionesPage() {
  return (
    <div className="pt-4 pb-12 sm:pt-6 sm:pb-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Términos y Condiciones', href: '/terminos-y-condiciones' }]} />

      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Términos y Condiciones de Uso
        </h1>
        <div className="w-20 h-1 spanish-flag-line" />
        <p className="text-xs text-gray-400">Última actualización: Enero de 2026</p>

        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Aceptación de los Términos</h2>
            <p>
              El acceso, navegación y uso del portal web <strong>www.reflexsat.es</strong>, así como la contratación de cualquiera de los <Link href="/planes" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">planes de suscripción de Reflexsat IPTV</Link>, implica la aceptación expresa y sin reservas de todos los términos contenidos en el presente documento, así como de nuestra <Link href="/politica-de-privacidad" className="text-spanish-gold hover:underline">Política de Privacidad</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Naturaleza del Servicio</h2>
            <p>
              Reflexsat IPTV proporciona servicios de transmisión de flujos multimedia vía protocolo IP. El usuario debe disponer de una conexión a Internet de banda ancha adecuada y un <Link href="/dispositivos" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">dispositivo compatible</Link> (Smart TV, receptor Android TV, Amazon Fire TV Stick, Apple TV, PC o móvil). Para facilitar la configuración técnica, ponemos a disposición nuestras <Link href="/instalacion" className="text-spanish-gold hover:underline">guías de instalación detalladas</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Uso de Credenciales y Dispositivos Simultáneos</h2>
            <p>
              Cada cuenta individual suministrada está autorizada para un uso personal por parte del titular. Salvo en las opciones expresamente designadas como <Link href="/planes" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">Planes Familiares Multi-pantallas</Link> (2, 3 o 4 conexiones), las credenciales solo pueden reproducir contenido en un único dispositivo al mismo tiempo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Ausencia de Permanencia y Garantía</h2>
            <p>
              Ninguno de los planes ofrecidos en Reflexsat IPTV incluye cláusulas de permanencia mínima ni cobros automáticos ocultos. Una vez finalizado el periodo contratado (3, 6 o 12 meses), el servicio cesará automáticamente a menos que el cliente decida voluntariamente renovarlo. Adicionalmente, todos los nuevos clientes disfrutan de nuestra <Link href="/politica-de-reembolso" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">garantía de devolución incondicional de 7 días</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Disponibilidad y Soporte Técnico</h2>
            <p>
              Nuestra infraestructura cuenta con servidores con CDN y redundancia para ofrecer un 99.9% de operatividad. Ante cualquier incidencia técnica o duda sobre la activación, nuestro equipo atiende ininterrumpidamente a través del canal de <Link href="/contacto" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">Contacto y Soporte 24/7</Link> o en nuestra sección de <Link href="/faq" className="text-spanish-gold hover:underline">Preguntas Frecuentes</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
