import React from 'react';
import { useCandidateStepperState } from '../views/admin.kandidat.stepper';
import { Button, Grid, InputBase, Paper, Typography } from '@material-ui/core'
import { withStyles  } from '@material-ui/styles';
import {useStyles} from '../assets/classes'

const Input = withStyles({
    input: {
      textAlign: 'center',
    }
})(InputBase);

export default function AdminStep1(props){
    const classes= useStyles();
    const [candidate, setCandidate] = useCandidateStepperState()

    function handleNext(){
        props.handleNext();
    }
    
    function handleChange(e){
        const {name, value} = e.target
        setCandidate({...candidate, [name]: parseInt(value)});
    }
    
    return (
        <Grid item justify="center" alignItems="center" style={{textAlign: '-webkit-center'}} >
            <Paper elevation={2} className={classes.box1}>
                <Typography variant="h6">BERAPA JUMLAH KANDIDAT YANG AKAN DIINPUTKAN ?</Typography>
            </Paper>
            <Typography variant="body1">Isi pada kotak dibawah ini:</Typography>
            <Paper elevation={2} className={classes.box1} style={{width: '10%'}}>
            <Grid item style={{margin : '1em'}} justity="center" alignItems="center">
                <Input defaultValue="0" name="total" onChange={handleChange} style={{fontSize: '3em', textAlign: 'center'}}/>
                <Typography variant="body1">Kandidat</Typography>
            </Grid>
            </Paper>
            <Button size="large" onClick={handleNext}>SIMPAN</Button>
      </Grid>
)
}