import React from 'react';
import {Container,Content,Close} from './styles';

interface Props {
  modalRef?: any | null;
  className?: any | null;
  name?: String | null;
  close?: any | null;
}

const Index: React.FC<Props> = props => {
  return (
    <>
      <Container ref={props.modalRef} className={props.className}>
        <Content><p>{props.name}</p></Content>
        <Close onClick={()=>props.close()}>X</Close>
      </Container>
    </>
  );
}

export default Index;
