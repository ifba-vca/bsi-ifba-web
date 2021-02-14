import React, { useState } from 'react';
import {Container,Header,Footer,Name,Type,Ch} from './styles';
import {Discipline} from '../../../interfaces/components/atoms';
import MatrixDetail from '../MatrixDetail'

const Index: React.FC<Discipline> = (props) => {
  const [modal, setmodal] = useState("");

  const showModal = () => {
    setmodal("show");
  }
  const closeModal = (event:any) => {
    setmodal("");
  };

  return (
    <>
      <Container onClick={showModal}>
        <Header>
          <Name>{props.name}</Name>
        </Header>
        <Footer>
          <Type color={props.type}>{props.id}</Type>
          <Ch>{props.h_total}</Ch>
        </Footer>
      </Container>
      <MatrixDetail className={modal} name={props.name} close={closeModal}/>
    </>
  );
}

export default Index;
