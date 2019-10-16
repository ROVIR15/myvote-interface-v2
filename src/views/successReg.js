import React from 'react'

import {useMainState} from '../reducers'

import {Link, Redirect} from 'react-router-dom'
import { Grid, Box } from '@material-ui/core'
import {useStyles} from "../assets/classes"

function SuccessRegistrationPage(){
    const classes = useStyles();
    const [state, dispatch] = useMainState();

    return(
        <Grid container direction="column" className={classes.gcs} alignContent="flex">
            <Box className={classes.textCenter}>
                <div>
                    <h1 style={{fontSize: "36px", letterSpacing: "2px"}}> SUKSES MENAMBAHKAN PEMILIHAN </h1>
                </div>
            </Box>
            <Box className={classes.gi1}>
            <div>
                <div style={{height: "200.39px", width: "450.7px", backgroundColor:"#0160C9", position: "absolute", color: "#000000", textAlign: "center"}}>
                    <div style={{padding: "2em 0", color: "#ffffff"}}>
                    <h3 style={{margin: "0", fontSize: "3em"}}> {state.newUser.username} </h3>
                    <h4 style={{margin: "0", fontSize: "1.4rem"}}> PASSWORD: {state.newUser.password}</h4>
                    </div>
                </div>
                <div style={{paddingTop:"1em"}}>
                    <div style={{height: "200.39px", width: "450.7px", backgroundColor:"#3ACBE8", marginLeft: "1em"}}></div>
                </div>
            </div>
            </Box>
            <Box className={classes.gi2}>
                <div>
                    <p style={{fontSize: "18px", fontWeight: "500", padding:"0 11em"}}>Selamat pemilihan anda telah terdaftar, anda dapat melanjutkan melakukan konfirgurasi pemilihan. Pergunakan Username dan Password diatas untuk dapat masuk.</p>
                </div>
            </Box>
            <Box className={classes.gi3}>
                <div style={{fontSize: "18px", fontWeight: "500", display: "flex"}}>
                    <Link to="/" style={{margin: "0 5em"}}> KE BERANDA </Link>
                    <Link to="/login" style={{margin: "0 5em", color:"#ffffff"}}> MASUK </Link>
                </div>
            </Box>
        </Grid>
    )
}

export default SuccessRegistrationPage;