import React from 'react';

export default function IntroducingWorkshop() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3857] mb-4 tracking-tight uppercase">
            Introducing
          </h2>
          <h1 className="text-6xl md:text-7xl font-bold text-[#2f3857] mb-6 tracking-tight uppercase">
            The Clarity Workshop
          </h1>
          <h2 className="text-2xl font-bold text-[#c8b6a7] mb-12 tracking-tight uppercase">
            The Breakthrough You've Been Waiting For
          </h2>
          
          <div className="bg-[#2f3857] text-white p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,_0,_0,_0.2)] transform hover:-translate-y-1 transition-all duration-500">
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              This isn't just another course or podcast—it's an active, transformative experience that combines thousands of coaching hours into one proven framework.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Uncover Your Truth</h3>
                <p className="text-white/80">Discover who you are today and what's truly holding you back</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Define Your Path</h3>
                <p className="text-white/80">Create your vision with precision and purpose</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Take Action</h3>
                <p className="text-white/80">Commit to a plan that aligns with your vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}