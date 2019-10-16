import React, {useState, useReducer, useEffect} from 'react'
import xlsx from 'xlsx'

import {useVoterStepperState} from '../views/admin.pemilih.stepper'

import {Grid, Paper, Typography, Button} from '@material-ui/core'
import {useStyles} from './classes'

function Box7(props){
  const [state, setState] = useState({active: false, fileSrc: [], loaded: false})
  const [voter, setVoter] = useVoterStepperState()
  const classes = useStyles();
  
  function onDragEnter(e) {
    setState({...state, active: true });
  }
  
  function onDragLeave(e) {
    setState({...state, active: false });
  }
  
  function onDragOver(e) { 
    e.preventDefault(); 
  }
  
  function onDrop(e) {
    e.preventDefault();
    setState({...state, active: false });
    onFileChange(e, e.dataTransfer.files[0]);
  }
  
  function handleClick(){
    props.next();
  }

  function onFileChange(e, file) {
      var file = file || e.target.files[0],
          reader = new FileReader();

      reader.readAsArrayBuffer(file)
      // let { dispatch, id_kegiatan } = this.props

      reader.onload = function(e) {
          var data = new Uint8Array(reader.result);
          var arr = new Array();
          for (var i = 0; i != data.length; ++i){
              arr[i] = String.fromCharCode(data[i]);
          }
          var bstr = arr.join("");
          var workbook = xlsx.read(bstr, {
              type: "binary"
          });
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          var listVoter = xlsx.utils.sheet_to_json(worksheet, {
              raw: true
          });
          setState({...state, fileSrc: listVoter, loaded: true})   
          props.change(listVoter)
        }
  }
  
    return(
          <Paper elevation={3} square={false} className={classes.box7} style={{borderRadius: '10px', width: '100%'}}>          
            <Grid container direction="row" style={{width: '100%'}}>
                <Grid item justify="center" alignItems="center" style={{width: '30%'}}>
                  <Typography variant="h5" style={{textAlign: 'center',fontWeight: 'bold',color: 'rgba(13,133,216,1)'}}>BACA INI DULU</Typography>
                  <Paper style={{height: '10em'}}></Paper>
                </Grid>
                <div style={{height: '18em', width: '1em', borderLeft: '2px solid', borderLeftColor: '#a59b9b', margin: '3em 0 2em 1em'}}></div>
                <Grid item justify="center" alignItems="center" style={{width: '30%'}}>
                  <Typography variant="h5" style={{textAlign: 'center',fontWeight: 'bold',color: 'rgba(13,133,216,1)'}}>TEMPLATE<br/>DATA PEMILIH</Typography>
                  <Grid container item direction="column-reverse" style={{margin: '1em 0', height: '13em', border: 'dashed 5px rgba(13,133,216,1)'}}>
                  <Typography variant="h6" style={{textAlign: 'center', fontWeight: 'bold',color: 'rgba(0,0,0,1)'}}>UNDUH TEMPLATE</Typography>
                  </Grid>
                </Grid>
                <div style={{height: '18em', width: '1em', borderLeft: '2px solid', borderLeftColor: '#a59b9b', margin: '3em 0 2em 1em'}}></div>
                <Grid item justify="center" alignItems="center" style={{width: '30%'}} onDragEnter={onDragEnter} onDrop={onDrop} onDragLeave={onDragLeave} onDragOver={onDragOver}>
                  <Typography variant="h5" style={{textAlign: 'center',fontWeight: 'bold',color: 'rgba(13,133,216,1)'}}>UPLOAD<br/>DATA PEMILIH</Typography>
                  <Grid container item direction="column-reverse" style={{margin: '1em 0', height: '13em', border: 'dashed 5px rgba(13,133,216,1)'}}>
                    <input onChange={onFileChange} type="file" accept=".xlsx, application/xlsx"/>
                    <Typography variant="body1" style={{textAlign: 'center', fontWeight: 'bold',color: 'rgba(0,0,0,1)'}}>{!state.loaded ? "UNGGAH DATA DISINI" : "TERUNGGAH"}</Typography>
                  </Grid>
                </Grid >
            </Grid>
            <Button size="large" onClick={handleClick} style={{width: '100%', background: 'rgba(25, 195, 81, 1)', borderRadius: '20px'}}><Typography variant="button" style={{fontSize: '20px', letterSpacing: '4px',color: 'rgba(255,255,255,1)'}}>SIMPAN</Typography></Button>
          </Paper>
    )
}

export default Box7;
