import React, { createContext, useState, useEffect } from "react";

export type GlobalThemeContent = {
  theme: string
  setTheme: (c: string) => void
}

export const ThemeContext = createContext<GlobalThemeContent>({
  theme: 'light',
  setTheme: () => { }
});

export const ThemeProvider: React.FC<{ children: any }> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (<ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>);
}
