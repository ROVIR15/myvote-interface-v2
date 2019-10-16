import React, {useState} from 'react'

import {Paper} from '@material-ui/core'
import {useStyles} from '../assets/classes'

const time = {
  days: 0,
  hours: 0,
  min: 0,
  sec: 0
}

function Box6(props){
    const classes = useStyles();
    const [state, setState] = useState(time);
    const {start, end} = props.data
    var interval;

    function addLeadingZeros(value){
      value = String(value);
      while(value.length < 2){
        value = '0' + value;
      }

      return value
    }

    function stop(){
      clearInterval(interval);  
    }

    const dstart = new Date(start);
    const dend = new Date(end);

    function calculateCountdown(dstart, dend) {
      let diff = (Date.parse(new Date(dend)) - Date.parse(new Date())) / 1000;

      // clear countdown when date is reached
      if (diff <= 0) {
        return false;
      } 
  
      const timeLeft = {
        years: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0
      };
  
      // calculate time difference between now and expected date
      if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
        timeLeft.years = Math.floor(diff / (365.25 * 86400));
        diff -= timeLeft.years * 365.25 * 86400;
      }
      if (diff >= 86400) { // 24 * 60 * 60
        timeLeft.days = Math.floor(diff / 86400);
        diff -= timeLeft.days * 86400;
      }
      if (diff >= 3600) { // 60 * 60
        timeLeft.hours = Math.floor(diff / 3600);
        diff -= timeLeft.hours * 3600;
      }
      if (diff >= 60) {
        timeLeft.min = Math.floor(diff / 60);
        diff -= timeLeft.min * 60;
      }
      timeLeft.sec = diff;
      return timeLeft;
    }    

    function begin(){
      interval = setInterval(()=> {
        let RDate = calculateCountdown(start, end);
        RDate ? setState(RDate) : stop();
      }, 1000)  
    }

    function getEndDate(date){
      const res = {
        date: date.getDate(), 
        month: date.getMonth(),
        year: date.getFullYear()
      }

      return res.date + "-" + res.month + "-" + res.year
    }

    return(
        <Paper elevation={3} rounded className={classes.box6}>
          {begin()}
          <div>
            <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
            <div style={{display: "flex"}}>
              <div className={classes.boxTextStyle2}>
              <p className={classes.boxTextStyle}> Pemilihan Berakhir </p>
              </div>
              <div className={classes.boxTextStyle2}>
              <p className={classes.boxTextStyle} style={{textAlign: "right"}}> {getEndDate(end)} </p>
              </div>
            </div>
            <div>
              <p className={classes.boxTextStyle}> Waktu Tersisa </p>
            </div>
            <div style={{margin: "0 auto", display: "block", heigth: "11em"}}>
              <div style={{display: "inline", textAlign: "center"}}>
                  <center>
                      <div className={classes.dateBoxStyle}>
                      <p className={classes.dayStyle}> {state.days} </p>
                      <p className={classes.dayCapStyle}> Hari </p>
                      </div>
                  </center>
                  <div className={classes.timeBoxStyle1}>
                      <center>
                      <div className={classes.timeBoxStyle2}>
                          <p className={classes.timeStyle}>{addLeadingZeros(state.hours)}</p>
                          <p className={classes.timeCapStyle}>Jam</p>
                      </div>
                      <div className={classes.timeBoxStyle2}>
                          <p className={classes.timeStyle}>{addLeadingZeros(state.min)}</p>
                          <p className={classes.timeCapStyle}>Menit</p>
                      </div>
                      <div className={classes.timeBoxStyle2}>
                          <p className={classes.timeStyle}>{addLeadingZeros(state.sec)}</p>
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