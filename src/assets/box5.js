import React from 'react'
import {Paper} from '@material-ui/core'
import {useStyles} from './classes'

function Box5(){
    const classes = useStyles();
    
    return(
        <Paper elevation={3} square={false} className={classes.box5}>
          <div>
            <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
          </div>
          <div style={{display: "flex", margin: "0.2em 0"}}>
            <div className={classes.chartBox}>
            </div>
            <div className={classes.chartLegend}>
            </div>
          </div>
        </Paper>
    )
}

export default Box5;