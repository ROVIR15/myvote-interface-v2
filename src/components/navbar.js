import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {AppBar, Button, Grid, Toolbar, Typography} from '@material-ui/core'
import {useStyles} from '../assets/classes'
import { makeStyles } from '@material-ui/styles';

const useStyleLink = makeStyles(theme => ({
  deco: {
    textDecoration: 'unset', margin: '0 1em', color: '#000',
  },
  deco1: {
    textDecoration: 'unset', margin: '0 2em', color: '#000',
  }
})) 

function NavBar(props) {
    const classes = useStyles()
    const link = useStyleLink()
    const [style, setStyle] = useState({background: '#fff', display: props.display})
    useEffect(()=>{
      setStyle({background: "#fff", display: props.display})
    }, [props.display])
    return(
        <AppBar style={style}>
          <Toolbar style={{color: ''}}>
            <Grid container direction="row" justify="space-between" alignItems="center" >
              <Grid item diretion="column" alignItems="center" justify="center" style={{display: 'flex'}}>
                <div style={{width: '3em', height: '3em', background: 'white', display: 'inline-block'}}>
                </div>
                <NavLink to="/" className={link.deco1} ><Typography variant="button" style={{fontSize: '14px'}} className={classes.blueButtonContained} >HOME </Typography></NavLink>
                <NavLink to="/how-to" className={link.deco1} ><Typography variant="button" style={{fontSize: '14px'}} className={classes.blueButtonContained} >BAGAIMANA CARANYA </Typography></NavLink>
                <NavLink to="/about-us" className={link.deco1} ><Typography variant="button" style={{fontSize: '14px'}} className={classes.blueButtonContained} >TENTANG KAMI </Typography></NavLink>
              </Grid>

              <div>
                <NavLink to="/login" className={link.deco1}><Typography variant="button" style={{fontSize: '16px'}} className={classes.blueButtonContained}>LOGIN </Typography></NavLink>
                <NavLink to="/register" className={link.deco1}><Typography variant="button" style={{fontSize: '16px'}} className={classes.blueButtonContained}> REGISTER </Typography></NavLink>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar;