import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Política de Cookies | Reflexsat IPTV España',
  description: 'Información sobre el uso de cookies y tecnologías similares en la web de Reflexsat IPTV España.',
  alternates: {
    canonical: 'https://www.reflexsat.es/politica-de-cookies',
  },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="pt-4 pb-12 sm:pt-6 sm:pb-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Política de Cookies', href: '/politica-de-cookies' }]} />

      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Política de Cookies
        </h1>
        <div className="w-20 h-1 spanish-flag-line" />
        <p className="text-xs text-gray-400">Transparencia y privacidad del usuario</p>

        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. ¿Qué son las Cookies?</h2>
            <p>
              Una cookie es un pequeño archivo de texto que un sitio web almacena en el navegador del usuario para recordar información sobre su visita, como sus preferencias de navegación o si ha interactuado previamente con el sitio web. Para más información sobre el tratamiento general de datos, consulte nuestra <Link href="/politica-de-privacidad" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">Política de Privacidad</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Tipos de Cookies que Utilizamos</h2>
            <p>En <strong>Reflexsat IPTV</strong> utilizamos únicamente cookies técnicas y funcionales esenciales:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>
                <strong>Cookies técnicas necesarias:</strong> Imprescindibles para la correcta navegación, seguridad y funcionamiento del <Link href="/contacto" className="text-spanish-gold hover:underline">formulario de contacto</Link>.
              </li>
              <li>
                <strong>Cookies de preferencias:</strong> Recuerdan configuraciones de interfaz o la preselección de <Link href="/planes" className="text-spanish-gold hover:underline">planes de IPTV</Link>.
              </li>
              <li>
                <strong>Cookies de rendimiento y análisis:</strong> Permiten medir de forma anónima el rendimiento de la plataforma para mejorar los tiempos de carga en España.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Cómo Gestionar o Desactivar las Cookies</h2>
            <p>
              Puedes configurar tu navegador web en cualquier momento para rechazar, bloquear o eliminar las cookies instaladas. Si tienes cualquier consulta sobre el tratamiento de tus datos o sobre nuestros servicios, no dudes en escribirnos a través de nuestro <Link href="/contacto" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">canal de atención al cliente</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
