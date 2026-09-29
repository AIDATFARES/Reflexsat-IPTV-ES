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
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Política de Reembolso', href: '/politica-de-reembolso' }]} />

      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Política de Reembolso y Devolución
        </h1>
        <div className="w-20 h-1 spanish-flag-line" />
        <p className="text-xs text-gray-400">Garantía incondicional de 7 días naturales</p>

        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Garantía de Satisfacción de 7 Días</h2>
            <p>
              En <strong>Reflexsat IPTV</strong> queremos que pruebes nuestro servicio con absoluta tranquilidad y confianza. Por ello, todas las nuevas suscripciones de 3, 6 y 12 meses cuentan con una <strong>garantía de devolución del dinero de 7 días naturales</strong> a contar desde el momento de la entrega de las credenciales de acceso.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Supuestos Cubiertos por la Garantía</h2>
            <p>Podrás solicitar el reembolso completo en cualquiera de los siguientes casos:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li>Incompatibilidad técnica insalvable de tu dispositivo tras haber recibido soporte de nuestro equipo.</li>
              <li>Frecuentes problemas de cortes o buffering derivados de nuestros servidores comprobados por el equipo técnico.</li>
              <li>Retraso superior a 24 horas en la activación inicial tras la confirmación de pago.</li>
              <li>Insatisfacción general con la calidad del servicio dentro del plazo garantizado de 7 días.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Procedimiento para Solicitar el Reembolso</h2>
            <p>
              Para tramitar tu devolución, basta con ponerte en contacto con nuestro equipo a través de la página de <Link href="/contacto" className="text-spanish-gold hover:underline">Contacto</Link> o vía WhatsApp indicando:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li>Nombre completo y dirección de correo electrónico utilizada en el pedido.</li>
              <li>Nombre de usuario asignado a la suscripción.</li>
              <li>Motivo de la solicitud para que podamos seguir mejorando nuestro servicio técnico.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Plazo y Método de Abono</h2>
            <p>
              Una vez confirmada la solicitud, el importe íntegro abonado se reintegrará al mismo método de pago original utilizado por el cliente en un plazo habitual de 24 a 72 horas hábiles, según la entidad bancaria del usuario.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
