'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Tv, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Planes IPTV', href: '/planes' },
    { label: 'Guía Instalación', href: '/instalacion' },
    { label: 'Dispositivos', href: '/dispositivos' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
            : 'bg-gradient-to-b from-dark-950/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Reflexsat IPTV Inicio">
            <div className="flex items-center transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/logo.svg"
                alt="Reflexsat IPTV España"
                width={200}
                height={50}
                priority
                className="w-48 h-auto object-contain"
                style={{ width: '190px', height: 'auto', maxHeight: '48px' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/planes"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-spanish-red to-spanish-redBright hover:from-spanish-redBright hover:to-spanish-red rounded-xl shadow-glow-red hover:shadow-lg btn-shine btn-interactive cursor-pointer group"
            >
              <span>Ver planes</span>
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-dark-900 border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Reflexsat IPTV"
                width={160}
                height={40}
                className="w-36 h-auto object-contain"
                style={{ width: '150px', height: 'auto', maxHeight: '40px' }}
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-4">
          <Link
            href="/planes"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center py-3.5 px-4 text-base font-bold text-white bg-gradient-to-r from-spanish-red to-spanish-redBright rounded-xl shadow-glow-red"
          >
            <span>Ver planes y ofertas</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-spanish-gold" />
            <span>Activación garantizada en 5 minutos</span>
          </div>
        </div>
      </div>
    </>
  );
}
