import React from 'react';

import { makeStyles, Box } from '@material-ui/core';
import Header from '../../molecules/Header';
import CustomDrawer from '../../molecules/CustomDrawer';
import ContentArea from '../../molecules/ContentArea';
import {PageInterface,PageListInterface} from '../../../interfaces/pages';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}));

type props = {
    title: string;
    children: React.ReactNode;
  }

const Index: React.FC<props> = props => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(true);
  const pages01: PageInterface[] = [
    {title:'Início',navigation:''},
    {title:'Matriz Curricular',navigation:'matriz_curricular'},
    {title:'Calendário Acadêmico',navigation:'calendario_academico'}
  ];
  
  const pages: PageListInterface = [pages01];

  return (
    <div className={classes.root}>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Box display="flex">
        <CustomDrawer openMenu={openMenu} pages={pages} />
        <ContentArea title={props.title}>
          {props.children}
        </ContentArea>
      </Box>
    </div>
  );
};

export default Index;
