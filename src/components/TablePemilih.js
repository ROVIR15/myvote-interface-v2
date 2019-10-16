import React from 'react';
import { Grid, Button } from '@material-ui/core'
import {useStyles} from '../assets/classes'
import MaterialTable, { MTableToolbar } from 'material-table';

function TablePemilih(props) {
    const classes = useStyles()

    function handleNext(){
      props.next();
    }
    function handleBack(){
      props.back();
    }
      
    return (
        <MaterialTable
        title="Basic Search Preview"
        columns={[
          { title: 'ID Pemilih', field: 'id_pemilih' },
          { title: 'Nama', field: 'nama' },
          { title: 'Jenis Kelamin', field: 'jenis_kelamin', type: 'numeric' },
          { title: 'Email', field: 'email'},
          { title: 'Alamat', field: 'alamat'}
        ]}
        data={props.data}
        options={{
          search: false
        }}

        components={{
          Toolbar: props => (
            <Grid item direction="row" style={{display: 'block'}}>
              <MTableToolbar {...props} />
              <div style={{textAlign: "right"}}>
                <Button size="medium" onClick={handleNext} style={{margin: '0 1em', width: '10em', background: 'rgba(25, 195, 81, 1)', color: '#fff', borderRadius: '20px'}}> LANJUTKAN </Button>
                <Button size="medium" onClick={handleBack} style={{margin: '0 1em', width: '10em', color: '#666', borderRadius: '20px'}} variant="inherit"> KEMBALI </Button>
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

export default TablePemilih;