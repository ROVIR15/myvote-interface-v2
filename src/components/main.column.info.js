import React, {useEffect} from 'react'
import {Grid, Paper} from '@material-ui/core'
import {useStyles} from '../assets/classes'

function App(props){
    const classes = useStyles();
    const {data} = props;
    function gainInfoCandidate(candidate){
      if(!candidate.list.length)
        return "TIDAK ADA KANDIDAT"
      else {
        if(candidate.isLocked)
          return "TERKUNCI"
        else 
          return "BELUM TERKUNCI"
      }
    }

    function gainInfoVoter(voter){
      if(!voter.list.length)
        return "TIDAK ADA PEMILIH"
      else {
        if(voter.isLocked)
          if(!voter.isAuth)
            return "BELUM TERAUTORISASI"
          else 
            return "SELESAI"
        else 
          return "BELUM TERKUNCI"
      }
    }

    return(
        <Grid item direction="row" style={{display: 'flex'}}>
          <Paper elevation={3} square={false} className={classes.box3}>
            <header>
              <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
            </header>
            <body>
              <div style={{display: 'block', textAlign: 'center'}}>
                <p className={classes.textLightStyle}> JUMLAH KANDIDAT </p>
                <p className={classes.textBoldStyle} > {data.candidate.list.length} </p>
                <p className={classes.textLightStyle}> STATUS </p>
                <p className={classes.textBoldStyle} > {gainInfoCandidate(data.candidate)} </p>
              </div>
            </body>
          </Paper>
          <Paper elevation={3} square={false} className={classes.box3}>
            <header>
              <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
            </header>
            <body>
              <div style={{display: 'block', textAlign: 'center'}}>
                <p className={classes.textLightStyle}> JUMLAH PEMILIH </p>
                <p className={classes.textBoldStyle} > {data.voter.list.length} </p>
                <p className={classes.textLightStyle}> STATUS </p>
                <p className={classes.textBoldStyle} > {gainInfoVoter(data.voter)}</p>
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
                <p className={classes.textBoldStyle} style={{fontSize: '28px'}}> {data.transaction_list.length} </p>
              </div>
            </body>
          </Paper>
        </Grid>
    )
}

export default App;