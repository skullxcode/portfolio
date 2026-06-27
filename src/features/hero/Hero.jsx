import React from 'react';
import heroImage from '../../assets/hero.webp';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-gutter pt-8 pb-section-gap-mobile md:pt-12 md:pb-section-gap">
      <div className="w-full md:w-7/12 flex flex-col items-center text-center md:items-start md:text-left gap-6 md:gap-4">
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 justify-center md:justify-start items-center md:items-start border-b border-outline-variant/30 pb-6 w-full">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-label-mono font-label-mono text-on-surface-variant">Codeforces Rank</div>
            <div className="text-body-md font-body-md text-primary mt-1">Pupil</div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="text-label-mono font-label-mono text-on-surface-variant">Open Source</div>
            <div className="text-body-md font-body-md text-primary mt-1">Contributing to Open Source</div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="text-label-mono font-label-mono text-on-surface-variant flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Currently Working On
            </div>
            <div className="text-body-md font-body-md text-primary mt-1">AI Projects & CP</div>
          </div>
        </div>
        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary leading-tight mt-2">Ujjwal Jain</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-md mx-auto md:mx-0">— Building clean interfaces on a foundation of logic. Solving logical puzzles in code and design.</p>
        <a href="#about" className="pt-6 md:pt-8 text-label-mono font-label-mono flex items-center gap-2 text-on-surface-variant cursor-pointer hover:text-primary transition-colors">
          Scroll down <span className="material-symbols-outlined text-sm">arrow_downward</span>
        </a>
      </div>
      <div className="w-full md:w-5/12 flex justify-center md:justify-end">
        <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-[4/5] md:aspect-[3/4] bg-surface-container-high dark:bg-white rounded-2xl md:rounded overflow-hidden shadow-lg md:shadow-none">
          <img
            className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
            alt="skullx avatar"
            src={heroImage}
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
