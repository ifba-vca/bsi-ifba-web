import React from 'react';

import { Typography, Box, Toolbar } from '@material-ui/core';

const Dashboard: React.FC = () => {
  return (
    <Box p={8}>
      <Toolbar />
      <Typography variant="h4" color="textSecondary">
        Home
      </Typography>
    </Box>
  );
};

export default Dashboard;
