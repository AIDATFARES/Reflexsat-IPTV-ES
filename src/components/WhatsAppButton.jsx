'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <aside aria-label="Soporte y contacto rápido" className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group">
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-dark-900/95 border border-white/10 text-white text-xs font-semibold shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        ¿Necesitas ayuda? Escríbenos 24/7
      </span>
      <Link
        href="/contacto"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none"
        aria-label="Abrir chat de soporte y contacto en español"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </Link>
    </aside>
  );
}
