import React from 'react'
import {NavLink} from 'react-router-dom'
import {Grid, Button, Typography} from '@material-ui/core'
import {useStyles} from './classes'

//You should use Grid systems before using Box4
//code of Grid is below
//<Grid item direction="row" style={{display: 'flex'}}>  

function Box4(props){
    const classes = useStyles();
    
    return(
        <NavLink to={props.to} style={{textDecoration: 'unset', color: 'unset'}}><Button square={false} className={classes.box4} variant="contained" style={{padding: '0', width: '10em', height: '10em'}}>
            <Grid container direction="column-reverse">
                <Typography variant="button">{props.label}</Typography>
            </Grid>
        </Button></NavLink>
    )
}

export default Box4;