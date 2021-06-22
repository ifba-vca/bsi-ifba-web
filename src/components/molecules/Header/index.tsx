import React from 'react';
import TagInformation from '../../atoms/TagInformation';
import LogoOne from '../../atoms/LogoOne';
import Toogle from '../../atoms/Toogle';
import { Container,Content,DiscordInfo } from './styles';
import Navigation from '../Navigation';

const Index: React.FC = () => {
  return (
    <>
      <Container>
        <TagInformation close>
          <DiscordInfo>
            <i className="fab fa-discord"></i>
            Conheça a nossa comunidade no discord <a href="https://discord.gg/yCGUYTmV" target="_blank" rel="noreferrer">aqui</a>
          </DiscordInfo>
        </TagInformation>
        <Content>
          <LogoOne />
          <Navigation/>
          <Toogle />
        </Content>
      </Container>
    </>
  );
};

export default Index;
