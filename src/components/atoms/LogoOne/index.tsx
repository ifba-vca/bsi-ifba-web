
import React from 'react';
import {Container,Logo,Title} from './styles';
import BsiLogo from '../../../util/png/logo.png';

interface Props{
  small?: boolean | false;
}

const Index: React.FC<Props> = props => {
      return (
        <>
          <Container>
            <Logo small={props.small} src={BsiLogo}/>
            <Title small={props.small}>IFBA BSI</Title>
          </Container>
        </>
      );
    }

export default Index;