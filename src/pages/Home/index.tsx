import React from 'react';

import { makeStyles, Box } from '@material-ui/core';
import Header from '../../components/organisms/Header';
import CustomDrawer from '../../components/organisms/CustomDrawer';
import Dashboard from '../../components/organisms/Dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}));

interface PageInterface {
  title: string;
  navigation: string;
}

type PagesInterface = PageInterface[];

type PageListInterface = PagesInterface[];

const Home: React.FC = () => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(true);
  const pages01: PageInterface[] = [
    {title:'Início',navigation:'inicio'},
    {title:'Apresentação',navigation:'inicio'},
    {title:'Notícias',navigation:'inicio'},
    {title:'Matriz Curricular',navigation:'inicio'},
  ];
  const pages02: PageInterface[] = [
    {title:'Início',navigation:'inicio'},
    {title:'Apresentação',navigation:'inicio'},
    {title:'Notícias',navigation:'inicio'},
    {title:'Matriz Curricular',navigation:'inicio'},
  ];
  const pages03: PageInterface[] = [
    {title:'Início',navigation:'inicio'},
    {title:'Apresentação',navigation:'inicio'},
    {title:'Notícias',navigation:'inicio'},
    {title:'Matriz Curricular',navigation:'inicio'},
  ];
  
  const pages: PageListInterface = [pages01,pages02,pages03];

  return (
    <div className={classes.root}>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Box display="flex">
        <CustomDrawer openMenu={openMenu} pages={pages} />
        <Dashboard title="Início">
          <p>Primeira versão do site de sistemas de informacão do IFBA de Vitória da Conquista.</p>
        </Dashboard>
      </Box>
    </div>
  );
};

export default Home;
