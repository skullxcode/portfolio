import React from 'react';

const StatCard = ({ title, icon, className, children }) => {
  return (
    <div className={`${className || 'md:col-span-12'} bg-surface-container rounded-2xl p-8 border border-outline-variant/10 flex flex-col justify-center items-center hover:bg-surface-container-high transition-colors shadow-sm`}>
      <h3 className="text-label-mono font-label-mono text-on-surface-variant mb-6 w-full text-left flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">{icon}</span> {title}
      </h3>
      {children}
    </div>
  );
};

export default StatCard;
