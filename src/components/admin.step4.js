import React, {useState, useEffect} from 'react';

import {useElectionState} from '../reducers'

import admin from '../helpers/api/admin'

import { Grid, Button } from '@material-ui/core'
import {useStyles} from '../assets/classes'

export default function AdminStep4(props){
    const [ciicked, setClicked] = useState(false)
    const classes= useStyles();
    const election = useElectionState()

    function next(){
        setClicked(true)
    }

    function back(){
        props.handleBack();
    }

    useEffect(()=> {
        function check(res){
            const [state, dispatch] = election
            if(res.success){
                setClicked(false)
                dispatch({type: "DONE_SEND_CANDIDATE", status: true})
            } else {
                dispatch({type: "ERROR", message: "Failed to send new candidate"})
            }
        }

        if(ciicked){
            const id = "123"
            admin.createCandidate(id, check);
            props.handleNext();
        }
    }, [ciicked])

    return (
            <Grid item direction="row" style={{display: 'flex', margin: "0 8em"}}>
                <Button className={classes.box2B} onClick={next}>
                    <Grid item direction="column">
                    <h3 className={classes.textStyle} style={{fontSize: '24px', margin: '0', color: '#fff'}}> LOCK KANDIDAT </h3>
                    <p className={classes.textStyle} style={{fontSize: '18px', margin: '0', color: '#fff'}}> Kunci data kandidat </p>
                    </Grid>
                </Button>
                <Button className={classes.box2W} variant="contained" onClick={back}>
                    <Grid item direction="column">
                    <h3 className={classes.textStyle} style={{fontSize: '24px', margin: '0', color: '#000'}}> ULAS KEMBALI </h3>
                    <p className={classes.textStyle} style={{fontSize: '18px', margin: '0', color: '#000'}}> Mengulas kembali data </p>
                    </Grid>
                </Button>
            </Grid>
    )
}