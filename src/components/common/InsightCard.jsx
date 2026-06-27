import React from 'react';

const InsightCard = ({ tag, readTime, title, imageSrc }) => {
  return (
    <div className="group cursor-pointer">
      <div className="w-full aspect-video bg-surface-container rounded overflow-hidden mb-4">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          alt={title} 
          src={imageSrc}
          loading="lazy"
        />
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="px-2 py-0.5 bg-primary text-on-primary rounded text-[10px] font-label-mono tracking-wider uppercase">{tag}</span>
        <span className="text-label-mono font-label-mono text-on-surface-variant">{readTime}</span>
      </div>
      <h3 className="text-body-lg font-body-lg text-primary font-medium group-hover:underline">{title}</h3>
    </div>
  );
};

export default InsightCard;
