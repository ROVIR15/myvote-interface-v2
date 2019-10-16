import React from 'react';
import { Button, Container, Grid, InputBase, Paper, Typography} from '@material-ui/core'
import {withStyles  } from '@material-ui/styles';
import Sidebar from './assets/sidebarA'
import Box7 from './assets/box7'
import {useStyles} from './assets/classes'

const DatePicker = withStyles({
  root: {
    lineHeight: 'unset'
  },
  input: {
    textAlign: 'right',
    fontSize: '2rem',
  }
})(InputBase)

const TimePicker = withStyles({
  root: {
    lineHeight: 'unset'
  },
  input: {
    textAlign: 'right',
    fontSize: '2rem',
  }
})(InputBase)


function App() {

  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root} p={0} m={0} style={{padding: '0'}}>
      <Grid container direction="row" style={{}}>
        <Sidebar/>
        <Grid container direction="column" justify="center" alignItems="center" style={{width: '80%', padding: '0 1em', height: '667px', overflowY: 'auto', display: 'block', color: 'rgb(230,230,230)'}}>
          <Box7 />
          <Grid item style={{margin: '4em 0'}}>
          <Paper elevation={3} square={false} className={classes.box7}>
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Typography variant="h4">SELAMAT DATANG #ADMIN,</Typography>
                <Typography variant="body1">Bantu kami untuk mengisi informasi mengenai waktu permilhan #kegiatan name</Typography>
              </Grid>
              <Grid container direction="column" justify="center" alignItems="center">
              <Grid container direction="column" justify="center" alignItems="center" style={{margin: '1em 0'}}>
                <Typography variant="body2" style={{font: '#666', textAlign: 'center'}}>Tanggal berapa pemilihan ini dimulai</Typography>
                <DatePicker id="date" type="date"/>
              </Grid>
              <Grid container direction="column" justify="center" alignItems="center" style={{margin: '1em 0'}}>
                <Typography variant="body2" style={{font: '#666', textAlign: 'center'}}>Masukkan waktu pemilihan mulai</Typography>
                <TimePicker id="time" type="time"/>
              </Grid>
              </Grid>
              <Grid container justify="center" alignItems="center">
                <Button size="medium" style={{background: 'rgba(25, 195, 81, 1)', color: '#fff', margin: '0 1em'}}>Selanjutnya</Button>
                <Button size="medium" style={{margin: '0 1em'}}>Kembali</Button>
              </Grid>
            </Grid>          
            <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
          </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
