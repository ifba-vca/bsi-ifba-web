
import React from 'react';
import {Container,Text,TextPrimary,TextSecondary} from './styles';
import Ifba from '../Ifba';

export interface Props {
    size?: number | null;
  }

const Index: React.FC<Props> = props => {
      return (
        <>
            <Container>
              <Ifba width={50}/>
              <Text>
                <TextPrimary>
                  Instituto Federal de
                </TextPrimary>
                <TextPrimary>
                  Educação, Ciência e Tecnologia
                </TextPrimary>
                <TextSecondary>
                  BAHIA
                </TextSecondary>
                <TextSecondary>
                  Campus Vitória da Conquista
                </TextSecondary>
              </Text>
            </Container>
        </>
      );
    }

export default Index;