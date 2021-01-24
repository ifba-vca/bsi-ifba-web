
import React from 'react';
import Header from '../../components/molecules/Header';
import Content from '../../components/molecules/Content';
import Footer from '../../components/molecules/Footer';
import BannerHome from '../../components/organisms/banners/BannerHome';
import Section from '../../components/atoms/Section';
import ListCardLink from '../../components/molecules/ListCardLink';
import GSE from '../../util/gse.png';

export interface Props {
    title?: String;
}
interface Card {
  title?: string | null;
  icon?: string | null;
  href?: string | null;
}

const projetos:Array<Card> = [
  {
    title: "GSE - Grupo de Software Educacional",
    href: "http://gse.conquista.ifba.edu.br/softwares/",
    icon: GSE
  },
  {
    title: "Inq. Ifba - Inovação & Qualidade",
    href: "https://inq.conquista.ifba.edu.br/v1/",
    icon: "https://inq.conquista.ifba.edu.br/sistema/img/logo_full.png"
  }
]

const Index: React.FC<Props> = (props) => {
      return (
        <>
          <Header/>
          <Content>
            <BannerHome/>
            <Section title="Projetos">
              <ListCardLink cards={projetos}/>
            </Section>
            <Section title="Projetos">
              <ListCardLink cards={projetos}/>
            </Section>
          </Content>
          <Footer/>
        </>
      );
    }

export default Index;