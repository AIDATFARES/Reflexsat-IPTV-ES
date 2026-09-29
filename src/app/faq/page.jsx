'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, HelpCircle, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import FaqAccordion from '../../components/FaqAccordion';
import { faqCategories, allFaqs } from '../../data/faqData';

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = allFaqs.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Preguntas Frecuentes', href: '/faq' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold bg-spanish-gold/10 text-spanish-gold border border-spanish-gold/20 uppercase tracking-widest">
          Centro de Ayuda y Respuestas
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Preguntas Frecuentes — <span className="text-transparent bg-clip-text bg-gradient-to-r from-spanish-red via-spanish-redBright to-spanish-gold">Reflexsat IPTV</span>
        </h1>
        <div className="w-24 h-1 spanish-flag-line mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Encuentra respuestas inmediatas a todas las dudas sobre activación de suscripciones, compatibilidad de reproductores, pagos seguros y velocidad de servidores en España.
        </p>

        {/* Search Bar */}
        <div className="pt-4 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por palabra clave (ej. Smart TV, fútbol, pago, cortes...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:outline-none focus:border-spanish-red transition-colors placeholder:text-gray-500 shadow-glass"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Category Pills */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-spanish-red text-white shadow-glow-red'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            Todas ({allFaqs.length})
          </button>
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-spanish-red text-white shadow-glow-red'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQs List */}
      <div className="mb-20">
        {filteredFaqs.length > 0 ? (
          <FaqAccordion items={filteredFaqs} includeSchema={true} />
        ) : (
          <div className="text-center py-12 glass-card rounded-2xl border border-white/5 space-y-3">
            <HelpCircle className="w-12 h-12 text-gray-500 mx-auto" />
            <h2 className="text-lg font-bold text-white">No se han encontrado preguntas</h2>
            <p className="text-sm text-gray-400">
              Prueba a buscar con otro término o consulta directamente a nuestro equipo de soporte.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-spanish-gold hover:underline pt-2"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="glass-card rounded-2xl p-8 border border-white/10 text-center space-y-4 max-w-2xl mx-auto bg-gradient-to-b from-dark-900 to-dark-950">
        <h2 className="text-2xl font-bold text-white">¿No has encontrado la respuesta que buscabas?</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Nuestro equipo técnico está a tu entera disposición para resolver cualquier pregunta técnica o comercial antes de contratar.
        </p>
        <div className="pt-2">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-spanish-red to-spanish-redBright shadow-glow-red hover:shadow-lg transition-all"
          >
            <span>Contactar con el equipo de soporte</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
