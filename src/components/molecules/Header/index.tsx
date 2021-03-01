import React from 'react';
import LogoOne from '../../atoms/LogoOne';
import Toogle from '../../atoms/Toogle';
import { Container } from './styles';

const Index: React.FC = () => {
  return (
    <Container>
      <LogoOne />
      <Toogle />
    </Container>
  );
};

export default Index;
