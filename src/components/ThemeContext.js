// ThemeContext.js
import React from 'react';

// Create a new context with initial theme state
const ThemeContext = React.createContext({
    theme: 'light',
    toggleTheme: () => null,
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
