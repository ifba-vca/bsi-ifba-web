import React, { useState } from 'react';
import Home from './pages/Home';
import Styles from './Styles';
import Header from '../src/components/molecules/Header';

function App() {
  const [dark,setdark] = useState<boolean>(true);
  const handleTheme = () =>{ setdark(!dark); }
  return (
    <>
      <Styles dark={dark}/>
      <Header onChange={handleTheme}/>
      <Home/>
    </>
  );
}

export default App;
