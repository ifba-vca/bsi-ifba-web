import React, { useState, useRef } from 'react';
import {Container,Header,Footer,Name,Type,Ch} from './styles';
import {Discipline} from '../../../interfaces/components/atoms';
import MatrixDetail from '../MatrixDetail'

const Index: React.FC<Discipline> = (props) => {
  const [modal, setmodal] = useState("");
  const modalRef = useRef(null)

  const showModal = () => {
    setmodal("show")
    document.querySelectorAll('a').forEach((input) => {
      input.addEventListener("click", closeModal)
    });
    document.getElementById("close")!.addEventListener("click", reallycloseModal)
  }
  const closeModal = (event:any) => {
    // @ts-ignore
    const contain = modalRef.current!.contains(event.target);
    if (!contain) {
      setmodal("")
      document.querySelectorAll('a').forEach((input) => {
        input.removeEventListener("click", closeModal)
        input.removeEventListener("click", reallycloseModal)
      });
    }
  }
  const reallycloseModal = () => {
    setmodal("")
    console.log("oush")
    document.querySelectorAll('a').forEach((input) => {
      input.removeEventListener("click", closeModal)
      input.removeEventListener("click", reallycloseModal)
    });
  }

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
      <MatrixDetail className={modal} name={props.name} close={reallycloseModal} modalRef={modalRef}/>
    </>
  );
}

export default Index;
