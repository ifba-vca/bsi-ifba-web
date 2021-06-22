
import React from 'react';
import {Container} from './styles';
import Header from '../../molecules/Header';


const Index: React.FC = props => {
      return (
        <>
            <Header/>
            <Container>
                {props.children}
            </Container>
        </>
      );
    }

export default Index;