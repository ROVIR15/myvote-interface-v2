import React from 'react'
import {Paper} from '@material-ui/core'
import {useStyles} from './classes'

function Box2(){
    const classes = useStyles();
    
    return(
          <Paper elevation={2} className={classes.box2B}>
            <div>
              <h3 className={classes.textStyle} style={{fontSize: '24px', margin: '0', color: '#fff'}}> LABEL NAME </h3>
              <p className={classes.textStyle} style={{fontSize: '18px', margin: '0', color: '#fff'}}> qwerty lorem ipsum </p>
            </div>
          </Paper>
    )
}

export default Box2;