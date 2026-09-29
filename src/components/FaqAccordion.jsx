'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ items, includeSchema = true }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  // Structured Data JSON-LD for eligible FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof item.answer === 'string' ? item.answer.replace(/<[^>]*>?/gm, '') : '',
      },
    })),
  };

  return (
    <div className="space-y-4">
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-dark-800/80 border-spanish-red/40 shadow-sm'
                : 'glass-card border-white/5 hover:border-white/10'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-base text-white tracking-tight leading-snug">
                {item.question}
              </span>
              <span
                className={`p-1.5 rounded-lg bg-white/5 text-spanish-gold transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'rotate-180 bg-spanish-red/20 text-spanish-redBright' : ''
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>

            {isOpen && (
              <div
                className="px-5 pb-5 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3 [&_a]:text-spanish-gold [&_a]:font-semibold [&_a]:underline hover:[&_a]:text-white"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
