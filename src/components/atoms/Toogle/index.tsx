
import React from 'react';
import {Label,Input,Slider} from './styles';

interface Props {
    onChange?:any;
}

const Index: React.FC<Props> = props => {

    const handleInput = ()=>{
      props.onChange && props.onChange();
    }

    return (
      <>
          <Label className="switch">
            <Input 
              type="checkbox"
              onChange={handleInput}
            />
            <Slider className="slider round"></Slider>
          </Label>
      </>
    );
}

export default Index;