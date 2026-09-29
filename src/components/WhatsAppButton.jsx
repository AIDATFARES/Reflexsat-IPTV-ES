'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <aside aria-label="Soporte y contacto rápido" className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group">
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-dark-900/95 border border-white/10 text-white text-xs font-semibold shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        ¿Necesitas ayuda? Escríbenos 24/7
      </span>
      <a
        href="https://wa.me/447882781998?text=Hola%20Reflexsat%20IPTV,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none relative"
        aria-label="Contactar por WhatsApp (+44 7882 781998)"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-spanish-gold rounded-full border-2 border-dark-900 animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
}
