import React from 'react';
import { Container, Typography, Button } from '@material-ui/core'
import { makeStyles, withStyles  } from '@material-ui/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import clsx from 'clsx'
import StepConnector from '@material-ui/core/StepConnector';

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
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad', 'This another step'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    case 3:
      return 'This another step';
    default:
      return 'Uknown stepIndex';
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

  const classes = useStepperStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <Container maxWidth="xl" className={classes.root} p={0} m={0}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label} connector={<ColorlibConnector/>}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default App;
