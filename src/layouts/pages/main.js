import React from 'react'
import {landingPageRoutes} from '../../routes/landing.page'
import { Redirect, Route, Switch } from 'react-router-dom'

export const pages = (
        <Switch>
            {landingPageRoutes.map(function(route){
                if(route.redirect) return (<Redirect from="/" to="/home"/>)
                return (<Route path={route.path} component={route.component}/>)
            })}
        </Switch>
)