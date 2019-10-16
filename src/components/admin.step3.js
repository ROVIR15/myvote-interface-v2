import React, {useEffect, useState} from 'react';

import {useElectionState} from '../reducers'
import { useCandidateStepperState } from '../views/admin.kandidat.stepper';

import admin from '../helpers/api/admin'

import { Grid } from '@material-ui/core'
import {useStyles} from '../assets/classes'
import TableKandidat from './TableKandidat'

export default function AdminStep3(props){
    const [click, setClick] = useState(false)
    const [info, dispatch] = useElectionState()
    const [state, setState] = useCandidateStepperState() 

    function getData(){
      if(!state.list)
        return info.temp.candidate.list
      return state.list
    }

    useEffect(()=> {
      function send(res){
        if(res.success){
          dispatch({type: "SET_NEW_CANDIDATES", candidates: res.candidates});
          setState({...state, list: []})
          props.handleNext();
        }
        else {
          dispatch({type: "ERROR", message: "Something goes wrong when storing new voters"});
          setClick(false)
        }
      }
      
      if(click)
        admin.sendCandidateData(info.election.id, state.list, send)
    }, [click])

    return (
            <Grid item>
              <TableKandidat data={getData} next={()=> setClick(true)}/>
            </Grid>
    )
}