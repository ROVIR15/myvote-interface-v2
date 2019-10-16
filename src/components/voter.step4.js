import React, {useState, useEffect} from 'react';

import {useElectionState} from '../reducers'

import {useVoterStepperState} from '../views/admin.pemilih.stepper'

import admin from '../helpers/api/admin'
import { Grid, Button } from '@material-ui/core'
import {useStyles} from '../assets/classes'

export default function VoterStep4(props){
    const classes = useStyles();
    const [election, dispatch] = useElectionState()
    const [voter, setVoter] = useVoterStepperState()
    const [clicked, setClicked] = useState(false)

    function handleNext(){
        props.next();
    }

    useEffect(()=>{
        function storing(res){
            if(res.success){
                dispatch({type: 'DONE_AUTH_VOTER', isAuth: true});
            } else {
                dispatch({type: 'ERROR', message: "Something goes wrong when TRYING TO AUTH voter"});
            }
        }

        if(clicked){
            admin.authVoter(election.election_id, voter.list, storing);
            handleNext()
        }
    }, [clicked])


    return (
            <Grid item direction="row" justify="center" alignItems="center" style={{display: 'flex', margin: "0 8em"}}>
                <Button className={classes.box1} variant="contained" onClick={() => setClicked(true)}>
                    <Grid item direction="column">
                    <h3 className={classes.textStyle} style={{fontSize: '24px', margin: '0', color: '#000'}}> AUTORISASI PEMILIH </h3>
                    <p className={classes.textStyle} style={{fontSize: '18px', margin: '0', color: '#000'}}> Mengesahkan pemilih </p>
                    </Grid>
                </Button>
            </Grid>
    )
}