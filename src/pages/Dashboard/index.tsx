import React, { useEffect } from 'react';

import { Typography, Box, Toolbar } from '@material-ui/core';
import api from '../../services/api';

import CardPosts from '../../components/CardPosts';

interface Post {
  id: number;
  title: string;
  description: string;
  category: {
    id: number;
    name: string;
  };
  tags: {
    id: number;
    name: string;
  };
  author: string;
  created_at: string;
  updated_at: string;
}

const Dashboard: React.FC = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    async function getPosts() {
      const { data } = await api.get('posts');
      setPosts(data.results);
      console.log(data.results);
      return data;
    }

    getPosts();
  }, []);

  return (
    <Box p={8}>
      <Toolbar />
      <Typography variant="h4" color="textSecondary">
        Novidades
      </Typography>
      {posts.map((post: Post) => (
        <Box key={post.id} mb="10px" mt="10px">
          <CardPosts post={post} />
        </Box>
      ))}
    </Box>
  );
};

export default Dashboard;
