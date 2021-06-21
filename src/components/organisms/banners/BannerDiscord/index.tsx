import React from 'react';
import { Container,DevsImage,SubContainer,Title,Content,Link } from './styles';
import CodersGif from '../../../../util/gif/coders.gif';


const Index: React.FC = props => {
  return (
    <Container>
        <SubContainer>
          <Title>
            Dividir para conquistar...
          </Title>
          <Content>
            Conheça nossa comunidade de alunos e professores, participe de projetos, atividades, tire dúvidas e interaja!
          </Content>
          <Content>
            Acesse o nosso canal no discord agora mesmo no link abaixo:
          </Content>
          <Link href="https://discord.gg/yCGUYTmV" target="_blank" rel="noreferrer">
            Clique aqui
          </Link>
        </SubContainer>
        <a href="https://br.pinterest.com/pin/204702745549241158/?autologin=true"  target="_blank" rel="noreferrer">
          <DevsImage src={CodersGif}/>
        </a>
    </Container>
  );
};

export default Index;
