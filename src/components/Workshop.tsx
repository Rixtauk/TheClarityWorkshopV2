import React from 'react';
import { Check, X } from 'lucide-react';
import ScrollingCTA from './ScrollingCTA';

export default function Workshop() {
  const idealFor = [
    "Professionals feeling stuck in their careers",
    "Individuals seeking meaningful life changes",
    "People ready to break free from limiting beliefs",
    "Those wanting to discover their true purpose"
  ];

  const notFor = [
    "People unwilling to do the inner work",
    "Those looking for quick fixes",
    "Individuals not ready to commit to change"
  ];

  return (
    <section className="bg-[#2f3857] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 tracking-tight uppercase font-['Helvetica Neue']">
          IS THIS WORKSHOP RIGHT FOR YOU?
        </h2>
        <p className="text-[#c8b6a6] text-2xl font-bold text-center mb-16 uppercase tracking-tight">
          Find Out If This Is Your Next Step
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white/10 p-8 rounded-xl shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)] hover:shadow-[0_30px_60px_rgba(0,_0,_0,_0.4)] transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Check className="w-8 h-8 text-green-400" />
              Perfect For:
            </h3>
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 p-8 rounded-xl shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)] hover:shadow-[0_30px_60px_rgba(0,_0,_0,_0.4)] transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <X className="w-8 h-8 text-red-400" />
              Not For:
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ScrollingCTA />
      </div>
    </section>
  );
}