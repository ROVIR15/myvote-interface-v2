import React from 'react';

import {useElectionState} from '../reducers'

import { Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Box7 from '../components/admin.navbar.js'
import Box from '../components/main.column.info'
import Box2 from '../components/main.count.down'
import Box1 from '../components/main.content.count'
import TableBC from '../components/TableBC'

function App() {

  const [election, dispatch] = useElectionState();

  const {doc: {transaction_list}, election: {start, end}, candidate, voter} = election;

  return (
        <Grid container direction="column" justify="center" alignItems="center" style={{width: '80%', padding: '0 1em', height: '667px', overflowY: 'auto', display: 'block', background: 'rgb(230,230,230)'}}>
          <Box7 />
          <Grid item style={{margin: '4em 0'}}>
            <Box data={{transaction_list, candidate, voter}}/>
            <Grid item direction="row" style={{display: 'flex', width: '100%', margin: '1em 0'}}>
              <Box1 style={{margin: '0.5em'}}/>
              <Box2 data={{start, end}} style={{margin: '0.5em'}}/>
            </Grid>
            <Grid item>
              <TableBC data={transaction_list}/>
            </Grid>
          </Grid>
        </Grid>
  );
}

export default App;
