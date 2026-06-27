import React from 'react';

const AutomationBanner = () => {
  return (
    <section className="w-full bg-primary text-on-primary py-24 px-margin-page-mobile md:px-margin-page relative overflow-hidden my-section-gap-mobile md:my-section-gap">
      <div 
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      ></div>
      <div className="max-w-container-max mx-auto flex flex-col items-center text-center relative z-10">
        <div className="text-label-mono font-label-mono text-on-primary/60 mb-4">[ Agentic Automation ]</div>
        <h2 className="text-headline-lg font-headline-lg text-surface max-w-2xl mb-6">n8n Agentic Automation Workflow</h2>
        <p className="text-body-md font-body-md text-surface/80 max-w-xl mb-8">
          Take advantage of intelligent workflows to automate your design and development needs with advanced n8n setups.
        </p>
        <a href="mailto:ujjwaljain146@gmail.com" className="px-6 py-3 border border-surface text-surface text-label-mono font-label-mono rounded hover:bg-surface hover:text-primary transition-colors flex items-center gap-2">
          Let's talk <span className="material-symbols-outlined text-sm">arrow_outward</span>
        </a>
      </div>
    </section>
  );
};

export default AutomationBanner;
