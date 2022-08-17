import React, { useState, useRef } from 'react';
import {Container,Requirements,Extra,Header,Footer,Name,Type,Ch} from './styles';
import {Discipline} from '../../../interfaces/components/atoms';
import MatrixDetail from '../MatrixDetail'

interface Props {
  discipline: Discipline;
  onChangeValue: any;
  isRequiredCall: boolean;
}

const Index: React.FC<Props> = (props) => {
  const [modal, setmodal] = useState("");
  const [required, setrequired] = useState<boolean>(false);
  const modalRef = useRef(null)

  const {discipline,isRequiredCall} = props

  const showRequired = () => {
    props.onChangeValue(discipline.requirement)
    setrequired(isRequiredCall)
  }

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
      <Container yellow={discipline.requirement != null} isrequiredcall={isRequiredCall}>
        {discipline.requirement && (<Requirements onClick={showRequired}>Requisitos</Requirements>) }
        <Extra onClick={showModal}>
        <Header>
          <Name>{discipline.name}</Name>
        </Header>
        <Footer>
          <Type color={discipline.type}>{discipline.type}</Type>
          <Ch>{discipline.h_total}</Ch>
        </Footer>
        </Extra>
      </Container>
      <MatrixDetail className={modal} discipline={discipline} close={reallycloseModal} modalRef={modalRef}/>
    </>
  );
}

export default Index;
