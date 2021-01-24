
import React from 'react';
import Header from '../../components/molecules/Header';
import Content from '../../components/molecules/Content';
import Footer from '../../components/molecules/Footer';
import BannerHome from '../../components/organisms/banners/BannerHome';

export interface Props {
    title?: String;
}

const Index: React.FC<Props> = (props) => {
      return (
        <>
          <Header/>
          <Content>
            <BannerHome/>
          </Content>
          <Footer/>
        </>
      );
    }

export default Index;