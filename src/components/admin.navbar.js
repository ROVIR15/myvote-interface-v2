import React from 'react'
import {useMainState} from '../reducers';
import {Grid, Link, Paper} from '@material-ui/core'
import {useStyles} from '../assets/classes'

function Box7(){
    const classes = useStyles();
    const [state, dispatch]= useMainState();

    function handleLogout(){
      dispatch({type: "LOGOUT"});
    }
  
    return(
        <Grid item direction="row" style={{display: 'flex'}}>
          <Paper elevation={3} square={false} className={classes.box7} style={{width: '73%', position: 'absolute', zIndex: '99', borderRadius: '10px'}}>          
            <Grid container direction="row" justify="flex-end">
              <Link onClick={handleLogout} style={{fontStyle: "none"}} className={classes.boxTitleStyle1}>KELUAR</Link>
            </Grid>
          </Paper>
        </Grid>
    )
}

export default Box7;
