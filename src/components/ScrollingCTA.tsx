import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ScrollingCTA() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-center mt-16">
      <a
        href="#pricing"
        onClick={scrollToPricing}
        className="inline-flex items-center gap-2 bg-white text-[#49506a] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Access The Workshop Now
        <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
}