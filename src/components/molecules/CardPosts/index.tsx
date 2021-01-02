import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    width: '70vw',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    width: 300,
  },
}));

interface Posts {
  post: {
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
  };
}

const Index: React.FC<Posts> = ({ post }: Posts) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="/images/no_image.png"
        title="Contemplative Reptile"
        className={classes.media}
      />
      <CardActionArea>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.description}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ShareIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Index;
