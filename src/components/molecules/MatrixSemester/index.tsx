
import React from 'react';
import {Container,TitleContainer,Title} from './styles';
import MatrixDiscipline from '../../atoms/MatrixDiscipline';
import {Semester} from '../../../interfaces/components/atoms';



const showRequirements = (requ : String) => {console.log(requ)}

const Index: React.FC<Semester> = props => {
  return (
    <>
      <Container>
        <TitleContainer><Title>{props.name}</Title></TitleContainer>
        {props.disciplines ? props.disciplines.map(item => (
          <MatrixDiscipline
            discipline = {item}
            onChangeValue = {showRequirements}
          />
        )) : (<div></div>)}
      </Container>
    </>
  );
}

export default Index;
