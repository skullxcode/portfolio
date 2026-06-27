import React from 'react';

const StatWidget = ({ title, icon, contentUrl, containerClass = "" }) => (
  <div className={`bg-surface-container rounded-2xl p-6 md:p-8 border border-outline-variant/10 flex flex-col justify-center items-center hover:bg-surface-container-high transition-colors shadow-sm ${containerClass}`}>
    <h3 className="text-label-mono font-label-mono text-on-surface-variant mb-6 w-full text-left flex items-center gap-2">
      <span className="material-symbols-outlined text-sm">{icon}</span> {title}
    </h3>
    <img
      className="max-w-full"
      src={contentUrl}
      alt={`${title} stats`}
    />
  </div>
);

export default StatWidget;
