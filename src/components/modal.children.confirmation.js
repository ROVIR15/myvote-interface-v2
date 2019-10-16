import React from "react";
import {Button, Fade, Grid, Paper} from '@material-ui/core'
import {useStyles} from '../assets/classes'

function ConfirmationComponent(props){
    const classes = useStyles()
    
    function handleClose(){
        props.cancel();
    }

    function handleSend(){
        props.vote();
    }

    return (
      <Fade in={true}>
        <Grid item direction="row" style={{display: 'flex'}} justify="center">
        <Paper className={classes.box8} square={true} elevation={3}>
          <header>
          <div>
            <p className={classes.boxTitleStyle2}>STICKY TITLE BOX</p>
          </div>
          </header>
          <body>
            <p className={classes.textStyle}>
              THIS IS CONFIRMATION BOX
            </p>
          </body>
          <footer>
            <div style={{margin: '2em 0', marginTop: '4em', textAlign: 'right'}}>
              <Button className={classes.greenButton} onClick={handleSend} size="large" variant="contained"> YA, BENAR </Button>
              <Button className={classes.redButton} onClick={handleClose} size="large" variant="contained"> TIDAK </Button>
            </div>
          </footer>
        </Paper>
        </Grid>
      </Fade>
    )
}
  
export default ConfirmationComponent