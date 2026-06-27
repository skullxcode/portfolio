import React from 'react';
import { socialLinks } from '../../data/portfolioData';

const Footer = () => {
  const footerLinks = socialLinks.filter(link => link.platform !== 'Email');

  return (
    <footer id="contact" className="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container full-width py-section-gap-mobile md:py-section-gap mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start px-margin-page-mobile md:px-margin-page max-w-container-max mx-auto w-full gap-8 md:gap-12">
        <div className="flex flex-wrap gap-8 text-label-mono font-label-mono">
          {footerLinks.map((link, index) => (
            <a key={index} className="text-surface/60 hover:text-surface transition-opacity duration-200" href={link.url} target="_blank" rel="noreferrer">
              {link.platform}
            </a>
          ))}
        </div>
        <a href="mailto:ujjwaljain146@gmail.com" className="text-headline-md md:text-display-lg font-headline-md md:font-display-lg text-surface break-all md:text-right hover:opacity-80 transition-opacity cursor-pointer block">
          ujjwaljain146@gmail.com
        </a>
      </div>
      <div className="px-margin-page-mobile md:px-margin-page max-w-container-max mx-auto mt-16 pt-8 border-t border-surface/10 text-body-md font-body-md text-surface/60">
        © 2025 skullx. Built with architectural precision.
      </div>
    </footer>
  );
};

export default Footer;
