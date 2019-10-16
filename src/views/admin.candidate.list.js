import React from 'react';
import { Grid} from '@material-ui/core'
import Box7 from '../components/admin.navbar.js'
import MaterialTable, { MTableToolbar } from 'material-table';

import {useElectionState} from '../reducers'

function App() {
  const [state, dispatch] = useElectionState()
  const {list} = state.candidate
  return (
        <Grid container direction="column" justify="center" alignItems="center" style={{width: '80%', padding: '0 1em', height: '667px', overflowY: 'auto', display: 'block', background: 'rgb(230,230,230)'}}>
          <Box7 />
          <Grid item style={{margin: '4em 0'}}>
            <Grid item>
            <MaterialTable
              title="TABLE KANDIDAT"
              columns={[
                { title: 'No Urut', field: 'no_urut' },
                { title: 'Nama', field: 'nama_kandidat' },
                { title: 'Jenis Kelamin', field: 'jenis_kelamin', type: 'numeric' },
                { title: 'Email', field: 'email'},
                { title: 'Alamat', field: 'alamat'},
                { title: 'Visi dan Misi', field: 'visi_misi'}
              ]}
              
              data={list}

              options={{
                search: true
              }}

              style={{borderRadius: '20px', margin: '0.5em', overflowX: 'auto'}}
            />
            </Grid>
          </Grid>
        </Grid>
  );
}

export default App;
