import React, {useEffect} from 'react';

//Context
import {useMainState, useElectionState} from '../reducers';

import admin from '../helpers/api/admin'

import { Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Box7 from '../components/admin.navbar.js'
import Box from '../assets/card.menu'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '0',
    paddingRight: '0'
  }
}));

const menus = {
  utama: [{
    label: 'DASHBOARD',
    path: '/dashboard/admin/main'
  }, {
    label: 'TRANSAKSI SUARA',
    path: '/dashboard/admin/transaksi'
  }],
  kandidat: [{
    label: 'TAMBAH KANDIDAT',
    path: '/dashboard/admin/insert-candidate'
  }, {
    label: 'DATA KANDIDAT',
    path: '/dashboard/admin/tabel-kandidat'
  }],
  pemilih: [{
    label: 'TAMBAH PEMILIH',
    path: '/dashboard/admin/insert-voter'
  }, {
    label: 'DATA PEMILIH',
    path: '/dashboard/admin/tabel-pemilih'
  }]
}

function App() {

  const [state, dispatch] = useMainState();
  const [election, dispatchL] = useElectionState();

  useEffect(() => {
    const res = admin.getElectionInfo();
    if(res.success)
      if(election === res.data)
        dispatchL({type: "REQUEST_GET_ELECTION", data:res.data})
    else
      dispatchL({type: "ERROR", message: "Something error"}) 
  }, [state.status.roles])

  return (
        <Grid container direction="column" justify="center" alignItems="center" style={{width: '80%', padding: '0 1em', height: '667px', overflowY: 'auto', display: 'block', background: 'rgb(230,230,230)'}}>
          <Box7 />
          <Grid item style={{margin: '4em 0'}}>
            <Typography variant="h6" style={{color: 'rgba(13, 133,216, 1)'}}>UTAMA</Typography>
            <Grid container direction="row" >
              {menus.utama.map(function(item){
                return(<Box label={item.label} to={item.path} />)                
              })}
            </Grid>
            <Typography variant="h6" style={{color: 'rgba(13, 133,216, 1)'}}>KANDIDAT</Typography>
            <Grid container direction="row" >
              {menus.kandidat.map(function(item){
                if(item.step) return(<Box label={item.label} to={item.path} step={item.step}/>)
                return(<Box label={item.label} to={item.path} step={0}/>)                
              })}            
            </Grid>
            <Typography variant="h6" style={{color: 'rgba(13, 133,216, 1)'}}>PEMILIH</Typography>
            <Grid container direction="row" >
              {menus.pemilih.map(function(item){
                if(item.step) return(<Box label={item.label} to={item.path} step={item.step}/>)
                return(<Box label={item.label} to={item.path} step={0}/>)                
              })}            
            </Grid>
          </Grid>
        </Grid>
  );
}

export default App;
