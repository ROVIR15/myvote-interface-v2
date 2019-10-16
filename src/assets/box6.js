import React, {useReducer} from 'react'

//Context
import {electionState} from '../contexts/UserContext'

import {Paper} from '@material-ui/core'
import {useStyles} from './classes'
import { electionReducer } from '../reducers';

function Box6(){
    const classes = useStyles();
    const [state] = useReducer(electionReducer, electionState)
    return(
        <Paper elevation={3} rounded className={classes.box6}>
          <div>
            <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
            <div style={{display: "flex"}}>
              <div className={classes.boxTextStyle2}>
              <p className={classes.boxTextStyle}> Pemilihan Berakhir </p>
              </div>
              <div className={classes.boxTextStyle2}>
              <p className={classes.boxTextStyle} style={{textAlign: "right"}}> 26-Aug-2019 </p>
              </div>
            </div>
            <div>
              <p className={classes.boxTextStyle}> Waktu Tersisa </p>
            </div>
            <div style={{margin: "0 auto", display: "block", heigth: "11em"}}>
              <div style={{display: "inline", textAlign: "center"}}>
                  <center>
                      <div className={classes.dateBoxStyle}>
                      <p className={classes.dayStyle}> 6 </p>
                      <p className={classes.dayCapStyle}> Hari </p>
                      </div>
                  </center>
                  <div className={classes.timeBoxStyle1}>
                      <center>
                      <div className={classes.timeBoxStyle2}>
                          <p className={classes.timeStyle}>22</p>
                          <p className={classes.timeCapStyle}>Jam</p>
                      </div>
                      <div className={classes.timeBoxStyle2}>
                          <p className={classes.timeStyle}>22</p>
                          <p className={classes.timeCapStyle}>Menit</p>
                      </div>
                      <div className={classes.timeBoxStyle2}>
                          <p className={classes.timeStyle}>22</p>
                          <p className={classes.timeCapStyle}>Detik</p>
                      </div>
                      </center>
                  </div>
              </div>
            </div>
          </div>          
        </Paper>
    )
}

export default Box6;