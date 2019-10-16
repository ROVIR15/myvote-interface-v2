import React from 'react';
import {Redirect} from 'react-router-dom';

import {useVoterState} from '../reducers'
import { Grid, Typography} from '@material-ui/core'
import Box3 from '../assets/candidate.card'

function App() {
  const [state] = useVoterState();
  const [voter, dispatch] = useVoterState();

  function check(){
    if(voter.info.voted)
      return (<Redirect to="/dashboard/voter/success-vote"/>)
    else
      return null
  }
  return (
        <Grid container direction="column" justify="center" alignItems="center" style={{width: '80%', padding: '0 1em', height: '667px', overflowY: 'auto', display: 'block', textAlign: 'center',color: 'rgb(230,230,230)'}}>
          <Grid item direction="column" style={{margin: '1em'}}>
            <Typography variant="h4" style={{margin: '0.2em', color: 'rgba(13,133,216,1)'}}> PEMILIHAN LANGSUNG </Typography>
            <Typography variant="body1" style={{color: '#000'}}>Gunakan hak suara anda dengan memilih salah satu kandidat</Typography>
          </Grid>
          <Grid item>
          <Grid container direction="row" justify="space-evenly" alignItems="center" style={{margin: '2em 0'}}>
            {state.election.candidate_list.map(function(candidate){
              return(<Grid item>
                <Box3 name={candidate.name}/>
              </Grid>)
            })}
          </Grid>
          </Grid>
          {check()}
        </Grid>
  );
}

export default App;
