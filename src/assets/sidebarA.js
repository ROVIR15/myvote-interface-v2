import React from 'react'

import {useElectionState} from '../reducers'

//React Router
import {Link} from 'react-router-dom'
import {Box, Grid, Typography} from '@material-ui/core'
import {useStyles} from './classes'

function SidebarA(props){
    const classes = useStyles();
    const [info, dispatch] = useElectionState()
    return(
            <Box className={classes.sidebar}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid container direction="column" justify="center" alignItems="center" style={{margin: '1em 0'}}>
                    <Grid item className={classes.gMargin2em}>
                        <div style={{ borderRadius: "100%", height: "6em", width: "6em", backgroundColor: "#666666"}}>
                        </div>
                    </Grid>
                    <Grid item style={{margin: "0.3em 0", textAlign: 'center'}}>
                        <Typography variant="body1" style={{fontWeight: "500", color:"#fff"}}>{info.administrator.name ? info.administrator.name : "undefined"}</Typography>
                        <Typography variant="body1" style={{fontWeight: "500"}}>ADMINISTRATOR</Typography>
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
                            <Typography variant="body1" style={{fontWeight: "500"}}>AUTHENTICATED</Typography> 
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item direction="column" className={classes.gMargin2em} style={{margin: '1em 0', width: '100%',padding: '0 2em'}}>
                    <Link to="/dashboard/admin/menu" style={{color: '#fff', margin: '1em 0'}}><Typography variant="body1" style={{margin: '2em 0', letterSpacing: '1px'}}>HOME </Typography></Link>
                    <Link to="/dashboard/admin/pemilih" style={{color: '#fff', margin: '1em 0'}}><Typography variant="body1" style={{margin: '2em 0', letterSpacing: '1px'}}>PEMILIH </Typography></Link>
                    <Link to="/dashboard/admin/kandidat" style={{color: '#fff', margin: '1em 0'}}><Typography variant="body1" style={{margin: '2em 0', letterSpacing: '1px'}}>KANDIDAT </Typography></Link>
                    <Link to="/dashboard/admin/" style={{color: '#fff', margin: '1em 0'}}><Typography variant="body1" style={{margin: '2em 0', letterSpacing: '1px'}}>TRANSAKSI LANGSUNG </Typography></Link>
                </Grid>
            </Grid>
            </Box>
    )
}

export default SidebarA;