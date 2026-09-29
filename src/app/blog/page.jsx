'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { blogCategories, blogArticles } from '../../data/blogData';

export default function BlogIndexPage() {
  const [selectedCat, setSelectedCat] = useState('Todos');

  const filteredArticles = blogArticles.filter((article) => {
    if (selectedCat === 'Todos') return true;
    return article.category === selectedCat;
  });

  const featuredArticle = blogArticles.find((a) => a.featured) || blogArticles[0];
  const regularArticles = filteredArticles.filter((a) => a.slug !== featuredArticle.slug);

  return (
    <div className="pt-4 pb-12 sm:pt-6 sm:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Blog & Noticias IPTV', href: '/blog' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold bg-spanish-gold/10 text-spanish-gold border border-spanish-gold/20 uppercase tracking-widest">
          Consejos, Guías y Novedades
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-spanish-red via-spanish-redBright to-spanish-gold">Reflexsat IPTV España</span>
        </h1>
        <div className="w-24 h-1 spanish-flag-line mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Artículos especializados, comparativas de reproductores para tus <Link href="/dispositivos" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">dispositivos compatibles</Link>, tutoriales de <Link href="/instalacion" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">configuración paso a paso</Link> y recomendaciones para sacar el máximo rendimiento a nuestros <Link href="/planes" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">planes de suscripción IPTV</Link> o contactar con nuestro <Link href="/contacto" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">soporte técnico</Link>.
        </p>

        {/* Category Pills */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
          {blogCategories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCat === cat
                  ? 'bg-spanish-red text-white shadow-glow-red'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article Banner */}
      {selectedCat === 'Todos' && featuredArticle && (
        <div className="mb-16">
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-spanish-red/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group shadow-2xl overflow-hidden"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-spanish-gold/20 text-spanish-gold border border-spanish-gold/30">
                  ⭐ Destacado
                </span>
                <span className="text-xs text-gray-400 font-semibold">{featuredArticle.category}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-spanish-gold transition-colors tracking-tight leading-snug">
                {featuredArticle.title}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                {featuredArticle.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-spanish-redBright" />
                  <span>{featuredArticle.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-spanish-gold" />
                  <span>{featuredArticle.readTime}</span>
                </span>
                <span>• {featuredArticle.author}</span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-spanish-red to-spanish-redBright shadow-glow-red group-hover:scale-105 transition-all">
                  <span>Leer artículo completo</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-dark-900">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt || featuredArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </Link>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {(selectedCat === 'Todos' ? regularArticles : filteredArticles).map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/5 hover:border-spanish-red/40 flex flex-col justify-between group"
          >
            <div>
              {/* Article Card Thumbnail */}
              {article.image && (
                <div className="relative aspect-video w-full overflow-hidden bg-dark-900 border-b border-white/5">
                  <Image
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold text-spanish-gold bg-dark-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-spanish-gold/30">
                      {article.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-spanish-gold transition-colors mb-3 tracking-tight line-clamp-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3 mb-2">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span>{article.author}</span>
              <span className="font-bold text-spanish-redBright group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Leer más</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Blog Bottom Help Banner */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 text-center max-w-3xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-white">¿Tienes alguna duda sobre qué app instalar o qué plan elegir?</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Consulta nuestras <Link href="/faq" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">preguntas más frecuentes</Link>, revisa la compatibilidad de tus <Link href="/dispositivos" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">aparatos y Smart TV</Link> o escríbenos directamente a través de nuestro canal de <Link href="/contacto" className="text-spanish-gold font-medium underline hover:text-spanish-redBright">atención y soporte 24/7</Link>.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/planes"
            className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-spanish-red to-spanish-redBright shadow-glow-red hover:shadow-lg transition-all"
          >
            Ver Planes de Suscripción →
          </Link>
          <Link
            href="/contacto?plan=prueba-gratis"
            className="px-6 py-3 rounded-xl font-bold text-xs text-spanish-gold bg-spanish-gold/10 border border-spanish-gold/30 hover:bg-spanish-gold/20 transition-all"
          >
            Solicitar Prueba Gratis 24h
          </Link>
        </div>
      </div>
    </div>
  );
}
