
import React from 'react';
import Header from '../../components/molecules/Header';
import Content from '../../components/molecules/Content';
import Footer from '../../components/molecules/Footer';

export interface Props {
    title: String;
}

const Index: React.FC<Props> = (props) => {
      return (
        <>
          <Header/>
          <h1>{props.title}</h1>
          <Content/>
          <Footer/>
        </>
      );
    }

export default Index;