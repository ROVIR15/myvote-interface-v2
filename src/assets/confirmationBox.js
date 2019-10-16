import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import {useStyles} from './classes'

function ConfirmationModal(){
    const classes = useStyles();
    
    return(
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
              <Button className={classes.greenButton} size="large" variant="contained"> YA, BENAR </Button>
              <Button className={classes.redButton} size="large" variant="contained"> TIDAK </Button>
            </div>
          </footer>
          </Paper>
        </Grid>
    )
}

export default ConfirmationModal;