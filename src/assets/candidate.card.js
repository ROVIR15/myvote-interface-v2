import React, {useState, useEffect} from 'react'

import {useVoterState} from '../reducers'
import voter from '../helpers/api/voter'

import Portal from '../components/Portal';
import ModalComponent from '../components/modal';
import ConfirmationComponent from '../components/modal.children.confirmation'
import {Button, Grid, Paper, Typography} from '@material-ui/core'
import {useStyles} from './classes'
import {ReactComponent as Avatar} from './img/Avatar.svg'

function Box4({name}){
    const classes = useStyles();
    const [state, dispatch] = useVoterState()
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false)

    function handleClose(){
        dispatch({type: "CLOSE_MODAL"})
        setOpen(false)
    }

    useEffect(()=> {
        function sendVote(arg){
            if(arg.success)
                dispatch({type: "VOTED", transaction_hash: arg.transactionHash})
            else 
                dispatch({type: "ERROR", message: "Something goes wrong!"})
        }

        if(!state.info.voted && click){
            voter.postVoterData(state.election.id, {something: "test"}, sendVote);
            setClick(false)
            setOpen(false)
        }
    }, [click])

    return(
        <Paper elevation={3} square={false} className={classes.box4} style={{padding: '0'}}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <Paper elevation={0} style={{background: 'aqua', width: '15em', borderStartStartRadius: '10px', padding: '2em', borderRadius: '1em 1em 0 0'}}>
                        <Grid container direction="row" justify="center">
                            <Avatar height="6em"/>
                        </Grid>
                    </Paper>
                </Grid>
                <Portal id="modal-root">
                    <ModalComponent open={open} children={ConfirmationComponent} vote={() => setClick(true)} cancel={handleClose}/>          
                </Portal>
                <Grid item style={{margin: '0.5em 1em'}}>
                <Grid item justify="center" alignItems="center" style={{margin: '1em'}}>
                    <Typography variant="h6" style={{letterSpacing: '1px'}}>{name}</Typography>
                    <Typography variant="body2"> Kandidat </Typography>
                </Grid>
                <Grid item style={{marginBottom: '1em'}}>
                    <Button onClick={() => setOpen(true)} style={{background: 'linear-gradient(133deg, rgba(0,65,199,1) 0%, rgba(0,33,100,1) 100%, rgba(0,33,100,1) 100%, rgba(58,203,232,1) 100%)', width: '100%', borderRadius: '15px'}}> <Typography variant="button" style={{color: '#fff'}}>VOTE</Typography></Button>
                </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Box4;