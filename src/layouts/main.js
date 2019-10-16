import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Container, Grid} from '@material-ui/core'

import NavBar from '../components/navbar'
import {pages} from './pages/main'

const useHomeStyle = makeStyles(theme => ({
  root: {
    paddingLeft: '0',
    paddingRight: '0',
  },
}));

function App(props) {
  const [navbar, setNavbar] = useState("fixed");

  const history = props.history.location.pathname
  useEffect(()=>{
    function handleChange(status){
      setNavbar(status)
    }

    switch(history){
      case '/home':
        return handleChange('none');
      case '/how-to':
        return handleChange('flex');
      case '/about-us':
        return handleChange('flex');
      case '/login':
        return handleChange('none');
      case '/register':
        return handleChange('none');
      default:
        return handleChange('fixed')
    }
  }, [history, navbar])

  const classes = useHomeStyle();
      return (
        <Container maxWidth="xl" className={classes.root} p={0} m={0}>
          <Grid container direction="row" style={{maxWidth: '1366px'}}>
            <NavBar display={navbar}/>
            {pages}
          </Grid>
        </Container>
      );
}

export default App;