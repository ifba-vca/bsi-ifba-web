import React, { useContext } from 'react';
import { Label, Input, Slider } from './styles';
import ThemeContext from '../../../contexts/Theme/ThemeContext';

const Index: React.FC = () => {
  const { isDark, handleTheme } = useContext(ThemeContext);

  return (
    <Label>
      <Input type="checkbox" onChange={handleTheme} />
      <Slider icon={isDark ? 'nights_stay' : 'wb_sunny'}></Slider>
    </Label>
  );
};

export default Index;
