import { createContext } from 'react';

const ThemeContext = createContext({
  isDark: true,
  handleTheme: () => {},
});

export default ThemeContext;
