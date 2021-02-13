
import React from 'react';
import {Container,Header,Footer,Name,Type,Ch} from './styles';
import BsiLogo from '../../../util/png/logo.png';
import {Discipline} from '../../../interfaces/components/atoms';

const Index: React.FC<Discipline> = (props) => {
  return (
    <>
      <Container>
        <Header>
          <Name>{props.name}</Name>
        </Header>
        <Footer>
          <Type>{props.id}</Type>
          <Ch>{props.h_total}</Ch>
        </Footer>
      </Container>
    </>
  );
}

export default Index;
