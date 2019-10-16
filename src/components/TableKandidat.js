import React from 'react';

//Context
import {useElectionState} from '../reducers'

//API
import admin from '../helpers/api/admin'

import { Grid, Button } from '@material-ui/core'
import MaterialTable, { MTableToolbar } from 'material-table';

function TableKandidat(props) {
    const {data} = props;
    function handleSubmit(){
      props.next();
    }

    function handleBack(){
      props.back()
    }
  
    return (
            <MaterialTable
              title="Basic Search Preview"
              columns={[
                { title: 'No Urut', field: 'no_urut' },
                { title: 'Nama', field: 'nama_kandidat' },
                { title: 'Jenis Kelamin', field: 'jenis_kelamin', type: 'numeric' },
                { title: 'Email', field: 'email'},
                { title: 'Alamat', field: 'alamat'},
                { title: 'Visi dan Misi', field: 'visi_misi'}
              ]}
              data={data}        
              options={{
                search: false
              }}

              components={{
                Toolbar: props => (
                  <Grid item direction="row" style={{display: 'block'}}>
                    <MTableToolbar {...props} />
                    <div style={{textAlign: "right"}}>
                      <Button size="medium" onClick={handleSubmit} style={{margin: '0 1em', background: 'rgba(21,204,113,1)', width: "10em", color: '#fff', borderRadius: '20px'}}> LANJUTKAN </Button>
                    </div>
                  </Grid>
                )
              }}

              actions={[
                {
                  icon: 'save',
                  tooltip: 'Save User',
                  onClick: (event, rowData) => alert("You saved " + rowData.name)
                },
                rowData => ({
                  icon: 'delete',
                  tooltip: 'Delete User',
                  onClick: (event, rowData) => alert("You want to delete " + rowData.name),
                  disabled: rowData.birthYear < 2000
                })
              ]}
              
              style={{borderRadius: '20px', margin: '0.5em', overflowX: 'auto'}}
            />
    )
}

export default TableKandidat;