import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="group cursor-pointer bg-surface-container hover:bg-surface-container-high transition-colors p-6 rounded-2xl border border-outline-variant/10 shadow-sm" onClick={() => window.open(link, '_blank')}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-body-lg font-body-lg text-primary font-medium">{title}</h3>
          <p className="text-body-md font-body-md text-on-surface-variant mt-1">{description}</p>
        </div>
        <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
      </div>
    </div>
  );
};

export default ProjectCard;
