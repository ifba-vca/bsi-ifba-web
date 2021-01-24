
import React from 'react';
import {Container} from './styles';
import LogoOne from '../../atoms/LogoOne';
import Toogle from '../../atoms/Toogle';


const Index: React.FC = () => {
      return (
        <>
          <Container>
            <LogoOne/>
            <Toogle/>
          </Container>
        </>
      );
    }

export default Index;