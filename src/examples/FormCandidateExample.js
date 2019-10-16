import React from 'react';
import { Grid, Paper, Box, Typography, TextField, FormGroup, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  box9: {
    background: 'rgb(255,255,255)',
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
  fieldSpace: {
    margin: '0.25em 0'
  }
}));

function FormCandidate() {

  const classes = useStyles();

  return (
          <Paper elevation={2} className={classes.box9}>
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid item direction="row" justify="center" alignItems="center">
                <Grid container direction="row" justify="center" alignItems="center" >
                  <Box border={1} style={{textAlign: 'center', padding: '0.5em', margin: '0 1em'}}>
                    <Typography variant="body2">NO URUT</Typography>
                    <Typography variant="h4"> 1 </Typography>
                  </Box>
                  <Typography variant="h5" style={{margin: '0 1em', fontWeight: 'bold'}}> LABEL TITLE </Typography>
                </Grid>
              </Grid>
              <Grid item direction="row">
                <Grid container justify="space-evenly">
                  <Grid item style={{padding: '1em', paddingBottom: '2em'}}>
                    <FormGroup>
                      <TextField className={classes.fieldSpace} id="nik" nama="nik" label="NIK" margin="dense"></TextField>
                      <TextField className={classes.fieldSpace} id="nama" nama="nama" label="Nama" margin="dense"></TextField>
                      <TextField className={classes.fieldSpace} id="jenis_kelamin" nama="jenis_kelamin" label="Jenis Kelamin" margin="dense"></TextField>
                      <FormGroup className={classes.fieldSpace} style={{display: 'inline'}}>
                        <TextField id="tempat_lahir" nama="tempat_lahir" label="Tempat Lahir" style={{marginRight: "0.5em"}} margin="dense"></TextField>
                        <TextField id="tanggal_lahir" nama="tanggal_lahir" label="Tanggal Lahir" style={{marginLeft: "0.5em"}} margin="dense"></TextField>
                      </FormGroup>
                      <TextField className={classes.fieldSpace} id="alamat" nama="alamat" label="Alamat" margin="dense"></TextField>
                      <FormGroup className={classes.fieldSpace} style={{display: 'inline'}}>
                        <TextField id="provinsi" nama="provinsi" label="Provinsi" style={{marginRight: "0.5em"}} margin="dense"></TextField>
                        <TextField id="kota" nama="kota" label="Kota" style={{marginLeft: "0.5em"}} margin="dense"></TextField>
                      </FormGroup>
                      <TextField className={classes.fieldSpace} id="visi" nama="visi" label="Visi" margin="dense"></TextField>
                      <TextField className={classes.fieldSpace} id="misi" nama="misi" label="Misi" margin="dense"></TextField>
                    </FormGroup>
                  </Grid>
                  <Grid item style={{padding: '1em 0'}}>
                    <Grid container direction="column" justify="center" alignItems="center">
                      <Box border={1} style={{height: '8em', width: '8em', marginBottom: '0.5em'}}>
                      </Box>
                      <Button variant='outlined' style={{color: 'rgba(1, 96, 201, 1)', borderColor: 'rgba(1, 96, 201, 1)', marginTop: '0.5em'}} size="medium"><Typography variant='button'>UNGGAH FOTO</Typography></Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="flex-end" alignItems="flex-end">
                  <Button size="medium" style={{marginRight: '1em', background: 'rgba(24, 204, 84, 1)', color: 'white', width: '10em'}}> SIMPAN </Button>
                  <Button size="medium" style={{marginLeft: '1em', width: '10em'}}> KEMBALI </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>        
  );
}

export default FormCandidate;
