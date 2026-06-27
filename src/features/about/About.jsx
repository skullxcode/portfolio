import React from 'react';
import aboutImage from '../../assets/about.png';

const About = () => {
  return (
    <section id="about" className="py-section-gap-mobile lg:py-section-gap flex flex-col lg:flex-row gap-12 lg:gap-gutter relative">
      <div className="w-full lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
        <h2 className="text-headline-lg font-headline-lg text-primary">About Me</h2>
        <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
          I am a developer who builds clean, responsive user interfaces on a solid foundation of logic and algorithmic thinking. I have a strong focus on greedy algorithms, math-based logic, and algorithmic problem-solving.
        </p>
        <div className="flex flex-col items-center lg:items-start gap-3 pt-2 w-full">
          <div className="text-label-mono font-label-mono text-on-surface-variant">
            <span className="text-primary block lg:inline mb-1 lg:mb-0">Education:</span> 2nd Yr CS & AI/ML @ Newton School of Technology
          </div>
          <div className="text-label-mono font-label-mono text-on-surface-variant">
            <span className="text-primary block lg:inline mb-1 lg:mb-0">Languages:</span> Python, C++, JavaScript, HTML, CSS
          </div>
          <div className="text-label-mono font-label-mono text-on-surface-variant">
            <span className="text-primary block lg:inline mb-1 lg:mb-0">Automation & AI:</span> n8n, Multi-Agent Systems, GPT-4, Tavily API
          </div>
          <div className="text-label-mono font-label-mono text-on-surface-variant">
            <span className="text-primary block lg:inline mb-1 lg:mb-0">Frontend & Tools:</span> React, Git, GitHub
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 pt-4">
          <span className="px-4 py-2 border border-outline-variant text-on-surface-variant rounded-full text-label-mono font-label-mono">Problem-Solving</span>
          <span className="px-4 py-2 border border-outline-variant text-on-surface-variant rounded-full text-label-mono font-label-mono">Greedy Algorithms</span>
          <span className="px-4 py-2 border border-outline-variant text-on-surface-variant rounded-full text-label-mono font-label-mono">AI Integration</span>
        </div>
      </div>

      {/* Right Side Collage */}
      <div className="w-full lg:w-7/12 relative flex flex-col lg:block gap-6 mt-4 lg:mt-0 lg:min-h-[550px] xl:min-h-[600px]">

        {/* Stats Block */}
        <div className="order-2 lg:order-none relative lg:absolute lg:top-0 lg:left-[5%] bg-surface-container p-6 xl:p-8 rounded-2xl lg:rounded-lg w-full lg:w-[48%] shadow-sm z-20 text-center lg:text-left">
          <span className="material-symbols-outlined mb-4 text-on-surface-variant">code</span>
          <div className="text-headline-md font-headline-md text-primary">330+</div>
          <div className="text-label-mono font-label-mono text-on-surface-variant mt-2">Competitive programming problems solved</div>
        </div>

        {/* Portrait Image */}
        <div className="order-1 lg:order-none relative lg:absolute lg:top-[28%] lg:left-[35%] w-full max-w-[280px] sm:max-w-sm lg:max-w-none lg:w-[38%] xl:w-[32%] aspect-square bg-surface-container-high dark:bg-white rounded-2xl lg:rounded overflow-hidden shadow-lg lg:shadow-sm z-10 mx-auto lg:mx-0">
          <img
            className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
            alt="skullx about portrait"
            src={aboutImage}
          />
        </div>

        {/* Text Box */}
        <div className="order-3 lg:order-none relative lg:absolute lg:bottom-0 lg:right-[5%] xl:lg:right-[5%] bg-surface p-6 border border-outline-variant/30 rounded-2xl lg:rounded w-full lg:w-[65%] xl:w-[55%] shadow-sm z-30 space-y-4">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-sm mt-1">add_circle</span>
            <p className="text-body-md font-body-md text-on-surface-variant text-sm text-left">With passion for learning, I specialize in creating intuitive, user-focused solutions that solve real-world problems.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-sm mt-1">add_circle</span>
            <p className="text-body-md font-body-md text-on-surface-variant text-sm text-left">I thrive on working closely with teams, blending creativity with strategy to bring visions to life through thoughtful code.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
