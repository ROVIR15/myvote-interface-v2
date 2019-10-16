import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import {useStyles} from './classes'

function Box3(){
    const classes = useStyles();
    
    return(
        <Grid item direction="row" style={{display: 'flex'}}>
          <Paper elevation={3} square={false} className={classes.box3}>
            <header>
              <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
            </header>
            <body>
              <div style={{display: 'block', textAlign: 'center'}}>
                <p className={classes.textLightStyle}> JUMLAH KANDIDAT </p>
                <p className={classes.textBoldStyle}> XXXXX </p>
                <p className={classes.textLightStyle}> STATUS </p>
                <p className={classes.textBoldStyle}> STATUS TAG </p>
              </div>
            </body>
          </Paper>
          <Paper elevation={3} square={false} className={classes.box3}>
            <header>
              <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
            </header>
            <body>
              <div style={{display: 'block', textAlign: 'center'}}>
                <p className={classes.textLightStyle}> JUMLAH KANDIDAT </p>
                <p className={classes.textBoldStyle}> XXXXX </p>
                <p className={classes.textLightStyle}> STATUS </p>
                <p className={classes.textBoldStyle}> STATUS TAG </p>
              </div>
            </body>
          </Paper>
          <Paper elevation={3} square={false} className={classes.box3}>
            <header>
              <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
            </header>
            <body>
              <div style={{display: 'block', textAlign: 'center', margin: "2em 0"}}>
                <p className={classes.textLightStyle} style={{fontSize: '20px'}}> JUMLAH TRANSAKSI SUARA </p>
                <p className={classes.textBoldStyle} style={{fontSize: '24px'}}> XXXXX </p>
              </div>
            </body>
          </Paper>
        </Grid>
    )
}

export default Box3;