import React from 'react';
import Home from './pages/Home';
import Styles from './Styles';
import Header from '../src/components/molecules/Header';

function App() {
  const handleTheme = () =>{ console.log('works!'); }
  return (
    <>
      <Styles/>
      <Header onChange={handleTheme}/>
      <Home/>
    </>
  );
}

export default App;
