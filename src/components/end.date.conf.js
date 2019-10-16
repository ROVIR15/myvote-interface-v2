import React from 'react'

import {useElectionState} from '../reducers'

import {Grid, Typography, InputBase} from '@material-ui/core'
import { withStyles  } from '@material-ui/styles';

const DatePicker = withStyles({
    root: {
      lineHeight: 'unset'
    },
    input: {
      textAlign: 'right',
      fontSize: '2rem',
    }
})(InputBase)  

export default function EndDate(){
  const [election, dispatch] = useElectionState();

  function handleChange(e){
    const {name, value} = e.target  
    dispatch({type: "CHANGE_FORM_ELECTION", formState: {[name]: value}})
  }

  return(
        <Grid container direction="column" justify="center" alignItems="center" style={{margin: '1em 0'}}>
          <Typography variant="body2" style={{font: '#666', textAlign: 'center'}}>Tanggal berapa pemilihan ini berakhir</Typography>
          <DatePicker name="end_date" onChange={handleChange} id="date" type="date"/>
        </Grid>
    )
}