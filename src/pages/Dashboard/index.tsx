import React from 'react';

import { Typography, Box, Toolbar } from '@material-ui/core';

import CardPosts from '../../components/CardPosts';

const posts = [
  {
    id: 1,
    title: 'Teste',
    description:
      ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    id: 2,
    title: 'Teste2',
    description:
      ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
];
const Dashboard: React.FC = () => {
  return (
    <Box p={8}>
      <Toolbar />
      <Typography variant="h4" color="textSecondary">
        Novidades
      </Typography>
      {posts.map(post => (
        <Box mb="10px" mt="10px">
          <CardPosts posts={post} />
        </Box>
      ))}
    </Box>
  );
};

export default Dashboard;
