import React from 'react';
import { Container, TextContainer, Title, Subtitle } from './styles';
import GirlImage from '../../../atoms/Svg/GirlImage';

export interface Props {
  logoSize?: number | null;
}

const Index: React.FC<Props> = props => {
  return (
    <Container>
      <TextContainer>
        <Subtitle>Bacharelado em</Subtitle>
        <Title>Sistemas de Informação</Title>
        <Subtitle>IFBA - Vitória da Conquista</Subtitle>
      </TextContainer>
      <GirlImage />
    </Container>
  );
};

export default Index;
