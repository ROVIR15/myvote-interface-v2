import React, {useState, useEffect} from 'react';

import { useCandidateStepperState } from '../views/admin.kandidat.stepper';

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

function FormCandidate(props) {
  const classes = useStyles();
  const {form} = props
  const [state, setState] = useCandidateStepperState();
  const {total} = state

  function handleClick(){
    props.change({name: "no_urut", value: props.position})
    if(props.position === total)
      props.next();
    else
      props.onClick();
  }

  function handleChange(e){
    const {name, value} = e.target
    props.change({name, value})
  }
  return (
          <Paper elevation={2} className={classes.box9}>
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid item direction="row" justify="center" alignItems="center">
                <Grid container direction="row" justify="center" alignItems="center" >
                  <Box border={1} style={{textAlign: 'center', padding: '0.5em', margin: '0 1em'}}>
                    <Typography variant="body2">NO URUT</Typography>
                    <Typography variant="h4"> {props.position} </Typography>
                  </Box>
                  <Typography variant="h5" style={{margin: '0 1em', fontWeight: 'bold'}}> LABEL TITLE </Typography>
                </Grid>
              </Grid>
              <Grid item direction="row">
                <Grid container justify="space-evenly">
                  <Grid item style={{padding: '1em', paddingBottom: '2em'}}>
                    <FormGroup>
                      <TextField className={classes.fieldSpace} id="nik" name="nik" label="NIK" margin="dense" onChange={handleChange} value={form.nik}></TextField>
                      <TextField className={classes.fieldSpace} id="nama" name="nama_kandidat" label="Nama" margin="dense" onChange={handleChange} value={form.nama_kandidat}></TextField>
                      <TextField className={classes.fieldSpace} id="jenis_kelamin" name="jenis_kelamin" label="Jenis Kelamin" margin="dense" onChange={handleChange} value={form.jenis_kelamin}></TextField>
                      <FormGroup className={classes.fieldSpace} style={{display: 'inline'}}>
                        <TextField id="tempat_lahir" name="tempat_lahir" label="Tempat Lahir" style={{marginRight: "0.5em"}} margin="dense" onChange={handleChange} value={form.tempat_lahir}></TextField>
                        <TextField id="tanggal_lahir" name="tanggal_lahir" label="Tanggal Lahir" style={{marginLeft: "0.5em"}} margin="dense" onChange={handleChange} value={form.tanggal_lahir}></TextField>
                      </FormGroup>
                      <TextField className={classes.fieldSpace} id="alamat" name="alamat" label="Alamat" margin="dense" onChange={handleChange} value={form.alamat}></TextField>
                      <FormGroup className={classes.fieldSpace} style={{display: 'inline'}}>
                        <TextField id="provinsi" name="provinsi" label="Provinsi" style={{marginRight: "0.5em"}} margin="dense" onChange={handleChange} value={form.provinsi}></TextField>
                        <TextField id="kota" name="kota" label="Kota" style={{marginLeft: "0.5em"}} margin="dense" onChange={handleChange} value={form.kota}></TextField>
                      </FormGroup>
                      <TextField className={classes.fieldSpace} id="visi" name="visi" label="Visi" margin="dense" onChange={handleChange} value={form.visi}></TextField>
                      <TextField className={classes.fieldSpace} id="misi" name="misi" label="Misi" margin="dense" onChange={handleChange} value={form.misi}></TextField>
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
                  {props.position != total ? 
                    (<Button size="medium" onClick={handleClick} style={{marginRight: '1em', background: 'rgba(24, 204, 84, 1)', color: 'white', width: '10em'}}> SIMPAN </Button>):
                    (<Button size="medium" onClick={handleClick} style={{marginRight: '1em', background: 'rgba(24, 204, 84, 1)', color: 'white', width: '10em'}}> SELESAI </Button>)
                  }
                </Grid>
              </Grid>
            </Grid>
          </Paper>        
  );
}

export default FormCandidate;
