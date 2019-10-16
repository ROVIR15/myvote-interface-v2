import React, {useEffect, useState, useContext} from 'react'
import {NavLink, Redirect} from 'react-router-dom'

import main from '../helpers/api/main'

import {useMainState} from '../reducers'

import { Grid, Box, TextField, FormGroup, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ArrowBack from '@material-ui/icons/ArrowBack';
import MainButton from '../assets/MainButton'
import SecondaryButton from '../assets/SecondaryButton' 
import {ReactComponent as Icon} from '../assets/img/sign-in-illustration.svg'

const useStyles = makeStyles(theme => ({
    FomInput: {
        width: "22em"
    },
    item: {
        background: 'white',
        width: "60%",
        height: "667px"
    },
    rightSide: {
        color: "#ffffff",
        width: "39%",
        margin: "auto"
    },
    FormInput: {
        width: "22em"
    }
}))

function Register(){

    const classes = useStyles();
    const [clicked, setClicked] = useState(false)
    const [state, dispatch] = useMainState();

    function handleChange(e){
      const {name, value} = e.target;
      dispatch({type: 'CHANGE_FORM_REGISTER', [name] : value});
    }
    
    function handleReg(){
      setClicked(true);
    }

    useEffect(()=> {
      function handleSubmit(res){
        if(res.success) {
          dispatch({type: "SET_NEW_ACCOUNT", newUser: res.data});
          setClicked(false);
        } else {
          dispatch({type: "ERROR", message: "something wrong happened"});
        }
        console.log(state)
      }
      
      if(clicked) {
        main.register(state.form, handleSubmit)
      }
    }, [clicked])

    return (
      <Grid container className={classes.gclr} direction="row">
          {state.status.signedUp ? (<Redirect to ="/success-register" />): null}
          <Grid item className={classes.item} direction="row" my="auto">
            <div style={{margin: "0em 0 1em 0"}}>
              <div>
              <NavLink to="/" style={{textDecoration: 'unset', padding: '0'}}><ArrowBack style={{padding: "1rem 0 0 0"}} fontSize="large"/></NavLink>
              </div>
              <Box display="flex" justifyContent="center">
                <div style={{textAlign: "center", margin: "auto"}}>
                  <h1 style={{margin: "0",fontSize: "40px", letterSpacing: "0.5rem"}}> REGISTER </h1>
                </div>
              </Box>
            <Box className={classes.FormBox} display="flex" justifyContent="center">
            <FormGroup row={false} className={classes.FormInput}>
              <TextField name="nama_institusi" id="nama_institusi" label="Nama Institusi" margin="dense" onChange={handleChange}/>
              <TextField name="nik" id="nik" label="NIK Penyelenggara" margin="dense" onChange={handleChange}/>
              <TextField name="nama_penyelenggara" id="nama_penyelenggara" label="Nama Penyelenggara" margin="dense" onChange={handleChange}/>
              <TextField name="jabatan" id="jabatan" label="Jabatan Penyelenggara" margin="dense" onChange={handleChange}/>
              <TextField name="email" id="email" label="Email" margin="dense" onChange={handleChange}/>
              <TextField name="alamat" id="alamat" label="Alamat" margin="dense" onChange={handleChange}/>
              <TextField name="nama_kegiatan" id="nama_kegiatan" label="Nama Kegiatan" margin="dense" onChange={handleChange}/>
              <TextField name="deskripsi_kegiatan" id="deskripsi_kegiatan" label="Deskripsi Kegiatan" margin="dense" onChange={handleChange}/>
              <MainButton labelName="REGISTER" submit={handleReg}/>
            </FormGroup>
          </Box>
        </div>
          </Grid>
          <Box style={{width: '40%', background: 'linear-gradient(180deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 55%, rgba(58,203,232,1) 100%)'}}>
            <Grid container direction="column" justify="center" alignItems="center" style={{height: '667px', textAlign: 'center', color: '#fff'}}>
              <Typography variant="h4" style={{fontWeight: 'bold'}}> SUDAH TERDAFTAR? </Typography>
              <div style={{width: "171.28px", height: "291.35px", margin: '2em 0'}}><Icon /></div>
              <Typography variant="body1" style={{fontWeight: "500"}}>Anda sudah mendaftarkan pemilihan atau anda merupakan<br/>pemilih tekan tombol dibawah ini untuk masuk.</Typography>
              <NavLink to="/login" style={{textDecoration: 'unset', color: '#fff'}}><SecondaryButton labelName="LOGIN NOW"/></NavLink>
            </Grid>
          </Box>
      </Grid>
    )
}

export default Register;