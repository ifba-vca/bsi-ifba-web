
import React from 'react';
import {Container,SubContainer,Title} from './styles';

interface Props {
    title?: String | null;
  }

const Index: React.FC<Props> = props => {
      return (
        <>
          {props.title? (
                <Container>
                    <Title>{props.title}</Title>
                    <SubContainer>
                      {props.children}
                    </SubContainer>
                </Container>
          ):(
            <Container className="column">
                {props.children}
            </Container>
          )}
        </>
      );
    }

export default Index;