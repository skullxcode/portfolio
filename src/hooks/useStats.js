import { useTheme } from '../context/ThemeContext';

export const useStats = (githubUsername, cfUsername) => {
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'e8e8e8' : '1a1c1c';
  const titleColor = theme === 'dark' ? 'ffffff' : '000000';
  const chartColor = '000000'; // Hardcoded to black because we use dark:invert on the image
  const cfTheme = theme === 'dark' ? 'dark' : 'graywhite';

  return {
    codeforcesUrl: `https://codeforces-readme-stats.vercel.app/api/card?username=${cfUsername}&theme=${cfTheme}&disable_animations=false&show_icons=true&force_username=true`,
    githubLanguagesUrl: `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&hide_border=true&bg_color=00000000&title_color=${titleColor}&text_color=${textColor}`,
    githubStatsUrl: `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&bg_color=00000000&title_color=${titleColor}&text_color=${textColor}&icon_color=${titleColor}`,
    githubStreakUrl: `https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&hide_border=true&background=00000000&ring=${titleColor}&fire=${titleColor}&currStreakNum=${textColor}&sideNums=${textColor}&currStreakLabel=${textColor}&sideLabels=${textColor}&dates=${textColor}`,
    githubActivityGraphUrl: `https://ghchart.rshah.org/${chartColor}/${githubUsername}`
  };
};
