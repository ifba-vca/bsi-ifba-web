import React from 'react';

import { makeStyles, Box } from '@material-ui/core';
import Header from '../Header';
import CustomDrawer from '../CustomDrawer';
import Dashboard from '../Dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(true);

  return (
    <div className={classes.root}>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Box display="flex">
        <CustomDrawer openMenu={openMenu} />
        <Dashboard />
      </Box>
    </div>
  );
};

export default Home;
