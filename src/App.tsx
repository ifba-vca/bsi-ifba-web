import React, { useState } from 'react';
import Routes from './Routes';
import Styles from './Styles';
import ThemeProvider from './contexts/Theme/ThemeProvider';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const handleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider value={{ isDark, handleTheme }}>
      <Styles dark={isDark} />
      <Routes/>
    </ThemeProvider>
  );
};

export default App;
