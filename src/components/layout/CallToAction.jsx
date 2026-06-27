import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-24 text-center max-w-2xl mx-auto border-t border-outline-variant/30">
      <h2 className="text-headline-md font-headline-md text-primary mb-4">Got a Vision? Let's Bring It to Life!</h2>
      <p className="text-body-md font-body-md text-on-surface-variant mb-8">
        I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea.
      </p>
      <a href="mailto:ujjwaljain146@gmail.com" className="text-label-mono font-label-mono text-primary border-b border-primary pb-1 inline-flex items-center gap-1 hover:opacity-70 transition-opacity">
        Reach Out <span className="material-symbols-outlined text-sm">arrow_outward</span>
      </a>
    </section>
  );
};

export default CallToAction;
