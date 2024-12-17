import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Purchase() {
  const features = [
    "Lifetime access to workshop materials",
    "3 comprehensive modules with practical exercises",
    "Private community access",
    "Bonus: Personal clarity roadmap template",
    "30-day money-back guarantee"
  ];

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center transform hover:-translate-y-2 transition-all duration-500">
          <div className="bg-[#2f3857] text-white p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)] hover:shadow-[0_30px_60px_rgba(0,_0,_0,_0.4)] transition-all duration-500">
            <h2 className="text-4xl font-bold mb-4 tracking-tight uppercase font-['Helvetica Neue']">
              START YOUR CLARITY JOURNEY TODAY
            </h2>
            <p className="text-[#c8b6a6] text-2xl font-bold uppercase tracking-tight mb-8">
              Your Path To Transformation Begins Here
            </p>
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-gray-400 line-through text-2xl">$997</span>
              <span className="text-5xl font-bold transition-all duration-300 group-hover:scale-110">$197</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 justify-center">
                  <Check className="w-5 h-5 text-green-400 transform group-hover:scale-110 transition-transform duration-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://alex-kergall.mykajabi.com/offers/UYd9ForS/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c8b6a6] hover:bg-[#b9a696] text-[#2f3857] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Join the Workshop
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}