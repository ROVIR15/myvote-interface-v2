import React, {createContext} from 'react';
import {useSnackbar, withSnackbar} from 'notistack'

//Context
import {VoterProvider, useMainState} from '../reducers'

import { Container, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

import {voterPages} from './pages/voter'
import Sidebar from '../assets/sidebar'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '0',
    paddingRight: '0'
  }
}));

function App(props) {

  const classes = useStyles();
  const [state, dispatch] = useMainState();
  const {enqueueSnackbar} = useSnackbar()

  function handleLogOut(){
    dispatch({type: "LOGOUT", loggedIn: false});
  }

  function something(){
    enqueueSnackbar("Occurs here", {variant: "info"})
  }

  return (
      <VoterProvider>
        <Container maxWidth="xl" className={classes.root} p={0} m={0}>
          <Grid container direction="row">
            <Sidebar logout={handleLogOut}/>
            {voterPages}
          </Grid>
        </Container>
      </VoterProvider>
  );
}

export default App;