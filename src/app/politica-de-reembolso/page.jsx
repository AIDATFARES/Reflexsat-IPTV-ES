import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Política de Reembolso (Garantía 7 Días) | Reflexsat IPTV España',
  description: 'Términos y condiciones de la garantía de devolución de 7 días de Reflexsat IPTV España. Reembolso garantizado y transparente.',
  alternates: {
    canonical: 'https://www.reflexsat.es/politica-de-reembolso',
  },
};

export default function PoliticaReembolsoPage() {
  return (
    <div className="pt-4 pb-12 sm:pt-6 sm:pb-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Política de Reembolso', href: '/politica-de-reembolso' }]} />

      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Política de Reembolso y Devolución
        </h1>
        <div className="w-20 h-1 spanish-flag-line" />
        <p className="text-xs text-gray-400">Garantía incondicional de 7 días naturales en todos los planes</p>

        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Garantía de Satisfacción de 7 Días</h2>
            <p>
              En <strong>Reflexsat IPTV</strong> queremos que pruebes nuestro servicio con absoluta tranquilidad y confianza. Por ello, todas las contrataciones de <Link href="/planes" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">nuestros planes de suscripción</Link> (3, 6 y 12 meses) cuentan con una <strong>garantía de devolución del dinero de 7 días naturales</strong> a contar desde el momento de la entrega de las credenciales de acceso.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Supuestos Cubiertos por la Garantía</h2>
            <p>Podrás solicitar el reembolso completo en cualquiera de los siguientes casos:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>
                Incompatibilidad técnica de tu <Link href="/dispositivos" className="text-spanish-gold underline decoration-spanish-gold/60 hover:text-white">aparato o televisor</Link> tras haber recibido soporte o consultado las <Link href="/instalacion" className="text-spanish-gold underline decoration-spanish-gold/60 hover:text-white">guías de instalación oficiales</Link>.
              </li>
              <li>
                Problemas persistentes de cortes o señal que no puedan solucionarse aplicando nuestros consejos de optimización y <Link href="/blog/como-solucionar-buffering-cortes-iptv" className="text-spanish-gold underline decoration-spanish-gold/60 hover:text-white">solución al buffering</Link>.
              </li>
              <li>Retraso superior a 24 horas en la activación inicial tras la confirmación de pago.</li>
              <li>Insatisfacción general con la calidad del servicio dentro del plazo garantizado de 7 días naturales.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Procedimiento para Solicitar el Reembolso</h2>
            <p>
              Para tramitar tu devolución, basta con ponerte en contacto con nuestro equipo a través de la página oficial de <Link href="/contacto" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">Contacto y Soporte</Link> o mediante <a href="https://wa.me/447882781998?text=Hola%20Reflexsat%20IPTV,%20deseo%20gestionar%20una%20solicitud%20de%20reembolso" target="_blank" rel="noopener noreferrer" className="text-spanish-gold font-semibold underline hover:text-spanish-redBright">nuestro canal directo de WhatsApp</a> indicando:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li>Nombre completo y dirección de correo electrónico utilizada en el pedido.</li>
              <li>Nombre de usuario o credenciales asignadas a la suscripción.</li>
              <li>Motivo de la solicitud para que podamos seguir mejorando la atención técnica.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Plazo y Método de Abono</h2>
            <p>
              Una vez confirmada la solicitud, el importe íntegro abonado se reintegrará al mismo método de pago original en un plazo habitual de 24 a 72 horas hábiles. Para más detalles sobre condiciones contractuales, consulta nuestros <Link href="/terminos-y-condiciones" className="text-spanish-gold underline hover:text-spanish-redBright">Términos y Condiciones</Link> y las <Link href="/faq" className="text-spanish-gold underline hover:text-spanish-redBright">Preguntas Frecuentes</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
