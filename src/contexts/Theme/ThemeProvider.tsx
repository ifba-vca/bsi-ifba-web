import React, { ReactNode } from 'react';
import ThemeContext from './ThemeContext';

interface IValue {
  isDark: boolean;
  handleTheme: () => void;
}

interface IProps {
  children?: ReactNode;
  value: IValue;
}

const ThemeProvider: React.FC<IProps> = ({ children, value }: IProps) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
