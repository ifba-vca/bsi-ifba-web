
import React from 'react';
import {Container} from './styles';
import CardLink from '../CardLink';

interface Card {
    title?: string | null;
    icon?: string | null;
    href?: string | null;
}

interface Props {
    cards?:Array<Card> | null;
  }

const Index: React.FC<Props> = props => {
      return (
        <>
            <Container>
                {props.cards ? props.cards.map(item => (
                    <CardLink 
                        key = {item.title}
                        title = {item.title}
                        icon = {item.icon}
                        href = {item.href}
                    />
                )) : (<div></div>)}
            </Container>
        </>
      );
    }

export default Index;