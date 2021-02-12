
import React from 'react';
import Colors from './generic/Colors';
import Reset from './generic/Reset';
import BaseLight from './generic/BaseLight';
import BaseDark from './generic/BaseDark';

export interface Props {
  dark?: Boolean | null;
}

const Index: React.FC<Props> = props => {
      return (
        <>
         <Reset/>
         <Colors/>
         {props.dark ? <BaseDark/> : <BaseLight/>}
        </>
      );
    }

export default Index;