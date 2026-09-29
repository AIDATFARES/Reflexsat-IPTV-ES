import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Aviso Legal | Reflexsat IPTV España',
  description: 'Aviso legal e información corporativa del sitio web www.reflexsat.es en España.',
  alternates: {
    canonical: 'https://www.reflexsat.es/aviso-legal',
  },
};

export default function AvisoLegalPage() {
  return (
    <div className="pt-4 pb-12 sm:pt-6 sm:pb-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Aviso Legal', href: '/aviso-legal' }]} />

      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Aviso Legal
        </h1>
        <div className="w-20 h-1 spanish-flag-line" />
        <p className="text-xs text-gray-400">Información general conforme a la Ley 34/2002 (LSSI-CE)</p>

        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Datos Identificativos</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el presente portal web opera bajo la denominación comercial <strong>Reflexsat IPTV</strong> con dominio principal <Link href="/" className="text-spanish-gold hover:underline">www.reflexsat.es</Link>. Para cualquier comunicación, puede dirigirse a nuestro departamento de <Link href="/contacto" className="text-spanish-gold hover:underline">Contacto y Atención al Cliente</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Propiedad Intelectual e Industrial</h2>
            <p>
              El diseño, código fuente, logotipos, elementos gráficos y contenidos propios del sitio web son titularidad de Reflexsat IPTV o de sus legítimos licenciantes, estando protegidos por la legislación española e internacional sobre propiedad intelectual e industrial. El uso de los servicios se rige por nuestros <Link href="/terminos-y-condiciones" className="text-spanish-gold hover:underline">Términos y Condiciones de Uso</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Exención de Responsabilidad y Enlaces</h2>
            <p>
              Reflexsat IPTV no se responsabiliza del uso indebido que los usuarios puedan realizar de los contenidos o servicios facilitados, ni de las posibles interrupciones temporales ocasionadas por fallos en los proveedores de acceso a Internet ajenos a la plataforma. Para conocer el tratamiento de sus datos o su derecho de desistimiento, consulte nuestra <Link href="/politica-de-privacidad" className="text-spanish-gold hover:underline">Política de Privacidad</Link> y la <Link href="/politica-de-reembolso" className="text-spanish-gold hover:underline">Garantía de Reembolso</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Legislación Aplicable y Jurisdicción</h2>
            <p>
              Para la resolución de cualquier controversia relativa a este sitio web o a la contratación de nuestros <Link href="/planes" className="text-spanish-gold hover:underline">planes de suscripción</Link>, será de aplicación la legislación española, sometiéndose las partes a los juzgados y tribunales competentes conforme a la normativa de consumidores y usuarios.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
