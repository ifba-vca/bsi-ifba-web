import React from 'react';
import TagInformation from '../../atoms/TagInformation';
import LogoOne from '../../atoms/LogoOne';
import Toogle from '../../atoms/Toogle';
import { Container,DiscordInfo } from './styles';

const Index: React.FC = () => {
  return (
    <>
      <TagInformation close>
        <DiscordInfo>
          <i className="fab fa-discord"></i>
          Conheça a nossa comunidade no discord <a href="https://discord.gg/yCGUYTmV" target="_blank" rel="noreferrer">aqui</a>
        </DiscordInfo>
      </TagInformation>
      <Container>
      <LogoOne />
      <Toogle />
    </Container>
    </>
  );
};

export default Index;
