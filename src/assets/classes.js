import {makeStyles} from "@material-ui/styles"

export const useStyles = makeStyles(theme => ({
    box1: {
        background: 'rgb(255,255,255)',
        width: "50%",
        margin: '0.5em',
        padding: '0.5em 1.5em',
        borderRadius: "20px"
    },    
    box2W: {
        background: 'rgb(255,255,255)',
        width: "50%",
        margin: '0.5em 1em',
        padding: '0.5em 1.5em',
        borderRadius: "20px",
        textAlign: 'center',
        color: '#000'
    },
    box2B: {
        background: 'linear-gradient(60deg, rgba(13,133,216,1) 0%, rgba(58, 203, 232,1) 100%)',
        width: "50%",
        margin: '0.5em 1em',
        padding: '0.5em 1.5em',
        borderRadius: "20px",
        textAlign: 'center'
    },
    box3: {
        background: 'rgb(255,255,255)',
        width: "32.5%",
        margin: '0.5em',
        padding: '0.5em 1.5em',
        borderRadius: "20px"
    },
    box4: {
        background: 'rgba(255,255,255,1)',
        margin: '0.5em 0.5em',
        padding: '0.5em 1.5em',
        borderRadius: "20px"
    },
    box5:{
        background: 'rgb(255,255,255)',
        width: "62em",
        marginRight: '0.5em',
        padding: '0.5em 1.5em',
        borderRadius: "20px"
    },  
    box6: {
        background: 'rgb(255,255,255)',
        width: "37em",
        marginLeft: '0.5em',
        padding: '0.5em 1.5em',
        borderRadius: "20px"
    },
    box7: {
        background: 'rgb(255,255,255)',
        margin: '0.5em',
        padding: '0.5em 1.5em',
        borderRadius: "10px"
    },
    box8: {
        background: 'rgb(255,255,255)',
        width: "30em",
        margin: '0.5em',
        padding: '0.5em 1.5em',
        borderRadius: "20px"
    },          
    boxTitleStyle1: {
        color: "rgba(255,0,0,1)",
        fontSize: "14px",
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
        color: "",
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
    FormInput: {
        width: "18em",
        justifyContent: "center",
        margin: ""
    },
    FormBox: {
        marginTop: "1em"
    },
    gcs: {
        background: 'linear-gradient(60deg, rgba(13,133,216,1) 0%, rgba(58, 203, 232,1) 100%)',
        color: "#ffffff",
        padding: "5em 0 0 0",
        height: "667px"
    },
    gclr: {
        color: "#ffffff",
        height: "667px"
    },
    gi1: {
        textAlign: "center",
        display: "flex",
        margin: "2em auto 1em auto"
    },
    gi2: {
        textAlign: "center",
        display: "flex",
        margin: "1em auto",
        marginBottom: "0px"
    },
    gi3: {
        textAlign: "center",
        display: "flex",
        margin: "0 auto"
    },
    inheritWhite: {
        color: "#ffffff",
    },
    item: {
        color: "#000000",
        background: 'white',
        width: "41%",
        height: "667px"
    },
    linkOpt: {
        color: "#666666",
        margin: "auto"
    },
    leftSide: {
        color: "#ffffff",
        padding: "0.5",
        width: "59%"
    },
    textCenter: {
        textAlign: "center",
        display: "block"
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
    mainButton: {
        width: "75%",
        borderRadius: "45px",
        background: "linear-gradient(65deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 64%, rgba(58,203,232,1) 100%)",
        color: "#FFFFFF",
        margin: '3em auto 0 auto'
    },
    secondaryButton: {
        color: "#FFFFFF", 
        borderRadius: "30px", 
        width: "15em", 
        border: "solid", 
        marginTop: "1em", 
        fontSize: "14px"
    },
    gMargin2em: {
        color: "#ffffff"
      },
      sidebar: {
        background: 'linear-gradient(180deg, rgba(0,65,199,1) 0%, rgba(1,96,201,1) 31%, rgba(13,133,216,1) 55%, rgba(58,203,232,1) 100%)',
        width: "20%",
        boxShadow: "2px 2px 5px #666"
      },
      vtButton: {
        background: 'linear-gradient(133deg, rgba(0,65,199,1) 0%, rgba(0,33,100,1) 100%, rgba(0,33,100,1) 100%, rgba(58,203,232,1) 100%)',
        width: "6em",
        color: "#fff",
        height: "6em",
        borderRadius: "20px",
        fontWeight: "500",
        fontSize: "24px",
        padding: "0 1.75%", 
      },
      rButton: {
        color: "#FFFFFF",
        background: 'linear-gradient(9deg, rgba(255,0,0,1) 0%, rgba(176,22,2,1) 73%, rgba(139,0,0,1) 100%, rgba(100,0,0,1) 100%, rgba(0,33,100,1) 100%)',
        display: "block",
        height: "2em",
        borderRadius: "35px",
        width: "9em",
        fontSize: "15px",
        padding: "0 1.75%",
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