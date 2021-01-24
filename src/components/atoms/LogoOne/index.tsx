
import React from 'react';
import {Logo,Title} from './styles';
import BsiLogo from '../../../util/logo.png';

const Index: React.FC = () => {
      return (
        <>
            <Logo src={BsiLogo}/>
            <Title>IFBA BSI</Title>
        </>
      );
    }

export default Index;