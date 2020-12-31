import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import { Box } from '@material-ui/core';

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

interface PageInterface {
  title: string;
  navigation: string;
}

type PagesInterface = PageInterface[];

type PageListInterface = PagesInterface[];

interface DrawerInterface {
  openMenu: boolean;
  pages: PageListInterface;
}

const CustomDrawer: React.FC<DrawerInterface> = props => {
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
            {item.map((text, index) => (
              <ListItem button key={text.title}>
                <ListItemText primary={text.title} />
              </ListItem>
            ))}
          </List>
        </>))
      }
    </Drawer>
  );
};

export default CustomDrawer;
