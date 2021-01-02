import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Box } from '@material-ui/core';
import {PageListInterface} from '../../../interfaces/pages';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

interface DrawerInterface {
  openMenu: boolean;
  pages: PageListInterface;
}

const Index: React.FC<DrawerInterface> = props => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      open={props.openMenu}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Toolbar>
        <Box>
          <Typography variant="subtitle1" color="textSecondary">
            Sistemas de Informação
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            IFBA - Vitória da Conquista
          </Typography>
        </Box>
      </Toolbar>
      {
        props.pages.map((item,index)=>(<>
          <Divider />
          <List>
            {item.map((item, index) => (
              <Link to={item.navigation}>
                <ListItem button key={item.title}>
                    <ListItemIcon>
                      {item.icon && item.icon}
                    </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </>))
      }
    </Drawer>
  );
};

export default Index;
