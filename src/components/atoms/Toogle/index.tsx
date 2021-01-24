
import React from 'react';
import {Label,Input,Slider} from './styles';


const Index: React.FC = () => {
      return (
        <>
            <Label className="switch">
              <Input type="checkbox"/>
              <Slider className="slider round"></Slider>
            </Label>
        </>
      );
    }

export default Index;