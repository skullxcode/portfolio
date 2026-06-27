import React from 'react';
import InsightCard from '../../components/common/InsightCard';
import { insights } from '../../data/portfolioData';

const Insights = () => {
  return (
    <section id="insights" className="py-section-gap-mobile md:py-section-gap">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="text-label-mono font-label-mono text-on-surface-variant mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span> Blogs
        </div>
        <h2 className="text-headline-lg font-headline-lg text-primary">Design Insights & Trends</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {insights.map((insight) => (
          <InsightCard 
            key={insight.title}
            title={insight.title}
            tag={insight.tag}
            readTime={insight.readTime}
            imageSrc={insight.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Insights;
