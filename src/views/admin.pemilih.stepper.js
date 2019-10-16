import React, {useContext, useEffect, useState} from 'react';

import {useElectionState} from '../reducers'

import {voterFState} from '../contexts/UserContext'
import { Grid, Button, Typography} from '@material-ui/core'
import { makeStyles, withStyles  } from '@material-ui/styles';
import Box7 from '../components/admin.navbar.js'
import VoterStep1 from '../components/voter.step1'
import VoterStep2 from '../components/voter.step2'
import VoterStep3 from '../components/voter.step3'
import VoterStep4 from '../components/voter.step5'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import clsx from 'clsx'
import StepConnector from '@material-ui/core/StepConnector';
import {useStyles} from '../assets/classes'

const useStepperStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '0',
    paddingRight: '0',
    background: '#fff'
  },
  box9: {
    background: 'rgb(255,255,255)',
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
  fieldSpace: {
    margin: '0.25em 0'
  },
  backButton: {
    marginRight: '1em',
  },
  instructions: {
    marginTop: '1em',
    marginBottom: '1em',
  },
}));

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 55%, rgba(58,203,232,1) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 55%, rgba(58,203,232,1) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#fff',
    backgroundImage:
      'rgba(255,255,255,1)',
    boxShadow: '0 4px 10px 0 rgba(1,96,201,0.25)',
    color: 'rgba(13,133,216,1)'
  },
  completed: {
    backgroundColor: '#fff',
    backgroundImage:
    'rgba(255,255,255,1)',
    boxShadow: '0 4px 10px 0 rgba(1,96,201,0.25)',
    color: 'rgba(13,133,216,1)'
  },
});

function getSteps() {
  return ['Upload data pemilih', 'Ulas kembali data pemilih', 'Aktivasi data pemilih','Selesai'];
}

export function useVoterStepperState(){
  const [state, setState] = useContext(VoterStepper);
  return [state, setState]
}

const VoterStepper = React.createContext(null);

function getStepContent(stepIndex, fnNext, fnBack) {
  switch (stepIndex) {
    case 0:
      return (
        <VoterStep1 next={fnNext}/>
      );
    case 1:
      return (
        <VoterStep2 next={fnNext} back={fnBack}/>
      );
    case 2:
      return (
        <VoterStep3 next={fnNext} back={fnBack}/>
      );
    case 3:
      return (
        <VoterStep4 next={fnNext} back={fnBack}/>
      );
    default:
      return 'Unknown stepIndex';
  }
}

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <Typography variant="h5">1</Typography> ,
    2: <Typography variant="h5">2</Typography>,
    3: <Typography variant="h5">3</Typography>,
    4: <Typography variant="h5">4</Typography>,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function App() {

  const classes = useStyles();
  const classesSteper = useStepperStyles();
  const [election, dispatch] = useElectionState();
  const steps = getSteps();

  function handleNext() {
    dispatch({type: "SET_LAST_STEPV", lastStep: election.voter.lastStep+1})
  }

  function handleBack() {
    dispatch({type: "SET_LAST_STEPV", lastStep: election.voter.lastStep-1})
  }

  function handleReset() {
    dispatch({type: "SET_LAST_STEPV", lastStep: 0})
  }

  return (
    <VoterStepper.Provider value={useState(voterFState)}>
        <Grid container direction="column" justify="center" alignItems="center" style={{width: '80%', padding: '0 1em', height: '667px', overflowY: 'auto', display: 'block', background: 'rgb(230,230,230)'}}>
          <Box7 />
          <Grid item style={{margin: '4em 0'}}>
            <Grid item>
              <Stepper style={{background: 'unset'}} activeStep={election.voter.lastStep} alternativeLabel>
                {steps.map(label => (
                  <Step key={label} connector={<ColorlibConnector/>}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item style={{height: '30em'}}>
            {getStepContent(election.voter.lastStep, handleNext, handleBack)}
            </Grid>
          </Grid>
        </Grid>
    </VoterStepper.Provider>
  );
}

export default App;
