
import React, { useState }  from 'react';
import {Container,TitleContainer,Title} from './styles';
import MatrixDiscipline from '../../atoms/MatrixDiscipline';
import {Semester} from '../../../interfaces/components/atoms';

const Index: React.FC<Semester> = props => {
  const [requirement, setrequirement] = useState<String>("");

  const updateValue = (value: String) => {
    console.log(value)
    setrequirement(value)
  }

  return (
    <>
      <Container>
        <TitleContainer><Title>{props.name}</Title></TitleContainer>
        {props.disciplines ? props.disciplines.map(item => (
          <MatrixDiscipline
            discipline = {item}
            onChangeValue = {updateValue}
            isRequiredCall = {requirement === item.required_for}
          />
        )) : (<div></div>)}
      </Container>
    </>
  );
}

export default Index;
