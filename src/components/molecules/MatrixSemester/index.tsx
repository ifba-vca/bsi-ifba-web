
import React, { useState }  from 'react';
import {Container,TitleContainer,Title} from './styles';
import MatrixDiscipline from '../../atoms/MatrixDiscipline';
import {Semester} from '../../../interfaces/components/atoms';


const Index: React.FC<Semester> = props => {
  const [requirement, setrequirement] = useState<String>("");

  const updateValue = (value: String) => {
    console.log(value)
    props.onUpdateRequired(value)
    setrequirement(props.requirement!.toString())
  }

  return (
    <>
      <Container>
        <TitleContainer><Title>{props.name}</Title></TitleContainer>
        {props.disciplines ? props.disciplines.map(item => (
          <MatrixDiscipline
            discipline = {item}
            onChangeValue = {updateValue}
            isRequiredCall = {props.requirement === item.id}
          />
        )) : (<div></div>)}
      </Container>
    </>
  );
}

export default Index;
