import React from 'react';

import { makeStyles, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" color="textSecondary">
          Home
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
