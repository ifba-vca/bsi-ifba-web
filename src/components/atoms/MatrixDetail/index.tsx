import React from 'react';
import {Container,Content,Close} from './styles';

interface Props {
  modalRef?: any | null;
  className?: any | null;
  name?: String | null;
  close:  any | null;
}

const Index: React.FC<Props> = props => {
  const {close} = props
  return (
    <>
      <Container ref={props.modalRef} className={props.className}>
        <Content><p>{props.name}</p></Content>
        <Close id="close" onClick={()=>close()}>X</Close>
      </Container>
    </>
  );
}

export default Index;
