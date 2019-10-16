import React, {useState, useEffect} from 'react';

import {useElectionState} from '../reducers'

import {useVoterStepperState} from '../views/admin.pemilih.stepper'

import admin from '../helpers/api/admin'

import { Grid, Button } from '@material-ui/core'
import {useStyles} from '../assets/classes'

export default function VoterStep3(props){
    const classes = useStyles();
    const [voter, setVoter] = useVoterStepperState()
    const [clicked, setClicked] = useState(false)
    const [election, dispatch] = useElectionState()
    function handleNext(){
        props.next();
    }

    function handleBack(){
        props.back();
    }

    useEffect(()=>{
        function storing(res){
            if(res.success){
                dispatch({type: 'DONE_CREATE_VOTER', isLocked: true});
                handleNext()
            } else {
                dispatch({type: 'ERROR', message: "Something goes wrong when create voter"});
            }
        }

        function send(res){
            if(res.success){
                dispatch({type: "SET_NEW_VOTERS", voters: res.voters});
                setVoter({...voter, list: []})
            }
            else {
                dispatch({type: "ERROR", message: "Something goes wrong when storing new voters"});
                setClicked(false)
            }
        }

        if(clicked){
            admin.sendVoterData(election.election.id, voter.list, send)
            admin.createVoter(election.election_id, voter.list, storing);
        }
    }, [clicked])

    return (
            <Grid item direction="row" style={{display: 'flex', margin: "0 8em"}}>
                <Button className={classes.box2B} onClick={() => setClicked(true)}>
                    <Grid item direction="column">
                    <h3 className={classes.textStyle} style={{fontSize: '24px', margin: '0', color: '#fff'}}> AKTIVASI PEMILIH </h3>
                    <p className={classes.textStyle} style={{fontSize: '18px', margin: '0', color: '#fff'}}> Menyimpan data pemilih </p>
                    </Grid>
                </Button>
                <Button className={classes.box2W} variant="contained">
                    <Grid item direction="column" onClick={handleBack}>
                    <h3 className={classes.textStyle} style={{fontSize: '24px', margin: '0', color: '#000'}}> ULAS KEMBALI </h3>
                    <p className={classes.textStyle} style={{fontSize: '18px', margin: '0', color: '#000'}}> Mengulas kembali data pemilih </p>
                    </Grid>
                </Button>
            </Grid>
    )
}