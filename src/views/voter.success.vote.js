import React from 'react';

import {useVoterState} from '../reducers'

import { Grid, Typography} from '@material-ui/core'
import {ReactComponent as Icon} from '../assets/img/voted-illustration.svg'

function App() {
  const [state] = useVoterState();

  return (
    <Grid container direction="column" justify="center" alignItems="center" style={{width: '80%', padding: '0 1em', height: '667px', overflowY: 'auto', display: 'block', textAlign: 'center',color: 'rgb(230,230,230)'}}>          <Grid item direction="column" style={{margin: '1em'}}>
            <Typography variant="h4" style={{margin: '0.2em', color: 'rgba(13,133,216,1)'}}> SELAMAT! SUARA TERSALURKAN </Typography>
          </Grid>
          <Grid item>
          <Grid container direction="row" justify="space-evenly" alignItems="center" style={{margin: '2em 0'}}>
            <Icon style={{height: '22em', width: '22em'}}/>
          </Grid>
          <Grid container direction="row" justify="space-evenly" alignItems="center" style={{margin: '2em 0'}}>
              <Grid item style={{padding: '0 4em'}}>
                <Typography variant="body1" style={{color:'#000'}}>Dengan ini kamu telah selesai dan kode dibawah merupakan kode transaksi suara kamu dan kode unik yang bias dibagikan ke orang lain.</Typography>
              </Grid>
              <Grid item style={{margin: '0.6em 0'}}>
                <Typography variant="h5" style={{color:'#000'}}>{state.info.transaction_hash}</Typography>
                <Typography variant="h5" style={{color:'#000'}}>kodekode</Typography>
              </Grid>
          </Grid>
          </Grid>
        </Grid>
  );
}

export default App;
