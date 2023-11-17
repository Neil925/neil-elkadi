import React, { createContext, useState } from "react";

export type GlobalThemeContent = {
    theme: string
    setTheme: (c: string) => void
}

export const ThemeContext = createContext<GlobalThemeContent>({
    theme: 'light',
    setTheme: () => {}
});

export const ThemeProvider: React.FC<{ children: any }> = ({ children }) => {
    //local storage to save the theme preference
    const [theme, setTheme] = useState('light');

    return (<ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>);
}