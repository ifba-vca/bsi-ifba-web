
import React from 'react';
import { Props } from '../../atoms/Ifba';
import {Container} from './styles';

const Index: React.FC<Props> = props => {
      return (
        <>
          <Container>
            {props.children}
          </Container>
        </>
      );
    }

export default Index;