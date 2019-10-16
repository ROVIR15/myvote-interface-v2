import React from 'react';
import { Container, Grid, Button, Box, Toolbar, Typography, Link, AppBar } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {ReactComponent as Bubble} from './assets/img/Bubble.svg'

import AdminStep1 from './assets/img/admin-how-to-illustration.svg'
import AdminStep2 from './assets/img/admin-how-to-illustration2.svg'
import AdminStep3 from './assets/img/admin-how-to-illustration3.svg'
import AdminStep4 from './assets/img/admin-how-to-illustration4.svg'
import AdminStep5 from './assets/img/winner-illustration.svg'

import VoterStep1 from './assets/img/voter-how-to-illustration1.svg'
import VoterStep2 from './assets/img/voter-how-to-illustration2.svg'
import VoterStep3 from './assets/img/voter-how-to-illustration3.svg'
import VoterStep4 from './assets/img/winner-illustration.svg'

const tutorialStepsForAdmin = [
  {
    step: 'PERTAMA, DAFTARKAN PEMILIHAN ANDA PADA WEBSITE MYVOTE.ID',
    imgPath:
      AdminStep1,
  },
  {
    step: 'KEDUA, BERIKAN INFORMASI MENGENAI KEGIATAN PEMILIHAN',
    imgPath:
      AdminStep2,
  },
  {
    step: 'KETIGA, DAFTARKAN KANDIDAT DAN PEMILIH. SISTEM AKAN MEMBUAT HALAMAN UNTUK PEMILIH MEMILIH',
    imgPath:
      AdminStep3,
  },
  {
    step: 'KEEMPAT, PEMILIHAN DIMULAI DAN AWASI PEMILIHAN YANG BERLANGSUNG',
    imgPath:
      AdminStep4,
  },
  {
    step: 'KELIMA, PEMILIHAN SELESAI DAN HASIL DAPAT DIUMUMKAN',
    imgPath:
      AdminStep5,
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '0',
    paddingRight: '0'
  },
  itemLandingFull3: {
    background: '#fff',
    width: '1366px', height: '678px'
  },
  itemLandingFull4: {
    background: 'linear-gradient(180deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 55%, rgba(58,203,232,1) 100%)',
    width: '1366px', height: '534px'
  },
  whiteButtonOutlined: {
    borderRadius: '20px',
    margin: "1em",
    borderColor: 'rgba(255,255,255,1)',
    color: 'rgba(255,255,255,1)'
  },
  blueButtonContained : {
    background: '#fff',
    borderRadius: '20px',
    margin: "1em",
    color: 'rgba(1,96,201,1)'
  }
}));

const tutorialStepsForVoter= [
  {
    step: 'MASUK KE HALAMAN LOGIN DAN MASUKKAN USERNAME DAN PASSWORD',
    imgPath:
      VoterStep1,
  },
  {
    step: 'TENTUKAN PILIHANMU "COMMIT AND REVEAL VOTE"',
    imgPath:
      VoterStep2,
  },
  {
    step: 'AWASI PEMILIHAN BERLANGSUNG DENGAN MENUJU KE HALAMAN TRANSAKSI SUARA',
    imgPath:
      VoterStep3,
  },
  {
    step: 'PEMILIHAN SELESAI. PEMENANG AKAN DIUMUMKAN SECARA LANGSUNG',
    imgPath:
      VoterStep4,
  }
]

function App() {

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep1, setActiveStep1] = React.useState(0);
  const maxSteps1 = tutorialStepsForAdmin.length;
  const [activeStep2, setActiveStep2] = React.useState(0);
  const maxSteps2 = tutorialStepsForVoter.length;

  function handleNext1() {
    setActiveStep1(prevActiveStep1 => prevActiveStep1 + 1);
  }

  function handleBack1() {
    setActiveStep1(prevActiveStep1 => prevActiveStep1 - 1);
  }

  function handleNext2() {
    setActiveStep2(prevActiveStep2 => prevActiveStep2 + 1);
  }

  function handleBack2() {
    setActiveStep2(prevActiveStep2 => prevActiveStep2 - 1);
  }

  return (
    <Container maxWidth="xl" className={classes.root} p={0} m={0}>
      <Grid container direction="row" style={{maxWidth: '1366px', paddingTop: '4em'}}>
        <AppBar position="fixed" style={{background: '#fff'}}>
          <Toolbar style={{color: ''}}>
            <Grid container direction="row" justify="space-between" alignItems="center" >
              <Grid item diretion="column" alignItems="center" justify="center" style={{display: 'flex'}}>
                <div style={{width: '3em', height: '3em', background: 'white', display: 'inline-block'}}>
                </div>
                <Button size="small"  className={classes.blueButtonContained} >HOME </Button>
                <Button size="small"  className={classes.blueButtonContained} >BAGAIMANA CARANYA </Button>
                <Button size="small"  className={classes.blueButtonContained} >TENTANG KAMI </Button>
              </Grid>

              <div>
                <Button size="large"  className={classes.blueButtonContained}>LOGIN </Button>
                <Button size="large"   className={classes.blueButtonContained}> REGISTER </Button>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid item className={classes.itemLandingFull3}>
          <Grid container direction="row">
            <Typography variant="h4" style={{padding: '1em', width: '33%', position: 'absolute'}}> PENYELENGGARA PEMILIHAN SUARA </Typography>
            <Grid container direction='row' justify="center" alignItems="center" xs={8} style={{margin: '0 0'}}>
              <img
                className={classes.img}
                src={tutorialStepsForAdmin[activeStep1].imgPath}
                alt={tutorialStepsForAdmin[activeStep1].step}

                style={{zIndex: 2}}
              />
              <Bubble style={{position: 'absolute', zIndex: '1'}}/>
            </Grid>
            <Grid item xs={4} style={{margin: '0 0'}}>
              <Grid container direction="column" justify="center" alignItems="center" style={{height: '678px', background: "linear-gradient(180deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 55%, rgba(58,203,232,1) 100%)"}}>
              <Box style={{ textAlign: 'center'}}>
                <Typography variant="h4" style={{margin: '2em 2em', marginTop: '0', color: 'white'}}>{tutorialStepsForAdmin[activeStep1].step}</Typography>
              </Box>
              <MobileStepper
                  steps={maxSteps1}
                  variant="dots"
                  position="static"
                  activeStep={activeStep1}
                  nextButton={
                    <Button size="small" onClick={handleNext1} disabled={activeStep1 === maxSteps1 - 1} style={{color: 'white'}}>
                      <KeyboardArrowRight />
                    </Button>
                  }
                  backButton={
                    <Button size="small" onClick={handleBack1} disabled={activeStep1 === 0} style={{color: 'white'}}>
                      <KeyboardArrowLeft />
                    </Button>
                  }

                  style={{background: 'rgba(255,255,255,0)', margin: '1em 0'}}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.itemLandingFull3}>
          <Grid container direction="row">
            <Typography variant="h4" style={{padding: '1em', width: '33%', position: 'absolute'}}> PEMILIH </Typography>
            <Grid container direction='row' justify="center" alignItems="center" xs={8} style={{margin: '0 0'}}>
              <img
                className={classes.img}
                src={tutorialStepsForVoter[activeStep2].imgPath}
                alt={tutorialStepsForVoter[activeStep2].step}

                style={{zIndex: 2}}
              />
              <Bubble style={{position: 'absolute', zIndex: '1'}}/>
            </Grid>
            <Grid item xs={4} style={{margin: '0 0'}}>
              <Grid container direction="column" justify="center" alignItems="center" style={{height: '678px', background: "linear-gradient(180deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 55%, rgba(58,203,232,1) 100%)"}}>
              <Box style={{ textAlign: 'center'}}>
                <Typography variant="h4" style={{margin: '2em 2em', marginTop: '0', color: 'white'}}>{tutorialStepsForVoter[activeStep2].step}</Typography>
              </Box>
              <MobileStepper
                  steps={maxSteps2}
                  variant="dots"
                  position="static"
                  activeStep={activeStep2}
                  nextButton={
                    <Button size="small" onClick={handleNext2} disabled={activeStep2 === maxSteps2 - 1} style={{color: 'white'}}>
                      <KeyboardArrowRight />
                    </Button>
                  }
                  backButton={
                    <Button size="small" onClick={handleBack2} disabled={activeStep2 === 0} style={{color: 'white'}}>
                      <KeyboardArrowLeft />
                    </Button>
                  }

                  style={{background: 'rgba(255,255,255,0)', margin: '1em 0'}}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item style={{height: "20em",  width: '1366px', background: 'linear-gradient(180deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 55%, rgba(58,203,232,1) 100%)'}}>
          <Grid container direction="column" justify="center" alignItems="center" style={{height: "100%"}}>
            <Typography variant='h4' style={{margin: '1em', fontWeight: 'bold', color: '#fff'}}> MULAI PEMUNGUTAN SUARA DITEMPATMU DENGAN MYVOTEID </Typography>
            <Button className={classes.whiteButtonOutlined} size="large" variant="outlined" style={{margin:'0.5em'}}> DAFTAR SEKARANG </Button>
          </Grid>
        </Grid>

        <Grid item >
          <Grid container direction="column" alignItems="stretch" style={{width: '1366px'}}>
            <Box style={{background: 'linear-gradient(180deg, rgba(57,55,77,1) 0%, rgba(11,11,11,1) 100%)', height: '25%'}}>
              <Grid container direction="row" justify="center" alignItems="strect" style={{margin: '2em 0', height: '25%', color: '#fff'}} >
                <Grid item style={{margin: '0 1em'}}>
                  <div style={{width: '5em', height: '5em', borderRadius: '100%', background: '#fff'}}></div>
                </Grid>
                <Grid item style={{margin: '0 1em'}}>
                  <Typography variant="button" component="body">HUBUNGI KAMI</Typography>
                </Grid>
                <Grid item style={{margin: '2em 4em'}}>
                  <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item style={{padding: '0 2em'}}><Link style={{color: '#fff'}}><Typography variant='button'>TENTANG KAMI</Typography></Link></Grid>
                    <Grid item style={{padding: '0 2em'}}><Link style={{color: '#fff'}}><Typography variant='button'>SYARAT DAN KETENTUAN</Typography></Link></Grid>
                    <Grid item style={{padding: '0 2em'}}><Link style={{color: '#fff'}}><Typography variant='button'>FAQ</Typography></Link></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
