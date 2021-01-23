
import React from 'react';

export interface Props {
    title: String;
}

const Index: React.FC<Props> = (props) => {
      return (
        <>
                <h1>{props.title}</h1>
        </>
      );
    }

export default Index;