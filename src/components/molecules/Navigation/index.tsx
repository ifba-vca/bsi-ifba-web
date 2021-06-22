
import React from 'react';
import {Container,Page,Icon} from './styles';
import rotas from '../../../util/data/rotas.json';


interface Navigation {
    name:string,
    icon:string,
    link:any,
}


interface Props{
    mobile?: boolean | false;
  }

const navigation:Array<Navigation> = rotas;

const Index: React.FC<Props> = props => {

      return (
        <>
            <Container>
                {navigation.map(page => (
                    <Page to={page.link} key={page.name}>
                        {props.mobile ? (<Icon className={page.icon} aria-hidden="true"/>) : page.name}
                    </Page>
                ))}
            </Container>
        </>
      );
    }

export default Index;