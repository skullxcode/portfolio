import React from 'react';
import ProjectCard from '../../components/common/ProjectCard';
import { projects } from '../../data/portfolioData';

const Portfolio = () => {
  return (
    <section id="works" className="py-section-gap-mobile md:py-section-gap">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="text-label-mono font-label-mono text-on-surface-variant mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span> Portfolio
        </div>
        <h2 className="text-headline-lg font-headline-lg text-primary">Latest Works</h2>
      </div>

      <div className="mb-8 cursor-pointer bg-primary text-on-primary hover:opacity-90 transition-opacity p-8 md:p-10 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6" onClick={() => window.open('https://github.com/skullxcode', '_blank')}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-surface opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-surface"></span>
            </span>
            <span className="text-label-mono font-label-mono text-surface/80">Currently Working On</span>
          </div>
          <h3 className="text-headline-md font-headline-md font-medium mb-2">Competitive Programming & AI Projects</h3>
          <p className="text-body-md font-body-md text-surface/80 max-w-2xl">Currently focusing on Codeforces (Pupil) and building Multi-Agent AI systems.</p>
        </div>
        <span className="material-symbols-outlined text-surface">arrow_outward</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <a href="https://github.com/skullxcode" target="_blank" rel="noreferrer" className="text-label-mono font-label-mono text-primary flex items-center gap-2 hover:opacity-70 transition-opacity">
          Check out More <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
