import React, {useState, useEffect} from 'react';

import {Redirect} from 'react-router-dom'

//React Context
import {useElectionState} from '../reducers'
import admin from '../helpers/api/admin'

import { Button, Grid, Paper, Typography} from '@material-ui/core'
import Box7 from '../components/admin.navbar.js'
import {useStyles} from '../assets/classes'
import StartDate from '../components/start.date.conf';
import StartTime from '../components/start.time.conf';
import EndDate from '../components/end.date.conf';
import EndTime from '../components/end.time.conf';

const step = 4

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <StartDate/>
      );
    case 1:
      return (
        <StartTime/>
      );
    case 2:
      return (
        <EndDate/>
      );
    case 3:
      return (
        <EndTime/>
      );
    default:
      return 'Uknown stepIndex';
  }
}

function App() {
  const [submit, setSubmit] = useState(false);
  const [state, dispatch] = useElectionState();
  const [done, setDone] = useState(false)
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset(){
    // setActiveStep(0)
    return (<Redirect to="/dashboard/admin" />)
  }

  function handleSubmit(){
    const {election: {info : {start_date, start_time, end_date, end_time}}} = state;
    let election_start = new Date(start_date + " "+ start_time)
    let election_end = new Date(end_date + " "+ end_time)

    setSubmit(true)

    dispatch({type: "CHANGE_FORM_ELECTION_FIX", start: election_start, end: election_end})
  }

  useEffect(()=> {
    function sending(res){
      if(res.success){
        console.log(res.message)
        dispatch({type: "DONE_SET_ELECTION", data: res.message})
      } else {
        dispatch({type: "ERROR", message: "Cannot set election"})
      }
    }

    if(submit){
      const {election: {start, end, id}} = state;
      const data = {start, end}
      admin.updateElectionInfo(id, data, sending)
      setSubmit(false)
      handleReset();
      console.log(start, end, data)
    }
  }, [submit])
  return (
        <Grid container direction="column" justify="center" alignItems="center" style={{width: '80%', padding: '0 1em', height: '667px', overflowY: 'auto', display: 'block', background: 'rgb(230,230,230)'}}>
          <Box7 />
          {state.election.active ? (<Redirect to="/dashboard/admin/menu" />) : 
          (<Grid item style={{margin: '8em 0'}}>
          <Paper elevation={3} square={false} className={classes.box7} style={{padding: '2em 0.5em'}}>
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Typography variant="h4" style={{margin: '0.2em', color: 'rgba(13,133,216,1)', fontWeight: 'bold'}}> SELAMAT DATANG! #ADMIN </Typography>
                <Typography variant="body1" style={{color: 'rgba(13,133,216,1)'}}>Bantu kami untuk mengisi informasi mengenai waktu permilhan #kegiatan name</Typography>
              </Grid>
              <Grid container direction="column" justify="center" alignItems="center" style={{height: '15em'}}>
                {getStepContent(activeStep)}
              </Grid>
              <Grid container justify="center" alignItems="center">
                {step === activeStep+1? (
                  <Button onClick={handleSubmit} size="medium" style={{background: 'rgba(25, 195, 81, 1)', width: '10em',color: '#fff', margin: '0 2em'}}>SIMPAN</Button>
                ):
                  <Button onClick={handleNext} size="medium" style={{background: 'rgba(25, 195, 81, 1)', width: '10em',color: '#fff', margin: '0 2em'}}>Selanjutnya</Button>
                }
                <Button onClick={handleBack} size="medium" style={{margin: '0 2em', width: '10em'}}>Kembali</Button>
              </Grid>
            </Grid>          
          </Paper>
          </Grid>)
          }
        </Grid>
  );
}

export default App;
