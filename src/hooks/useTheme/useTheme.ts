import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  useEffect(() => {
    const isDarkTheme = window?.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const defaultTheme = isDarkTheme ? 'dark' : 'light';
    const localStorageTheme = localStorage.getItem('theme');

    const themeToApply = localStorageTheme
      ? (localStorageTheme as Theme)
      : defaultTheme;
    setCurrentTheme(themeToApply);
    document.body.classList.add(themeToApply);

    return () => {
      document.body.classList.remove(themeToApply);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);

    localStorage.setItem('theme', newTheme);
  };

  return { currentTheme, toggleTheme };
};

export default useTheme;
