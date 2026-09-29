'use client';

import { useState } from 'react';
import { deviceTiers } from '../data/pricingData';
import PricingCard from './PricingCard';

export default function PricingPlansSection({ defaultDevices = 1 }) {
  const [selectedDevices, setSelectedDevices] = useState(defaultDevices);

  const currentTier =
    deviceTiers.find((tier) => tier.devices === selectedDevices) || deviceTiers[0];

  return (
    <div className="w-full">
      {/* Device Selector Tabs */}
      <div className="mb-10 flex flex-col items-center gap-3">
        <div className="inline-flex p-1.5 rounded-2xl bg-dark-950 border border-white/10 items-center gap-1.5 shadow-glass max-w-full overflow-x-auto">
          {deviceTiers.map((tier) => {
            const isActive = selectedDevices === tier.devices;
            return (
              <button
                key={tier.devices}
                type="button"
                onClick={() => setSelectedDevices(tier.devices)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer btn-interactive ${
                  isActive
                    ? 'bg-gradient-to-r from-spanish-red to-spanish-redBright text-white shadow-glow-red scale-105 z-10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tier.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Tier Subtitle */}
        <p className="text-xs sm:text-sm text-gray-400 text-center font-medium max-w-xl transition-all">
          <span className="text-spanish-gold font-bold">{currentTier.headline}:</span>{' '}
          {currentTier.description}
        </p>
      </div>

      {/* Pricing Cards Grid with smooth transition on tab change */}
      <div
        key={selectedDevices}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pricing-grid-anim"
      >
        {currentTier.plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
