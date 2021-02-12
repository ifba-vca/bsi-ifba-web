
import React from 'react';
import {Container, Link} from './styles';
import IfbaLogo from '../../atoms/IfbaLogo';


const Index: React.FC = () => {
      return (
        <>
          <Container>
            <h1>Site realizado por alunos do curso de Sistemas de Informação.</h1>
            <Link 
              href="https://portal.ifba.edu.br/conquista"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IfbaLogo 
                logoSize={55}
                textSize={9}
              />
            </Link>
          </Container>
        </>
      );
    }

export default Index;