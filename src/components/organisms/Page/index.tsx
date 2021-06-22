
import React from 'react';
import {Container} from './styles';
import Header from '../../molecules/Header';
import Footer from '../../molecules/Footer';
import BottomBar from '../../molecules/BottomBar';


const Index: React.FC = props => {
      return (
        <>
            <Header/>
            <Container>
                {props.children}
            </Container>
            <Footer/>
            <BottomBar/>
        </>
      );
    }

export default Index;