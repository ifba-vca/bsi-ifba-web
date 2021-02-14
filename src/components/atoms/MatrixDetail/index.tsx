import React from 'react';
import {Container,Content,Close} from './styles';
import {Discipline} from '../../../interfaces/components/atoms';

interface Props {
  modalRef?: any | null;
  className?: any | null;
  close:  any | null;
  discipline: Discipline |null;
}

const Index: React.FC<Props> = props => {
  const {close,discipline} = props
  return (
    <>
      <Container ref={props.modalRef} className={props.className}>
        <Content>
          <p>{discipline?.name}</p>
          <p>{discipline?.type}</p>
          <p>{discipline?.h_total}</p>
          <p>{discipline?.id}</p>
          <p>{discipline?.h_weekly}</p>
          <p>{discipline?.teacher}</p>
        </Content>
        <Close id="close" onClick={()=>close()}>X</Close>
      </Container>
    </>
  );
}

export default Index;
