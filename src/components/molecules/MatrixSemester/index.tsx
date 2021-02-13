
import React from 'react';
import {Container,TitleContainer,Title} from './styles';
import MatrixDiscipline from '../../atoms/MatrixDiscipline';
import {Semester} from '../../../interfaces/components/atoms';

const Index: React.FC<Semester> = props => {
  return (
    <>
      <Container>
        <TitleContainer><Title>{props.name}</Title></TitleContainer>
        {props.disciplines ? props.disciplines.map(item => (
          <MatrixDiscipline
            id = {item.id}
            name = {item.name}
            h_total = {item.h_total}
          />
        )) : (<div></div>)}
      </Container>
    </>
  );
}

export default Index;
