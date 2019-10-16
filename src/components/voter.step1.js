import React from 'react';
import {useVoterStepperState} from '../views/admin.pemilih.stepper'
import {useMainState} from '../reducers'
import { Grid } from '@material-ui/core'
import Form from '../assets/form.insert.voter'

export default function VoterStep1(props){
    const [state, setState] = useVoterStepperState();
    const [info, dispatch] = useMainState();
    function handleNext(){
      props.next();
    }

    function onChange(data){
      setState({...state, list: data})
      dispatch({type: "STORE_TEMP_DATA_VOTER", data: data})
    }

    return (
        <Grid item direction="row" justify="center" alignItems="center" style={{display: 'flex'}}>
          <Form next={handleNext} change={onChange}/>
        </Grid>
    )
}