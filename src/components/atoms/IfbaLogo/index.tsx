
import React from 'react';
import {Container,Text,TextPrimary,TextSecondary} from './styles';
import Ifba from '../Ifba';

export interface Props {
    logoSize?: number | null;
    textSize?: number | null;
    circleColor?: String | null;
    squareColor?: String | null;
    primaryColor?: String | null;
    secondaryColor?: String | null;
  }

const Index: React.FC<Props> = props => {
      return (
        <>
            <Container>
              <Ifba width={props.logoSize} cColor={props.circleColor} sColor={props.squareColor}/>
              <Text width={props.textSize}>
                <TextPrimary color={props.primaryColor}>
                  Instituto Federal de
                </TextPrimary>
                <TextPrimary color={props.primaryColor}>
                  Educação, Ciência e Tecnologia
                </TextPrimary>
                <TextSecondary color={props.secondaryColor}>
                  BAHIA
                </TextSecondary>
                <TextSecondary color={props.secondaryColor}>
                  Campus Vitória da Conquista
                </TextSecondary>
              </Text>
            </Container>
        </>
      );
    }

export default Index;