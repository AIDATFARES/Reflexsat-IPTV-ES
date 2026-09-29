import Link from 'next/link';
import { Check, Flame, Shield, ArrowRight } from 'lucide-react';

export default function PricingCard({ plan }) {
  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
        plan.isPopular
          ? 'bg-gradient-to-b from-dark-800 to-dark-900 border-2 border-spanish-redBright shadow-glow-red scale-100 lg:-translate-y-2'
          : 'glass-card border border-white/10 hover:border-white/20'
      }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-spanish-red to-spanish-redBright text-white text-xs font-black tracking-wider uppercase shadow-md flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 fill-current text-spanish-gold" />
          <span>{plan.badge || 'Más Popular'}</span>
        </div>
      )}

      {!plan.isPopular && plan.badge && (
        <div className="inline-block self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 text-spanish-gold text-xs font-bold mb-3">
          {plan.badge}
        </div>
      )}

      <div>
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
          <span className="text-xs font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg">
            {plan.devices}
          </span>
        </div>

        {/* Pricing Numbers */}
        <div className="flex items-baseline gap-2 mt-4 mb-1">
          <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            {plan.price} €
          </span>
          {plan.originalPrice && (
            <span className="text-base text-gray-500 line-through">
              {plan.originalPrice} €
            </span>
          )}
        </div>
        <div className="text-xs font-medium text-spanish-gold mb-6">
          {plan.monthlyEquivalent}
        </div>

        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Feature List */}
        <ul className="space-y-3 text-sm text-gray-300 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link
          href={plan.ctaLink}
          className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all duration-200 ${
            plan.isPopular
              ? 'bg-gradient-to-r from-spanish-red to-spanish-redBright hover:from-spanish-redBright hover:to-spanish-red text-white shadow-glow-red hover:shadow-lg'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20'
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="mt-3 text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-spanish-gold" />
          <span>Garantía de reembolso de 7 días</span>
        </div>
      </div>
    </div>
  );
}
