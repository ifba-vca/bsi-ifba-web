
import React,{useState} from 'react';
import {Container,Modal,Button,ButtonContainer} from './styles';
import LogoOne from '../../atoms/LogoOne';
import Toogle from '../../atoms/Toogle';
import Navigation from '../Navigation';


const Index: React.FC = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState("close");

    const closeOptions = () => {
        if(isOpen){
            setOptions("close")
            setIsOpen(false)
        }else{
            setOptions("")
            setIsOpen(true)
        }
      }

      return (
        <>
            <Container>
                <LogoOne small/>
                <Navigation mobile/>
                <ButtonContainer>
                    <Modal className={options}>
                        <Toogle />
                    </Modal>
                    <Button onClick={closeOptions} className="fa fa-ellipsis-v"  aria-hidden="true"/>
                </ButtonContainer>
            </Container>
        </>
      );
    }

export default Index;