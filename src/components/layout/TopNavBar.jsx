import React, { useMemo, useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useTheme } from '../../context/ThemeContext';

const TopNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = useMemo(() => ['hero', 'about', 'experience', 'works', 'contact'], []);
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  const getLinkClasses = (sectionId) => {
    const baseClasses = "transition-all duration-150 cursor-pointer block hover:text-primary dark:hover:text-primary-fixed-dim";
    if (activeSection === sectionId) {
      return `${baseClasses} text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed scale-95`;
    }
    return `${baseClasses} text-on-surface-variant dark:text-on-tertiary-fixed-variant border-b-2 border-transparent`;
  };

  return (
    <nav className="bg-surface/80 backdrop-blur-xl text-on-surface dark:text-on-surface-variant fixed top-0 w-full z-50 border-b border-outline-variant/30 dark:border-outline-variant/40 py-4 transition-colors duration-300">
      <div className="max-w-container-max mx-auto px-margin-page-mobile md:px-margin-page flex justify-between items-center w-full">
        
        <div className="text-headline-md font-headline-md font-black tracking-tighter text-primary dark:text-primary-fixed">skullx</div>
        
        <ul className="hidden md:flex gap-8 items-center text-body-md font-body-md">
          <li><a href="#hero" className={getLinkClasses('hero')}>Home</a></li>
          <li><a href="#about" className={getLinkClasses('about')}>About</a></li>
          <li><a href="#experience" className={getLinkClasses('experience')}>Experience</a></li>
          <li><a href="#works" className={getLinkClasses('works')}>Works</a></li>
          <li><a href="#contact" className={getLinkClasses('contact')}>Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all duration-300 shadow-sm border border-outline-variant/20"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform duration-300 hover:rotate-12">
              {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
          
          <a href="mailto:ujjwaljain146@gmail.com" className="hidden sm:flex text-label-mono font-label-mono bg-primary text-on-primary px-4 py-2 rounded items-center gap-2 hover:opacity-80 transition-opacity">
            Reach Out <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-on-surface hover:text-primary transition-colors"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/30 dark:border-outline-variant/40 shadow-lg py-4 px-margin-page-mobile flex flex-col gap-4">
          <a href="#hero" onClick={() => setIsMenuOpen(false)} className={getLinkClasses('hero')}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className={getLinkClasses('about')}>About</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className={getLinkClasses('experience')}>Experience</a>
          <a href="#works" onClick={() => setIsMenuOpen(false)} className={getLinkClasses('works')}>Works</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className={getLinkClasses('contact')}>Contact</a>
          <a href="mailto:ujjwaljain146@gmail.com" className="sm:hidden text-label-mono font-label-mono bg-primary text-on-primary px-4 py-2 rounded flex justify-center items-center gap-2 hover:opacity-80 transition-opacity mt-2">
            Reach Out <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default TopNavBar;
