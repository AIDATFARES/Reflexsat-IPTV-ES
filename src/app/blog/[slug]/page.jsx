import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Tv,
  CheckCircle2,
} from 'lucide-react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { blogArticles } from '../../../data/blogData';

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }) {
  const article = blogArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Artículo no encontrado' };

  return {
    title: `${article.title} | Reflexsat IPTV`,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://www.reflexsat.es/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://www.reflexsat.es/blog/${article.slug}`,
      type: 'article',
      images: [
        {
          url: '/images/og-image.svg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default function BlogArticlePage({ params }) {
  const article = blogArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Article Schema JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: 'https://www.reflexsat.es/images/og-image.svg',
    datePublished: '2026-01-15T08:00:00+01:00',
    dateModified: '2026-03-29T10:00:00+01:00',
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://www.reflexsat.es',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reflexsat IPTV',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.reflexsat.es/images/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.reflexsat.es/blog/${article.slug}`,
    },
  };

  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: article.category, href: '/blog' },
          { label: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      {/* Header */}
      <header className="mb-10 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-spanish-red/10 text-spanish-redBright border border-spanish-red/20">
            {article.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="w-20 h-1 spanish-flag-line" />

        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2 border-b border-white/10 pb-6">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-spanish-gold" />
            <span>{article.author}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-spanish-redBright" />
            <span>{article.date}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-spanish-gold" />
            <span>{article.readTime}</span>
          </span>
        </div>
      </header>

      {/* Article Content */}
      <div
        className="prose prose-invert max-w-none space-y-6 text-gray-300 text-base leading-relaxed
        [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:tracking-tight [&>h2]:mt-10 [&>h2]:mb-4
        [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-spanish-gold [&>h3]:mt-6 [&>h3]:mb-3
        [&>p]:leading-relaxed [&>p]:mb-4
        [&_a]:text-spanish-gold [&_a]:underline hover:[&_a]:text-spanish-redBright [&_a]:font-medium transition-colors
        [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:my-4
        [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>ol]:my-4
        [&>strong]:text-white"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Article In-Content Promo Box */}
      <div className="my-12 glass-card rounded-2xl p-6 sm:p-8 border border-spanish-red/30 bg-gradient-to-r from-dark-900 to-dark-950 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <span className="text-xs font-bold text-spanish-gold uppercase tracking-wider">
            Recomendación de Reflexsat
          </span>
          <h3 className="text-xl font-bold text-white">¿Listo para probar el servicio líder en España?</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Activación garantizada en 5 minutos y <Link href="/politica-de-reembolso" className="text-spanish-gold underline hover:text-spanish-redBright">7 días de garantía incondicional de reembolso</Link>. Solicita tu <Link href="/contacto?plan=prueba-gratis" className="text-spanish-gold underline hover:text-spanish-redBright">prueba gratuita</Link> o revisa nuestras <Link href="/instalacion" className="text-spanish-gold underline hover:text-spanish-redBright">guías de instalación</Link>.
          </p>
        </div>
        <Link
          href="/planes"
          className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-spanish-red to-spanish-redBright shadow-glow-red hover:shadow-lg transition-all whitespace-nowrap flex-shrink-0"
        >
          Ver planes y precios →
        </Link>
      </div>

      {/* Related Articles */}
      <div className="border-t border-white/10 pt-12 mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-white">Artículos Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((rel) => (
            <Link
              key={rel.slug}
              href={`/blog/${rel.slug}`}
              className="glass-card p-5 rounded-2xl border border-white/5 hover:border-spanish-red/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold text-spanish-gold uppercase tracking-wider block mb-2">
                  {rel.category}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-spanish-gold transition-colors line-clamp-2 mb-2 leading-snug">
                  {rel.title}
                </h3>
              </div>
              <span className="text-xs text-spanish-redBright font-semibold pt-3 flex items-center gap-1">
                <span>Leer artículo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
