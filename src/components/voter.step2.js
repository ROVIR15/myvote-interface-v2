import React, {useEffect, useState} from 'react';
import {useElectionState} from '../reducers'

import admin from '../helpers/api/admin'

import {useVoterStepperState} from '../views/admin.pemilih.stepper';
import { Grid } from '@material-ui/core'
import TablePemilih from './TablePemilih'

export default function VoterStep2(props){
  const [state, setState] = useVoterStepperState();
  const [info, dispatch] = useElectionState();
  
  function handleBack(){
    props.back();
  }

  function handleNext(){
    props.next();
  }

  return (
    <Grid item>
      <TablePemilih data={state.list} back={handleBack} next={handleNext}/>
    </Grid>
  )
}
