import React from 'react';
import { Container, Grid, Button, Box, Toolbar, Typography, Link, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import back3 from './assets/img/back3.svg'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '0',
    paddingRight: '0'
  },
  itemLandingFull3: {
    width: '1366px', height: '678px'
  },
  itemLandingFull4: {
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

function App() {

  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root} p={0} m={0}>
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

      <Grid container direction="row" style={{maxWidth: '1366px', background: `url(${back3})`, backgroundRepeat: 'no-repeat'}}>
        <Grid item className={classes.itemLandingFull3}>
          <Grid container direction="row" style={{margin: '2em 0'}}>
            <Grid item xs={12} sm={6} style={{margin: '0 2em'}}>
              <Grid container direction="column" justify="center" alignItems="center" style={{height: '678px'}}>
                <div style={{textAlign: 'left', padding: '0 5em', color: '#fff'}}>
                  <Typography variant="h4" style={{margin: '0.5em 0'}}>DIMANA KAMI BERMULA?</Typography>
                  <Typography variant="body2">Kami merupakan stratup berasal dari Kota Semarang, Jawa Tengah. Bermula dari banyaknya pemungutan suara yang masih menggunakan proses manual, kami hadir dengan menawarkan layanan pemungutan suara yang lebih efisien menggunakan inovasi teknologi informasi. Banyaknya platform e-voting yang telah ada, kami ingin menekankan untuk memberikan pelanggan sensasi yang berbeda dalam melakukan pemungutans suara sesuai dengan Asas LUBER JURDIL (Langsung, Bebas, Rahasia, Jujur dan Adil.) Pemanfaatan teknologi Blockchain sebagai inti pengaman suara menjadikan suara dapat diawasi oleh masyarakat luas </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} style={{margin: '0 0'}}>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{height: "20em",  width: '1366px'}}>
          <Grid container direction="column" justify="center" alignItems="center" style={{height: "100%"}}>
            <Typography variant='h4' style={{margin: '1em', fontWeight: 'bold', color: '#fff', textAlign: 'center'}}>MYVOTEID MEMUNGKINKAN SELURUH 
<br/>ORANG DAPAT BERPARTISIPASI MENGAWASI<br/>
PEMUNGUTAN SUARA</Typography>
          </Grid>
        </Grid>
        <Grid item style={{height: "20em",  width: '1366px'}}>
          <Grid container direction="column" justify="center" alignItems="center" style={{height: "100%"}}>
            <Typography variant='h6' style={{margin: '1em 0', fontWeight: 'bold'}}> TIM KAMI </Typography>
            <Grid container variant="row" justify="center" alignItems="center" style={{margin: '2em 0'}}>
            <Grid item direction="column" justify="center" style={{margin: '0 2em', textAlign: 'center'}}>
                <div style={{width: '4em', height: '4em', background: 'aqua', display: 'inline-block'}}></div>
                <Typography variant="body1" style={{fontWeight: 'bold'}}>EKO ARIANTO</Typography>
                <Typography variant="body2">FULL STACK ENGINEER</Typography>
              </Grid>
              <Grid item direction="column" justify="center" style={{margin: '0 2em', textAlign: 'center'}}>
                  <div style={{width: '4em', height: '4em', background: 'aqua', display: 'inline-block'}}></div>
                  <Typography variant="body1" style={{fontWeight: 'bold'}}>EKO ARIANTO</Typography>
                  <Typography variant="body2">FULL STACK ENGINEER</Typography>
              </Grid>
              <Grid item direction="column" justify="center" style={{margin: '0 2em', textAlign: 'center'}}>
                <div style={{width: '4em', height: '4em', background: 'aqua', display: 'inline-block'}}></div>
                <Typography variant="body1" style={{fontWeight: 'bold'}}>EKO ARIANTO</Typography>
                <Typography variant="body2">FULL STACK ENGINEER</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{height: "25em",  width: '1366px'}}>
          <Grid container direction="column" justify="center" alignItems="center" style={{height: "100%"}}>
            <Typography variant='h4' style={{margin: '1em', fontWeight: 'bold', color: '#fff'}}> MULAI PEMUNGUTAN SUARA DITEMPATMU DENGAN MYVOTEID </Typography>
            <Button className={classes.whiteButtonOutlined} size="large" variant="outlined" style={{margin:'0.5em'}}> DAFTAR SEKARANG </Button>
          </Grid>
        </Grid>

        <Grid item style={{width: '1366px'}}>
          <Grid container direction="column" alignItems="stretch">
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
