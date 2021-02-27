
import React from 'react';
import Content from '../../components/molecules/Content';
import Footer from '../../components/molecules/Footer';
import BannerHome from '../../components/organisms/banners/BannerHome';
import Section from '../../components/atoms/Section';
import IfbaLogo from '../../components/atoms/IfbaLogo';
import MatrixCourse from '../../components/molecules/MatrixCourse';
import MatrixSubtitle from '../../components/atoms/MatrixSubtitle';
import ListCardLink from '../../components/molecules/ListCardLink';
import GSE from '../../util/png/gse.png';
import curricularMatrix from '../../util/data/matriz.json';
import {Course} from '../../interfaces/components/atoms'


export interface Props {
    title?: String;
}
interface Card {
  title?: string | null;
  icon?: string | null;
  href?: string | null;
}

const matrix:Course = curricularMatrix;

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
  },
  {
    title: "Revista TI Hoje",
    href: "https://www.youtube.com/c/RevistaTIHoje",
    icon: "https://yt3.ggpht.com/ytc/AAUvwnhVhnTsAnudUGQlnMZM06GfxtdM_9Xj4jk8smo3=s88-c-k-c0x00ffffff-no-rj"
  }
]
const eventos:Array<Card> = [
  {
    title: "Week IT - Semana da Tecnologia da Informação",
    href: "http://weekit.conquista.ifba.edu.br/w19/",
    icon: "http://weekit.conquista.ifba.edu.br/w19/wp-content/uploads/2019/10/cropped-logo-olho-branco-1.png"
  }
]

const Index: React.FC<Props> = (props) => {
      return (
        <>
          <Content>
            <BannerHome/>
            <Section title="Não é apenas programar...">
              <p>Seja criando um site, um aplicativo, cuidando de uma rede de internet, ou na sala de aula, estamos aqui para resolver problemas na área de Tecnologia da Informação. Analisamos dados, realizamos pesquisa de mercado, coletamos avaliações e validamos as melhores soluções para os usuários.</p>
              <p> No momento estamos construindo o conteúdo do nosso site mas você pode encontrar nosso calendário, matriz curricular e outras informações no portal oficial do IFBA - Vitória da Conquista.</p>
              <a
                href="https://portal.ifba.edu.br/feira-de-santana/ensino/curso/graduacoes/bsi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <br/>
                <br/>
                <br/>
                <IfbaLogo
                  logoSize={70}
                  textSize={12}
                  circleColor="--si-red-01"
                  squareColor="--si-green-01"
                  primaryColor="--si-green-01"
                  secondaryColor="--si-green-01"
                />
              </a>
            </Section>
            <Section title="Projetos">
              <ListCardLink cards={projetos}/>
            </Section>
            <Section title="Eventos">
              <ListCardLink cards={eventos}/>
            </Section>
            <Section title="Matriz Curricular">
              <MatrixCourse semesters={matrix.semesters} />
              <MatrixSubtitle/>
            </Section>
          </Content>
          <Footer/>
        </>
      );
    }

export default Index;
