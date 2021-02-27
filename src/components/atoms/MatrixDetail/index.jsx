import React from 'react';
import {Container} from './styles';

interface Props {
  modalRef?: any | null;
  className?: any | null;
}

const Index: React.FC<Props> = props => {
  return (
    <>
      <Container ref={props.modalRef}>
        <p> modal</p>
      </Container>
    </>
  );
}

export default Index;
