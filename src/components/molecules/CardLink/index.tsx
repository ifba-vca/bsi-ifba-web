
import React from 'react';
import {Container,AtavarContainer,Avatar,Title} from './styles';
import Logo from '../../../util/png/logo.png';

interface Props {
    title?: string | null;
    icon?: string | null;
    href?: string | null;
  }

const Index: React.FC<Props> = props => {
      return (
        <>
            <Container 
                href={props.href ? props.href : "#"}
                rel="noopener noreferrer"
                target="_blank"
            >
                <AtavarContainer>
                    <Avatar src={props.icon ? props.icon : Logo}/>
                </AtavarContainer>
                <Title>{props.title}</Title>
            </Container>
        </>
      );
    }

export default Index;