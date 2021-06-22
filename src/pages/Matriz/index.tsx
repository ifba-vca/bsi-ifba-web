
import React from 'react';
import {Container} from './styles';
import Section from '../../components/atoms/Section';
import MatrixCourse from '../../components/molecules/MatrixCourse';
import MatrixSubtitle from '../../components/atoms/MatrixSubtitle';
import curricularMatrix from '../../util/data/matriz.json';
import {Course} from '../../interfaces/components/atoms'
import Page from '../../components/organisms/Page';

const matrix:Course = curricularMatrix;

const Index: React.FC = props => {
      return (
        <Page>
            <Container>
            <Section title="Matriz Curricular">
              <MatrixCourse semesters={matrix.semesters} />
              <MatrixSubtitle/>
            </Section>
            </Container>
        </Page>
      );
    }

export default Index;