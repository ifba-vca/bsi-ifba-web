
import React,{useState} from 'react';
import {Container,ChildArea,Close} from './styles';

interface Props {
    close?: boolean|false;
  }  

const Index: React.FC<Props> = props => {
    const [tag, setTag] = useState("");

    const closeInfo = () => {
        setTag("close")
      }

      return (
        <>
          <Container className={tag}>
              <ChildArea>
                {props.children}
              </ChildArea>
              {props.close && (<Close onClick={closeInfo}>X</Close>)}
          </Container>
        </>
      );
    }

export default Index;