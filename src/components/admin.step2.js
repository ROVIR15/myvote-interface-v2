import React, {useState, useEffect} from 'react';
import { useCandidateStepperState } from '../views/admin.kandidat.stepper';
import { useMainState } from '../reducers'
import {candidateState} from '../contexts/UserContext'

import { Grid } from '@material-ui/core'
import Form from './form.kandidat'

export default function AdminStep2(props){
  const [candidate, setCandidate] = useCandidateStepperState()
  var [clicked, setClicked] = useState(false);
  const [form, setForm] = useState(candidateState.form)
  const [election, dispatch]= useMainState();
  var [q, setq] = useState(1)

  function handleNext(){
    setClicked(true);
  }

  function handleClick(){
    setClicked(true);
  }

  useEffect(() => {
    function saving(){
      setCandidate({...candidate, list: [...candidate.list, form]})
      dispatch({type: "STORE_TEMP_DATA_CANDIDATE", data: form})
      setForm(candidate.form);
    }

    function increment(){
      var temp = q + 1
      setq(temp)
    }

    if(clicked){
      setForm({...form, no_urut: parseInt(q)})
      saving();
      setClicked(false)
      if(q===candidate.total)
        props.handleNext();
      else
        increment();
    }
  }, [clicked])

  function handleChange({name, value}){
    setForm({...form, [name]: value})
  }

    return (
            <Grid item direction="row" justify="center" alignItems="center" style={{display: 'flex'}}>
              <Form form={form} next={handleNext} onClick={handleClick} position={q} change={handleChange}/>
            </Grid>
    )
}