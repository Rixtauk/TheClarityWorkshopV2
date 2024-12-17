import React from 'react';
import { Volume2 } from 'lucide-react';

const scrollToPricing = (e: React.MouseEvent) => {
  e.preventDefault();
  const pricingSection = document.querySelector('#pricing');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#e7e7e7] text-[#2f3857]">
      <div className="absolute top-8 left-8">
        <img
          src="https://www.dropbox.com/scl/fi/pyk18qtsbjf7ke5xn7rmi/Main-Logo-Black-V2.png?rlkey=ls326jwilxju7hy08xqnyxckf&st=snot4one&raw=1"
          alt="The Clarity Workshop"
          className="h-5 md:h-8 object-contain"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight text-black max-w-4xl flex flex-col items-center">
          <span className="flex items-center gap-2">
            Feeling <span className="bg-[#FF7F50] text-black px-4 py-1 rounded-lg inline-block transform -rotate-2">Stuck?</span>
          </span>
          Let's Change That.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-black max-w-3xl uppercase tracking-tight px-4">
          The Clarity Workshop: Your Roadmap to Unstuck, Unstoppable You.
        </p>
        <div className="w-full max-w-4xl bg-white/50 rounded-xl p-3 md:p-6 shadow-lg mx-4">
          <div className="bg-[#2f3857] text-white font-semibold text-center py-3 rounded-t-lg mb-3 flex items-center justify-center gap-2">
            <Volume2 className="w-5 h-5" />
            CLICK BELOW TO WATCH FIRST!
          </div>
          <div className="relative pb-[56.25%] rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/LAOAXdtnDBw"
              title="The Clarity Workshop Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center px-4">
          <button
            onClick={scrollToPricing}
            className="bg-[#2f3857] text-white px-8 md:px-16 py-4 md:py-6 rounded-2xl font-bold text-2xl md:text-4xl hover:bg-[#3a435d] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 w-full md:w-auto"
          >
            GET ACCESS NOW
            <div className="text-base md:text-lg font-normal mt-1">Just $197 Today</div>
          </button>
          <div className="mt-4 text-base md:text-lg">
            <span className="text-gray-500">Retail: <span className="line-through">$997</span></span>
            <span className="text-[#2f3857] ml-2 font-semibold">Save 80%</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2f3857]" />
    </section>
  );
}