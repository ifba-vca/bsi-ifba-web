
import React from 'react';
import Content from '../../components/molecules/Content';
import Footer from '../../components/molecules/Footer';
import BannerHome from '../../components/organisms/banners/BannerHome';
import BannerDiscord from '../../components/organisms/banners/BannerDiscord';
import BannerYoutube from '../../components/organisms/banners/BannerYoutube';
import Section from '../../components/atoms/Section';
import IfbaLogo from '../../components/atoms/IfbaLogo';
import MatrixCourse from '../../components/molecules/MatrixCourse';
import MatrixSubtitle from '../../components/atoms/MatrixSubtitle';
import ListCardLink from '../../components/molecules/ListCardLink';
import curricularMatrix from '../../util/data/matriz.json';
import {Course} from '../../interfaces/components/atoms'
import dataEventos from '../../util/data/eventos.json';
import dataProjetos from '../../util/data/projetos.json';
import dataGrupos from '../../util/data/grupos_whatsapp.json';


export interface Props {
    title?: String;
}
interface Card {
  title?: string | null;
  icon?: string | null;
  href?: string | null;
}

const matrix:Course = curricularMatrix;

const projetos:Array<Card> = dataProjetos
const eventos:Array<Card> = dataEventos
const grupos:Array<Card> = dataGrupos

const Index: React.FC<Props> = (props) => {
      return (
        <>
          <Content>
            <BannerHome/>
            <Section>
              <BannerDiscord/>
            </Section>
            <Section>
              <BannerYoutube/>
            </Section>
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
            <Section title="Whatsapp">
              <ListCardLink cards={grupos}/>
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
