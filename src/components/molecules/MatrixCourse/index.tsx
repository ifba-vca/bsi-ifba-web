
import React from 'react';
import {Container} from './styles';
import MatrixSemester from '../MatrixSemester';
import {Course} from '../../../interfaces/components/atoms';

const Index: React.FC<Course> = props => {
  return (
    <>
      <Container>
        {props.semesters ? props.semesters.map(item => (
          <MatrixSemester
            name = {item.name}
            disciplines = {item.disciplines}
          />
        )) : (<div></div>)}
      </Container>
    </>
  );
}

export default Index;
