
import React from 'react';
import {Container,Logo,Title} from './styles';
import BsiLogo from '../../../util/png/logo.png';

const Index: React.FC = () => {
      return (
        <>
          <Container>
            <Logo src={BsiLogo}/>
            <Title>IFBA BSI</Title>
          </Container>
        </>
      );
    }

export default Index;