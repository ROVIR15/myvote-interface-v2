import React, {useEffect, useState} from "react"
import {Button} from "@material-ui/core"
import {useStyles} from "./classes"

function MainButton(props){
    const classes = useStyles();
    const [clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(true)
        if(props.labelName === "LOGIN")
            props.login();
        if(props.labelName === "REGISTER")
            props.submit();
    }

    return (
        <Button className={classes.mainButton} size="large" onClick={handleClick}>{props.labelName}</Button>
    )
}

export default MainButton;