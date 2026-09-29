import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Política de Privacidad | Reflexsat IPTV España',
  description: 'Información sobre el tratamiento y protección de datos personales de Reflexsat IPTV España conforme al RGPD y la LOPDGDD.',
  alternates: {
    canonical: 'https://www.reflexsat.es/politica-de-privacidad',
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Política de Privacidad', href: '/politica-de-privacidad' }]} />

      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Política de Privacidad
        </h1>
        <div className="w-20 h-1 spanish-flag-line" />
        <p className="text-xs text-gray-400">Última actualización: Enero de 2026</p>

        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Responsable del Tratamiento</h2>
            <p>
              En cumplimiento del Reglamento General de Protección de Datos (RGPD) de la Unión Europea (UE) 2016/679 y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que los datos recabados en este sitio web pertenecen a <strong>Reflexsat IPTV</strong> (www.reflexsat.es).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Datos Recopilados y Finalidad</h2>
            <p>
              Recopilamos únicamente la información indispensable para el suministro del servicio solicitado, la gestión de la activación de su suscripción y la atención al cliente:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li>Nombre o alias para la personalización de las comunicaciones.</li>
              <li>Dirección de correo electrónico para la entrega de credenciales y guías de configuración.</li>
              <li>Número de teléfono / WhatsApp para soporte técnico si el usuario lo solicita expresamente.</li>
              <li>Detalles técnicos del dispositivo receptor (modelo o dirección MAC en decodificadores MAG) para la correcta vinculación del flujo de señal.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Conservación de los Datos</h2>
            <p>
              Los datos se mantendrán durante el tiempo estrictamente necesario para la vigencia de la suscripción contratada y mientras existan obligaciones legales aplicables, tras lo cual se procederá a su supresión o bloqueo seguro.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Derechos del Usuario (ARCO)</h2>
            <p>
              Cualquier usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición dirigiéndose a nuestro equipo mediante el formulario habilitado en la sección de <a href="/contacto" className="text-spanish-gold hover:underline">Contacto</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Seguridad de la Información</h2>
            <p>
              Implementamos protocolos de cifrado SSL/TLS de 256 bits en todas las comunicaciones del portal web para impedir accesos no autorizados y salvaguardar la confidencialidad de la información.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
