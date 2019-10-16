import React from 'react';
import { Container, Grid, Button, Toolbar, Typography, Box, Link } from '@material-ui/core'
import LP from './assets/img/lp.svg'
import {ReactComponent as Why} from './assets/img/why-blockchain-illustration.svg'
import {ReactComponent as Why2} from './assets/img/why-blockchain-illustration2.svg'
import Icon1 from './assets/img/icon1.svg'
import Icon2 from './assets/img/icon2.svg'
import Icon3 from './assets/img/icon3.svg'
import { makeStyles } from '@material-ui/styles';

const useHomeStyle = makeStyles(theme => ({
  root: {
    paddingLeft: '0',
    paddingRight: '0',
    backgroundImage: `url(${LP})`, backgroundRepeat: 'no-repeat'
  },
  itemLandingFull1: {
    backgroundColor: 'linear-gradient(180deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 55%, rgba(58,203,232,1) 100%)',
    width: '1366px', 
    height: '678px',
  },
  itemLandingFull2: {
    height: '678px'
  },
  itemLandingFull3: {
    height: '678px'
  },
  itemLandingFull4: {
    height: '678px'
  },
  whiteButtonLabel: {
    color: '#fff',
    margin: '1em 2em',
  },
  whiteButtonLabel2: {
    color: '#fff',
    margin: '1em 1em',
  },
  whiteButton: {
    background: 'rgba(255,255,255,1)',
    borderRadius: '20px',
    margin: "1em",
    color: '#000'
  },
  whiteButtonOutlined: {
    borderRadius: '20px',
    margin: "1em",
    borderColor: 'rgba(255,255,255,1)',
    color: 'rgba(255,255,255,1)'
  },
  cardLandingPage : {
    height: '16em', 
    width: '12em', 
    background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(215,215,215,1) 45%, rgba(194,194,194,1) 60%, rgba(184,184,184,1) 85%,rgba(174,174,174,1) 100%)', 
    margin: '2em 2em', 
    borderRadius: '20px'
  }
}));

function App() {

  const classes = useHomeStyle();

  return (
    <Grid container direction="column" className={classes.root} m={0}>
      <Grid container direction="row" style={{maxWidth: '1366px'}}>
        <Grid item className={classes.itemLandingFull1} alignItems="center">
          <Toolbar style={{color: 'white'}}>
            <Grid container direction="row" justify="space-between" alignItems="center" >
              <Grid item diretion="column" alignItems="center" justify="center" style={{display: 'flex'}}>
                <div style={{width: '3em', height: '3em', background: 'white', display: 'inline-block'}}>
                </div>
                <Button size="small"  className={classes.whiteButtonLabel} >HOME </Button>
                <Button size="small"  className={classes.whiteButtonLabel} >BAGAIMANA CARANYA </Button>
                <Button size="small"  className={classes.whiteButtonLabel} >TENTANG KAMI </Button>
              </Grid>

              <div>
                <Button size="large"  className={classes.whiteButtonLabel2}>LOGIN </Button>
                <Button size="large"   className={classes.whiteButtonLabel2}> REGISTER </Button>
              </div>
            </Grid>
          </Toolbar>

          <Grid container direction="row" alignItems='center' justify="flex-start" style={{width: '1366px', position: 'absolute', height: '678px'}}>
            <Grid item xs={6} justify="center" alignItems='center' style={{padding: "0 2em"}}>
              <div style={{width: '80%'}}>
              <Typography variant='h3' style={{color: 'rgba(255,255,255,1)', fontSize: '2.64rem'}}>Amankan Pemilihan Anda</Typography>
              <Typography variant='subtitle1' style={{color: 'rgba(255,255,255,1)', margin: '0.5em 0'}}> Kami hadir untuk memberikan layanan yang berbeda dalam proses pemungutan suara. </Typography>
              <Grid container direction="row" style={{margin: '1em 0', display: 'block', textAlign: 'center'}}>
                <Button className={classes.whiteButton} variant='contained'> COBA SEKARANG </Button>
                <Button className={classes.whiteButtonOutlined} variant="outlined"> PELAJARI LEBIH LANJUT</Button>
              </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.itemLandingFull2}>
          <Grid container direction="column" justify="center" alignItems="center" style={{height: '678px'}}>
            <Grid item>
              <Typography variant='h4' style={{fontWeight: 'bold'}}>BLOCKCHAIN DALAM E-VOTING</Typography>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
              <Box className={classes.cardLandingPage}>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Typography variant="h5" style={{margin: '0.5em'}}> TITLE </Typography>
                  <img src={Icon1} style={{width: '7em', height: '7em'}}/>
                  <Typography variant="subtitle2" align="center" style={{margin: '0.5em'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Grid>
              </Box>
              <Box className={classes.cardLandingPage}>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Typography variant="h5" style={{margin: '0.5em'}}> TITLE </Typography>
                  <img src={Icon2} style={{width: '7em', height: '7em'}}/>
                  <Typography variant="subtitle2" align="center" style={{margin: '0.5em'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Grid>
              </Box>
              <Box className={classes.cardLandingPage}>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Typography variant="h5" style={{margin: '0.5em'}}> TITLE </Typography>
                  <img src={Icon3} style={{width: '7em', height: '7em'}}/>
                  <Typography variant="subtitle2" align="center" style={{margin: '0.5em'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.itemLandingFull3}>
          <Grid container direction="row">
            <Grid item xs={10} sm={6} style={{margin: '0 0'}}>
             <Why />
            </Grid>
            <Grid item xs={10} sm={6} style={{margin: '0 0'}}>
              <Grid container direction="column">
                <Grid item style={{color: '#000'}} alignItems='flex-end'>
                  <Grid container direction="column" justify="flex-end" alignItems="flex-end" style={{textAlign: 'left', height: '678px'}}>
                    <div style={{margin: '2em', marginRight: "8em", marginBottom: '1em', width:"60%"}}>
                      <Typography variant="h4" align="left">Mengapa Blockchain?</Typography>
                      <Typography variant="body1">Teknologi Blockchain memungkinkan pemungutan suara dilakukan secara transparan, terbuka dan dapat dicek oleh semua orang. Sistem terdesentralisasi memberikan peluang peretasan dapat diperkecil mendekati 0.</Typography>
                    </div>
                    <Why2/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.itemLandingFull4}>
          <Grid container direction="column" alignItems="stretch" style={{height: '678px'}}>
            <Grid item style={{height: "78%", textAlign: 'center', padding: '1em'}}>
              <Typography variant='h5' style={{margin: '1em'}}> SPONSOR/SUPPORT TITLE</Typography>
            </Grid>
            <Box style={{background: 'linear-gradient(180deg, rgba(57,55,77,1) 0%, rgba(11,11,11,1) 100%)', height: '22%'}}>
              <Grid container direction="row" justify="center" alignItems="strect" style={{margin: '2em 0', height: '22%', color: '#fff'}} >
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
    </Container>
  );
}

export default App;
