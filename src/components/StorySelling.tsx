import React from 'react';
import { Clock, Target, Lock } from 'lucide-react';

export default function StorySelling() {
  return (
    <section className="bg-[#1e2a47] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-0">
            WHY CLARITY FEELS SO GOOD
          </h2>
          <p className="text-[#c8b6a6] text-2xl md:text-3xl font-bold text-center mb-16 uppercase tracking-tight mt-2">
            (AND HOW IT TRANSFORMS YOUR LIFE)
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://www.dropbox.com/scl/fi/ik3md22zemnrs3viokhfo/A-Business-Man-Leaving-A-Corporate-Building-In-The.jpg?rlkey=xc3sxhwxclecf3e7w4ecdg4c1&raw=1"
                alt="Professional contemplating change"
                className="rounded-xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
            </div>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Picture this: You're sitting at your desk, scrolling aimlessly, or lying awake at night replaying the same question—What am I doing with my life?
              </p>
              
              <p className="text-xl leading-relaxed">
                You tell yourself you'll figure it out… someday. But months, maybe years, pass, and you're still stuck. You don't know what you want, or worse, you know but can't figure out how to get there.
              </p>
              
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <p className="italic text-lg">
                  Take Mark, for example. A 38-year-old architect, he came to me feeling lost, questioning his career and his next step. After completing the Clarity Workshop, Mark uncovered what was truly holding him back. Within six months, he was leading projects that aligned with his values—and for the first time, he felt alive again.
                </p>
              </div>
              
              <p className="text-2xl font-light">
                If you feel like Mark did, you're not alone. But you don't have to stay stuck.
              </p>
              
              <p className="text-2xl font-semibold text-[#c8b6a6]">
                The Clarity Workshop was designed to help people just like you find direction, take action, and transform their lives from the inside out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}