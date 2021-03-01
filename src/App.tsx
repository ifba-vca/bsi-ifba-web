import React, { useState } from 'react';
import Home from './pages/Home';
import Styles from './Styles';
import Header from '../src/components/molecules/Header';
import ThemeProvider from './contexts/Theme/ThemeProvider';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const handleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider value={{ isDark, handleTheme }}>
      <Styles dark={isDark} />
      <Header />
      <Home />
    </ThemeProvider>
  );
};

export default App;
