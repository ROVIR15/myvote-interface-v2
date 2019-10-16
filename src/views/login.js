import React, {useEffect, useReducer, useState, useContext} from 'react'
//Context
import {MainCtx} from '../contexts/UserContext'

//React router
import {NavLink, Redirect} from 'react-router-dom'

import {useMainState} from '../reducers'

//API
import main from '../helpers/api/main';

import { Grid, Box, TextField, FormGroup, Link, Typography } from '@material-ui/core'
import {useStyles} from "../assets/classes"
import ArrowBack from '@material-ui/icons/ArrowBack';
import MainButton from '../assets/MainButton'
import SecondaryButton from '../assets/SecondaryButton' 
import {ReactComponent as Icon} from '../assets/img/sign-up-illustration.svg'



function Login(){

    const classes = useStyles();
    const [clicked, setClicked] = useState(false)

    const [state, dispatch] = useMainState();

    function handleChange(e){
      const { name, value } = e.target;
      dispatch({type: 'CHANGE_FORM_LOGIN', [name]: value});
      console.log(state)
    }

    function handleLogin(){
      setClicked(true)
    }

    useEffect(() => {
      function handleSubmit(res) {
        console.log("login process starting....")
        if(res.success) {
          setClicked(false);
          main.checkRoles({username: res.username, id_kegiatan: res.id_kegiatan}, authorize)
        } else {
          dispatch({type: "ERROR", message: "Something goes wrong, please re-check your username and password"})
        }
      }

      function authorize(res){
        console.log("auth process...")
        if(res.roles === "admin") dispatch({type: "CHANGE_STATUS", loggedIn: true, roles: "admin"})
        if(res.roles === "voter") dispatch({type: "CHANGE_STATUS", loggedIn: true, roles: "voter"})
        if(!res.roles) dispatch({type: "ERROR", message:"You're not registered neither administrator nor voter"})
        console.log(state)
      }

      if(clicked){
        main.postLogin({state}, handleSubmit);
      }
    }, [clicked])

    if(state.status.loggedIn){
      if(state.status.roles === "admin"){
        console.log(state.status)
        return (<Redirect to="/dashboard/admin"/>)
      }
      if(state.status.roles === "voter"){
        console.log("voter")
        return (<Redirect to="/dashboard/voter"/>)
      }
    }
    else  
      return (
        <Grid container className={classes.gclr} direction="row-reverse">
            <Grid item className={classes.item} direction="row" my="auto" >
              <div style={{margin: "8em 0"}}>
                <Box display="flex" justifyContent="center">
                  <div style={{textAlign: "center", margin: "auto"}}>
                    <h1 style={{margin: "0",fontSize: "40px", letterSpacing: "0.5rem"}}> LOGIN </h1>
                    <p style={{fontSize: "14px", color: "#666666", margin: "0"}}>Selamat datang, silahkan mengisi inputan untuk masuk ke sistem</p>
                  </div>
                </Box>
                <Box className={classes.FormBox} display="flex" justifyContent="center">
                  <FormGroup row={false} className={classes.FormInput}>
                    <TextField name="username" id="username" label="username" margin="normal" onChange={handleChange} required={true}/>
                    <TextField name="password" id="password" label="password" margin="normal" onChange={handleChange}/>
                    <MainButton labelName="LOGIN" login={handleLogin}/>
                    <Link className={classes.linkOpt}><a>Lupa kata sandi?</a></Link>
                  </FormGroup>
                </Box>
              </div>
            </Grid>
            <Box className={classes.leftSide} style={{background: 'linear-gradient(180deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 55%, rgba(58,203,232,1) 100%)'}}>
              <div>
              <NavLink to="/" style={{textDecoration: 'unset', padding: '0', color: '#fff'}}><ArrowBack style={{padding: "1rem 0 0 0"}} fontSize="large"/></NavLink>
              </div>
              <Grid container direction="column" justify="center" alignItems="center" style={{padding: '3em'}}>
                  <h1 style={{margin: "0",fontSize: "40px"}}> INGIN MENDAFTAR? </h1>
                  <div style={{width: "171.28px", height: "291.35px", margin: '1em 0'}}><Icon /></div>
                  <Typography variant="body1" align="center">Daftarkan pemilihan suara anda pada MyVoteID.<br/>Jadikan kegiatan pemilihan anda lebih aman bersama kami.</Typography>
                  <NavLink to="/register" style={{textDecoration: 'unset', color: '#fff'}}><SecondaryButton labelName="REGISTER NOW"/></NavLink>
              </Grid>
            </Box>
        </Grid>
      )
}

export default Login;