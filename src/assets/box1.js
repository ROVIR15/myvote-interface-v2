import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { useStyles } from './classes.js'

function Box1() {
    const classes = useStyles();

    return (
        <Grid item direction="row" style={{display: 'flex'}} justify='center'>
          <Paper elevation={2} className={classes.box1}>
            <div>
            </div>
            <div>
              <h3 className={classes.textStyle} style={{fontSize: '24px', margin: '0'}}> LABEL NAME </h3>
              <p className={classes.textStyle} style={{fontSize: '18px', margin: '0'}}> qwerty lorem ipsum </p>
            </div>
          </Paper>        
        </Grid>
    )
}

export default Box1;