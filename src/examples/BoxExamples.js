import React from 'react';
import { Container, Grid, Button, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#E6E6E6',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    paddingLeft: '0',
    paddingRight: '0'
  },
  box1:{
    background: 'rgb(255,255,255)',
    height: '15em',
    width: "62em",
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
  box2: {
    background: 'rgb(255,255,255)',
    width: "37em",
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
  box3: {
    background: 'rgb(255,255,255)',
    height: '8em',
    width: "100%",
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
  box4: {
    background: 'rgb(255,255,255)',
    width: "30em",
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
  box5: {
    background: 'rgb(255,255,255)',
    width: "30em",
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
  box6: {
    background: 'rgb(255,255,255)',
    width: "24%",
    margin: '0.5em 0.5%',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
  box7: {
    background: 'rgb(255,255,255)',
    width: "32.5%",
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
  box8: {
    background: 'rgb(255,255,255)',
    width: "50%",
    margin: '0.5em 1em',
    padding: '0.5em 1.5em',
    borderRadius: "20px",
    textAlign: 'center'
  },
  box9: {
    background: 'rgb(255,255,255)',
    width: "50%",
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
  boxTitleStyle1: {
    color: "rgba(1,96,201,1)",
    fontSize: "18px",
    margin: "0",
    marginBottom: "0.1em",
    fontWeight: "bold",
  },
  boxTitleStyle2: {
    color: "rgba(1,96,201,1)",
    fontSize: "24px",
    margin: "0.4em",
    fontWeight: "bold",
  },
  boxTextStyle: {
    color: "#666",
    fontSize: "16px",
    margin: "0",
  },
  boxTextStyle2: {
    width: "50%"
  },
  chartBox: {
    width: "65%",
    height: "9em",
    background: "#555555"
  },
  chartLegend: {
    background: "#666",
    width: "33%",
    height: "9em",
  },
  dateBoxStyle: {
    display: "inline-flex",
    margin: "0.5em 0"
  },
  dayStyle: {
    fontSize: "60px",
    margin: '0'
  },
  dayCapStyle: {
    fontSize: "16px",
    margin: '0',
    paddingTop: '3.2em'
  },
  textStyle: {
    margin: '0.5em',
    fontSize: '18px'
  },
  textBoldStyle: {
    fontWeight: 'bold',
    margin: '0.5em',
    fontSize: '18px'
  },
  textLightStyle: {
    fontWeight: 'lighter',
    margin: '0.5em',
    fontSize: '18px'    
  },
  timeBoxStyle1: {
    display: "block"
  },
  timeBoxStyle2: {
    display: "inline-flex",
    padding: "0 0.5em"
  },
  timeStyle: {
    fontSize: "30px",
    margin: '0'
  },
  timeCapStyle: {
    fontSize: '16px',
    paddingTop: '0.1em'
  },
  redButton: {
    background: 'rgb(255,255,255)',
    color: 'rgb(255,0,0)',
    margin: '0 1em'
  },
  greenButton: {
    background: 'linear-gradient(200deg, rgba(9, 165, 60, 0.9) 0%, rgb(47, 232, 44) 100%)',
    color: 'rgba(255,255,255,1)',
    margin: '0 1em'
  }
}))

function BoxExamples() {

    const classes = useStyles();

    return (
      <Container maxWidth="xl" className={classes.root} p={0} m={0}>
        <Grid item direction="row" style={{display: 'flex'}} justify='center'>
          <Paper elevation={2} className={classes.box9}>
            <div>
            </div>
            <div>
              <h3 className={classes.textStyle} style={{fontSize: '24px', margin: '0'}}> LABEL NAME </h3>
              <p className={classes.textStyle} style={{fontSize: '18px', margin: '0'}}> qwerty lorem ipsum </p>
            </div>
          </Paper>        
        </Grid>
        <Grid item direction="row" style={{display: 'flex', margin: "0 8em"}}>
          <Paper elevation={2} className={classes.box8}>
            <div>
            </div>
            <div>
              <h3 className={classes.textStyle} style={{fontSize: '24px', margin: '0'}}> LABEL NAME </h3>
              <p className={classes.textStyle} style={{fontSize: '18px', margin: '0'}}> qwerty lorem ipsum </p>
            </div>
          </Paper>
          <Paper elevation={2} className={classes.box8}>
            <div>
            </div>
            <div>
              <h3 className={classes.textStyle} style={{fontSize: '24px', margin: '0'}}> LABEL NAME </h3>
              <p className={classes.textStyle} style={{fontSize: '18px', margin: '0'}}> qwerty lorem ipsum </p>
            </div>
          </Paper>
        </Grid>
        <Grid item direction="row" style={{display: 'flex'}}>
          <Paper elevation={3} square={false} className={classes.box7}>
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
          <Paper elevation={3} square={false} className={classes.box7}>
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
          <Paper elevation={3} square={false} className={classes.box7}>
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
        <Grid item direction="row" style={{display: 'flex'}}>  
          <Paper elevation={3} square={false} className={classes.box6}>
            <div style={{margin: '0.5em'}}>
              <div style={{background: "rgba(6,38,182,1)", weight: "100%", height: '10em', margin: '0.5em 0'}}>
              </div>
              <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', letterSpacing: '5px'}}>
                <p style={{margin: '0'}}>MENU NAME</p>
              </div>
            </div>
          </Paper>
          <Paper elevation={3} square={false} className={classes.box6}>
            <div style={{margin: '0.5em'}}>
              <div style={{background: "rgba(6,38,182,1)", weight: "100%", height: '10em', margin: '0.5em 0'}}>
              </div>
              <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', letterSpacing: '5px'}}>
                <p style={{margin: '0'}}>MENU NAME</p>
              </div>
            </div>
          </Paper>
          <Paper elevation={3} square={false} className={classes.box6}>
            <div style={{margin: '0.5em'}}>
              <div style={{background: "rgba(6,38,182,1)", weight: "100%", height: '10em', margin: '0.5em 0'}}>
              </div>
              <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', letterSpacing: '5px'}}>
                <p style={{margin: '0'}}>MENU NAME</p>
              </div>
            </div>
          </Paper>
          <Paper elevation={3} square={false} className={classes.box6}>
            <div style={{margin: '0.5em'}}>
              <div style={{background: "rgba(6,38,182,1)", weight: "100%", height: '10em', margin: '0.5em 0'}}>
              </div>
              <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 'bold', letterSpacing: '5px'}}>
                <p style={{margin: '0'}}>MENU NAME</p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item direction="row" style={{display: 'flex'}}>
        <Paper elevation={3} square={false} className={classes.box1}>
          <div>
            <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
          </div>
          <div style={{display: "flex", margin: "0.2em 0"}}>
            <div className={classes.chartBox}>
            </div>
            <div className={classes.chartLegend}>
            </div>
          </div>
        </Paper>
        <Paper elevation={3} rounded className={classes.box2}>
          <div>
            <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
            <div style={{display: "flex"}}>
              <div className={classes.boxTextStyle2}>
              <p className={classes.boxTextStyle}> Pemilihan Berakhir </p>
              </div>
              <div className={classes.boxTextStyle2}>
              <p className={classes.boxTextStyle} style={{textAlign: "right"}}> 26-Aug-2019 </p>
              </div>
            </div>
            <div>
              <p className={classes.boxTextStyle}> Waktu Tersisa </p>
            </div>
            <div style={{margin: "0 auto", display: "block", heigth: "11em"}}>
              <div style={{display: "inline", textAlign: "center"}}>
            <center>
              <div className={classes.dateBoxStyle}>
                <p className={classes.dayStyle}> 6 </p>
                <p className={classes.dayCapStyle}> Hari </p>
              </div>
            </center>
            <div className={classes.timeBoxStyle1}>
              <center>
                <div className={classes.timeBoxStyle2}>
                  <p className={classes.timeStyle}>22</p>
                  <p className={classes.timeCapStyle}>Jam</p>
                </div>
                <div className={classes.timeBoxStyle2}>
                  <p className={classes.timeStyle}>22</p>
                  <p className={classes.timeCapStyle}>Menit</p>
                </div>
                <div className={classes.timeBoxStyle2}>
                  <p className={classes.timeStyle}>22</p>
                  <p className={classes.timeCapStyle}>Detik</p>
                </div>
              </center>
            </div>
            </div>
            </div>
          </div>          
        </Paper>
        </Grid>
        <Grid item direction="row" style={{display: 'flex'}} justify="center">
          <Paper className={classes.box4} square={true} elevation={3}>
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
        <Grid item direction="row" style={{display: 'flex'}}>
          <Paper elevation={3} square={false} className={classes.box3}>          
            <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
          </Paper>
        </Grid>
        <Grid item direction="row" style={{display: 'flex'}}>
          <Paper elevation={3} square={false} className={classes.box3}>          
            <p className={classes.boxTitleStyle1}>STICKY TITLE BOX</p>
          </Paper>
        </Grid>
      </ Container>
    );
}

export default BoxExamples;
