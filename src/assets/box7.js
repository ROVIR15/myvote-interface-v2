import React from 'react'
import {Grid, Paper, Typography} from '@material-ui/core'
import {useStyles} from './classes'

function Box7(){
    const classes = useStyles();
    
    return(
        <Grid item direction="row" style={{display: 'flex'}}>
          <Paper elevation={3} square={false} className={classes.box7} style={{width: '73%', position: 'absolute', zIndex: '99', borderRadius: '10px'}}>          
            <Grid container direction="row" justify="flex-end">
              <Typography variant="button" className={classes.boxTitleStyle1}>KELUAR</Typography>
            </Grid>
          </Paper>
        </Grid>
    )
}

export default Box7;
