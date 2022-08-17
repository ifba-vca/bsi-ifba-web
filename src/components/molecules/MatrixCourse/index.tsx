
import React, { useState } from 'react';
import {Container} from './styles';
import MatrixSemester from '../MatrixSemester';
import {Course} from '../../../interfaces/components/atoms';

const Index: React.FC<Course> = props => {
  const [requirement, setrequirement] = useState<String>("");
  return (
    <>
      <Container>
        {props.semesters ? props.semesters.map(item => (
          <MatrixSemester
            name = {item.name}
            disciplines = {item.disciplines}
            onUpdateRequired = {setrequirement}
            requirement = {requirement}
          />
        )) : (<div></div>)}
      </Container>
    </>
  );
}

export default Index;
