
import React from 'react';
import {Container} from './styles';
import LogoOne from '../../atoms/LogoOne';
import Toogle from '../../atoms/Toogle';

interface Props {
  onChange?:any;
}

const Index: React.FC<Props> = props => {
      return (
        <>
          <Container>
            <LogoOne/>
            <Toogle onChange={props.onChange}/>
          </Container>
        </>
      );
    }

export default Index;