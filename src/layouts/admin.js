import React from 'react';
import {SnackbarProvider} from 'notistack'

//Context
import {ElectionProvider} from '../reducers';

import { Container, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

import {adminPages} from './pages/admin'
import Sidebar from '../assets/sidebarA'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '0',
    paddingRight: '0'
  }
}));

function App() {
  const classes = useStyles();

  return (
      <ElectionProvider>
        <Container maxWidth="xl" className={classes.root} p={0} m={0}>
          <Grid container direction="row">
            <Sidebar/>
            {adminPages}
          </Grid>
        </Container>
      </ElectionProvider>
  );
}

export default App;