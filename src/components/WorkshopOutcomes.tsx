import React from 'react';
import { Check } from 'lucide-react';

export default function WorkshopOutcomes() {
  const outcomes = [
    "Set clear, achievable goals that excite you",
    "Build better work-life balance and stop burning out",
    "Reconnect with what makes you happy and fulfilled",
    "Build meaningful momentum in your career and personal life",
    "Have the confidence to finally pursue a new career path",
    "Open up opportunities for promotions",
    "Escape the corporate hamster wheel and design your own path"
  ];

  return (
    <section className="bg-[#f5f5f5] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#2f3857] mb-16 tracking-tight uppercase">
            Workshop Outcomes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.slice(0, -1).map((outcome, index) => (
              <div
                key={index}
                className="bg-[#2f3857] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex items-start gap-4 group"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-6 h-6 text-[#4CAF50]" strokeWidth={3} />
                </div>
                <p className="text-white text-lg leading-tight">{outcome}</p>
              </div>
            ))}
            <div
              className="bg-[#2f3857] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex items-start gap-4 group md:col-span-2 lg:col-span-3 max-w-2xl mx-auto"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <Check className="w-6 h-6 text-[#4CAF50]" strokeWidth={3} />
              </div>
              <p className="text-white text-lg leading-tight">{outcomes[outcomes.length - 1]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}