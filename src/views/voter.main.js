import React, {useEffect} from 'react'

import {useVoterState, useMainState} from '../reducers'

import voterApi from '../helpers/api/voter'

import {Grid, Typography} from '@material-ui/core'
import Box2 from '../components/main.count.down'
import Box from '../components/main.content.count'
import TableBC from '../components/TableBC'

function VoterDashboard() {
    const [voter, dispatch] = useVoterState();
    const [state] = useMainState()
    const {start, end} = voter.election

    useEffect(() => {
      const res = voterApi.getVoterData();
      if(res.success)
        dispatch({type: "REQUEST_GET_ELECTION", data:res.data})
      else
        dispatch({type: "ERROR", message: "Something error"})
    }, [state.status.roles]);
  
    return (
        <Grid container direction="column" style={{width: '80%', padding: '0 1em', maxHeight: '667px', overflowY: 'auto', display: 'block', background: 'rgb(230,230,230)'}}>
          <Typography variant="h6" style={{margin: '0.5em 1em', color: 'rgba(13,133,216,1)'}}> DASHBOARD VOTER </Typography>
          <Grid item direction="row" style={{display: 'flex', width: '100%'}}>
            <Box style={{marginLeft: '0.5em'}}/>
            <Box2 data={{start, end}} style={{margin: '0.5em'}}/>
          </Grid>
          <Grid item direction="row" style={{display: 'flex', width: '100%', margin: '1em 0', maxHeight: '25em'}}>
          <TableBC />
          </Grid>
        </Grid>
    )
}

export default VoterDashboard;