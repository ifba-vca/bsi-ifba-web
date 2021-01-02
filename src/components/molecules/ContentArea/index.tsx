import React from 'react';

import { Typography, Box, Toolbar } from '@material-ui/core';

type GreetingProps = {
  title: string;
  children: React.ReactNode;
}

const Index: React.FC<GreetingProps> = props => {
  return (
    <Box p={8}>
      <Toolbar />
      <Typography variant="h4" color="textSecondary">
        {props.title}
      </Typography>
      <>{props.children}</>
    </Box>
  );
};

export default Index;
