import React from 'react';
import Hero from './components/Hero';
import LogoBanner from './components/LogoBanner';
import StorySelling from './components/StorySelling';
import IntroducingWorkshop from './components/IntroducingWorkshop';
import Testimonials from './components/Testimonials';
import WorkshopOutcomes from './components/WorkshopOutcomes';
import WorkshopIntro from './components/WorkshopIntro';
import Coach from './components/Coach';
import PressFeatures from './components/PressFeatures';
import Workshop from './components/Workshop';
import Reviews from './components/Reviews';
import Purchase from './components/Purchase';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <LogoBanner />
      <StorySelling />
      <IntroducingWorkshop />
      <WorkshopOutcomes />
      <Testimonials />
      <WorkshopIntro />
      <Coach />
      <PressFeatures />
      <Workshop />
      <Purchase />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
