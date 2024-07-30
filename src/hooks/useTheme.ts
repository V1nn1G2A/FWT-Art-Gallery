import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  useEffect(() => {
    const isDarkTheme = window?.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const defaultTheme = isDarkTheme ? 'dark' : 'light';
    const localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme) {
      setCurrentTheme(localStorageTheme as Theme);
    } else {
      setCurrentTheme(defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { currentTheme, toggleTheme };
};

export default useTheme;
