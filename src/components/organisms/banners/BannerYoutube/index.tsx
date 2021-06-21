import React from 'react';
import { Container,DevsImage,SubContainer,Title,Content,Link } from './styles';
import TeachersGif from '../../../../util/gif/teachers.gif';


const Index: React.FC = props => {
  return (
    <Container>
        <a href="https://dribbble.com/shots/11271026-The-new-norm"  target="_blank" rel="noreferrer">
          <DevsImage src={TeachersGif}/>
        </a>
        <SubContainer>
          <Title>
            Revista TI Hoje!
          </Title>
          <Content>
            Nossos professores tiveram a incrível ideia de trazer conteúdos de TI para além das aulas, disponibilizando novidades, discursões, rodas de conversa e eventos. Se inscreva no canal, acompanhe e participe das novidades de tecnologia.
          </Content>
          <Link href="https://www.youtube.com/revistatihoje" target="_blank" rel="noreferrer">
            Clique aqui
          </Link>
        </SubContainer>
    </Container>
  );
};

export default Index;
