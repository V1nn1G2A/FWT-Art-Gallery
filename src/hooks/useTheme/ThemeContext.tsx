import { createContext, useContext, ReactNode, useMemo } from 'react';
import useTheme, { Theme } from './useTheme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: ReactNode }) {
  const { currentTheme, toggleTheme } = useTheme();

  const value = useMemo(
    () => ({ theme: currentTheme, toggleTheme }),
    [currentTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useThemeContext };
