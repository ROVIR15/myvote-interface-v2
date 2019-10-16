import React from 'react'
//React Router
import {Link} from 'react-router-dom'

import {useVoterState} from '../reducers'

import {Button, Grid, Box, Typography} from '@material-ui/core'
import {useStyles} from './classes'

function Sidebar(props){
    const classes = useStyles();
    const [state] = useVoterState()
    const {username, name, token, account, voted, authenticated, uid} = state
    function handleLogout(){
        props.logout();
    }
    return(
            <Box className={classes.sidebar}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid container direction="column" justify="center" alignItems="center" style={{margin: '1em 0'}}>
                    <Grid item className={classes.gMargin2em}>
                        <div style={{ borderRadius: "100%", height: "6em", width: "6em", backgroundColor: "#666666"}}>
                        </div>
                    </Grid>
                    <Grid item style={{margin: "0.3em 0", textAlign: 'center'}}>
                        <Typography variant="body1" style={{fontWeight: "500", color:"#fff"}}>{name ? name : "undefined"}</Typography>
                        <Typography variant="body1" style={{fontWeight: "500"}}>VOTER</Typography>
                    </Grid>
                </Grid>
                <Grid item direction="column" style={{width: '100%', textAlign: 'center', color: '#fff'}}>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ margin: '1em 0'}}>
                        <Grid items direction='column' justify='center' alignItems="center">
                            <Typography variant="body2" style={{}}>ETH</Typography>
                            <Typography variant="body1" style={{fontWeight: "500"}}>0.000001</Typography>
                        </Grid>
                        <Grid items direction='column' justify='center' alignItems="center">
                            <Typography variant="body2" style={{}}>STATUS</Typography>
                            <Typography variant="body1" style={{fontWeight: "500"}}>{authenticated? "AUTHENTICATED" : "undefined"}</Typography> 
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ margin: '0.5em 0'}}>
                        <Grid items direction='column' justify='center' alignItems="center">
                            <Typography variant="body2" style={{}}>COIN</Typography>
                            <Typography variant="body1" style={{fontWeight: "500"}}>50 MFT</Typography>              
                        </Grid>
                        <Grid items direction='column' justify='center' alignItems="center">
                            <Typography variant="body2" style={{}}>VOTING STATUS</Typography>
                            <Typography variant="body1" style={{fontWeight: "500"}}>{voted? "VOTED" : "NOT YET"}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item direction="column" className={classes.gMargin2em} style={{margin: '1em 0'}}>
                    <Grid container direction="column" justify="space-evely" alignItems="center">
                        <Link to="/dashboard/voter/vote"><Button className={classes.vtButton} size="large" style={{margin: '2em 0 1em 0'}}> VOTE<br/>NOW </Button></Link>
                        <Button className={classes.rButton} size="small" style={{margin: '1em 0'}} onClick={handleLogout}>KELUAR</Button>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
    )
}

export default Sidebar;