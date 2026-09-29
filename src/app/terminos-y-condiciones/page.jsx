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
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              El acceso, navegación y uso del portal web <strong>www.reflexsat.es</strong>, así como la contratación de cualquiera de los planes de suscripción de <strong>Reflexsat IPTV</strong>, implica la aceptación expresa y sin reservas de todos los términos contenidos en el presente documento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Naturaleza del Servicio</h2>
            <p>
              Reflexsat IPTV proporciona servicios de transmisión de flujos multimedia vía protocolo IP. El usuario debe disponer de una conexión a Internet de banda ancha adecuada y un dispositivo compatible (Smart TV, receptor Android, Fire TV, etc.) para la correcta visualización de las emisiones.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Uso de Credenciales y Dispositivos Simultáneos</h2>
            <p>
              Cada cuenta individual suministrada está autorizada para un uso personal por parte del titular. Salvo en los planes designados expresamente como "Multi-pantallas" o "Familiares", las credenciales solo pueden reproducir contenido en un único dispositivo al mismo tiempo. Compartir credenciales de forma pública o comercial provocará el bloqueo cautelar de la cuenta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Ausencia de Permanencia</h2>
            <p>
              Ninguno de los planes ofrecidos en Reflexsat IPTV incluye cláusulas de permanencia mínima ni cargos automáticos forzosos. Una vez finalizado el periodo contratado (3, 6 o 12 meses), el servicio cesará automáticamente a menos que el cliente decida voluntariamente renovarlo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Disponibilidad y Mantenimiento Técnico</h2>
            <p>
              Aunque nuestros servidores cuentan con un objetivo de disponibilidad del 99.9%, el servicio puede estar puntualmente sujeto a tareas de mantenimiento programado o incidencias técnicas ajenas en las infraestructuras de los operadores de telecomunicaciones intermediarios.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
