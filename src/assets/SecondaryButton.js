import React, {useState} from "react"
import {Button} from "@material-ui/core"
import {useStyles} from "./classes"

function SecondaryButton(props){
    const classes = useStyles();
    return (
        <Button className={classes.secondaryButton} size="large">{props.labelName}</Button>
    )
}

export default SecondaryButton;