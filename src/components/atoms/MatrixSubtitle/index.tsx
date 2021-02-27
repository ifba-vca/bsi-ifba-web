import React from 'react';
import {Container,List,Title,Component} from './styles';

const Index: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Legendas</Title>
        <List>
          <Component className="magenta"><p>CCO <br/> ciência da computação</p></Component>
          <Component className="yellow"><p>MAT <br/> matemática</p></Component>
          <Component className="green"><p>COM <br/> complementar</p></Component>
          <Component className="orange"><p>HUM <br/> humanística</p></Component>
          <Component className="pink"><p>OPT <br/> optativa</p></Component>
          <Component className="blue"><p>SUP <br/> suplementar</p></Component>
          <Component className="bluelight"><p>TEC <br/> tecnológica</p></Component>

        </List>
      </Container>
    </>
  );
}

export default Index;
