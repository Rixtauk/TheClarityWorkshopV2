import React from 'react';
import { ExternalLink } from 'lucide-react';

const pressClippings = [
  {
    url: "https://www.dropbox.com/scl/fi/kr7pf8rtb4cyla61p0n2k/newspaper1.jpeg?rlkey=fnfs9dt14nnl3k34afzin27jn&st=4ohijkvo&raw=1",
    alt: "Press feature in major publication"
  },
  {
    url: "https://www.dropbox.com/scl/fi/hgdj12qmv8y56lhg4lv5z/newspaper2.jpeg?rlkey=ut94h1qdl9oyktn5wjb3wzrhz&st=x45jip2a&raw=1",
    alt: "Leadership insights feature"
  },
  {
    url: "https://www.dropbox.com/scl/fi/3bbxskfoed1l18aabxtut/newspaper3.jpeg?rlkey=omgs8a9ct0ielytukayyh7r0i&st=36otf3eq&raw=1",
    alt: "Executive coaching spotlight"
  },
  {
    url: "https://www.dropbox.com/scl/fi/67rbf2ik9v8tnhuizs9kz/newspaper5.jpeg?rlkey=8cjhfpz4i0839xnrwcqa6dg94&st=thpntxuo&raw=1",
    alt: "Professional development feature"
  }
];

export default function PressFeatures() {
  return (
    <section className="bg-[#f5f5f5] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2f3857] mb-4 tracking-tight uppercase font-['Helvetica Neue']">
            MEDIA APPEARANCES
          </h2>
          <p className="text-[#c8b6a6] text-2xl font-bold uppercase tracking-tight mb-16">
            Alex's transformative approach has earned him frequent recognition in leading media outlets.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-wrap justify-center items-center">
            {pressClippings.map((clipping, index) => (
              <div
                key={index}
                className="group relative w-full sm:w-[45%] lg:w-[38%] mb-8 mx-4 hover:z-50"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'}) translateY(${index % 2 === 0 ? '20px' : '0'})`,
                  zIndex: index
                }}
              >
                <div className="relative aspect-video bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <img
                    src={clipping.url}
                    alt={clipping.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <a
                    href={clipping.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-[#2f3857] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#3b435d] transform translate-y-4 group-hover:translate-y-0 hover:scale-110 shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}