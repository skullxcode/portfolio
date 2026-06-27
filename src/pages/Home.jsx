import React from 'react';
import Hero from '../features/hero/Hero';
import About from '../features/about/About';
import Journey from '../features/experience/Journey';
import AutomationBanner from '../components/layout/AutomationBanner';
import Portfolio from '../features/portfolio/Portfolio';
import CallToAction from '../components/layout/CallToAction';

const Home = () => {
  return (
    <>
      <main className="flex-grow pt-32 max-w-container-max mx-auto w-full px-margin-page-mobile md:px-margin-page">
        <Hero />
        <About />
        <Journey />
      </main>
      <AutomationBanner />
      <div className="flex-grow max-w-container-max mx-auto w-full px-margin-page-mobile md:px-margin-page">
        <Portfolio />
        <CallToAction />
      </div>
    </>
  );
};

export default Home;
