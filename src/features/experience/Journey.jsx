import React from 'react';
import StatWidget from '../../components/common/StatWidget';
import { useStats } from '../../hooks/useStats';

const Journey = () => {
  const {
    codeforcesUrl,
    githubLanguagesUrl,
    githubStatsUrl,
    githubStreakUrl,
    githubActivityGraphUrl
  } = useStats('skullxcode', 'skullx');

  return (
    <section id="experience" className="py-section-gap-mobile md:py-section-gap">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
        <div>
          <div className="text-label-mono font-label-mono text-on-surface-variant mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span> Statistics
          </div>
          <h2 className="text-headline-lg font-headline-lg text-primary mb-4">Experience & Stats</h2>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">
            My progress and contributions across algorithmic platforms and open source, tracked in real-time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <StatWidget
          containerClass="md:col-span-12"
          title="CF Rating"
          icon="trending_up"
          contentUrl={codeforcesUrl}
        />

        <StatWidget
          containerClass="md:col-span-5"
          title="Top Languages"
          icon="code"
          contentUrl={githubLanguagesUrl}
        />

        <StatWidget
          containerClass="md:col-span-7"
          title="GitHub Stats"
          icon="analytics"
          contentUrl={githubStatsUrl}
        />

        <StatWidget
          containerClass="md:col-span-12"
          title="Contribution Streak"
          icon="local_fire_department"
          contentUrl={githubStreakUrl}
        />

        <div className="md:col-span-12 bg-surface-container rounded-2xl p-8 border border-outline-variant/10 flex flex-col justify-center items-center hover:bg-surface-container-high transition-colors shadow-sm">
          <h3 className="text-label-mono font-label-mono text-on-surface-variant mb-6 w-full text-left flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">calendar_month</span> Activity Graph
          </h3>
          <div className="w-full overflow-x-auto pb-2 flex justify-start md:justify-center">
            <img
              className="w-full min-w-[700px] max-w-[900px] object-contain opacity-90 hover:opacity-100 transition-opacity dark:invert dark:brightness-110"
              src={githubActivityGraphUrl}
              alt="Activity Graph stats"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
