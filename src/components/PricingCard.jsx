import Link from 'next/link';
import { Check, Flame, Shield, ArrowRight } from 'lucide-react';

export default function PricingCard({ plan }) {
  const whatsappUrl = plan.ctaLink?.startsWith('https://wa.me/')
    ? plan.ctaLink
    : `https://wa.me/447882781998?text=${encodeURIComponent(
        `Hola Reflexsat IPTV, deseo contratar el ${plan.name} (${plan.devices} - ${plan.price}€).`
      )}`;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 group ${
        plan.isPopular
          ? 'pricing-card-popular bg-gradient-to-b from-dark-800 to-dark-900 scale-100 lg:-translate-y-2'
          : 'pricing-card-regular glass-card border border-white/10'
      }`}
    >
      {/* Popular Badge with subtle floating animation */}
      {plan.isPopular && (
        <div className="popular-badge-anim absolute -top-3.5 left-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-spanish-red via-spanish-redBright to-spanish-red text-white text-xs font-black tracking-wider uppercase shadow-lg border border-white/20 flex items-center gap-1.5 z-10">
          <Flame className="w-3.5 h-3.5 fill-current text-spanish-gold flame-anim" />
          <span>{plan.badge || 'Más Popular'}</span>
        </div>
      )}

      {!plan.isPopular && plan.badge && (
        <div className="inline-block self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 text-spanish-gold text-xs font-bold mb-3 transition-colors group-hover:border-spanish-gold/30">
          {plan.badge}
        </div>
      )}

      <div>
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-spanish-gold transition-colors duration-200">
            {plan.name}
          </h3>
          <span className="text-xs font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
            {plan.devices}
          </span>
        </div>

        {/* Pricing Numbers */}
        <div className="flex items-baseline gap-2 mt-4 mb-1">
          <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            {plan.price} €
          </span>
          {plan.originalPrice && (
            <span className="text-base text-gray-400 line-through">
              {plan.originalPrice} €
            </span>
          )}
        </div>
        <div className="text-xs font-medium text-spanish-gold mb-6">
          {plan.monthlyEquivalent}
        </div>

        <div className="w-full h-px bg-white/10 mb-6 group-hover:bg-spanish-red/30 transition-colors" />

        {/* Feature List */}
        <ul className="space-y-3 text-sm text-gray-300 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 transition-colors group-hover:text-gray-200">
              <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-center flex items-center justify-center gap-2 cursor-pointer btn-interactive ${
            plan.isPopular
              ? 'btn-shine btn-glow-pulse bg-gradient-to-r from-spanish-red to-spanish-redBright hover:from-spanish-redBright hover:to-spanish-red text-white shadow-glow-red hover:shadow-2xl'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-spanish-red/50 hover:text-white hover:shadow-lg'
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
        </a>
        <div className="mt-3 text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-spanish-gold" />
          <span>Garantía de reembolso de 7 días</span>
        </div>
      </div>
    </div>
  );
}
