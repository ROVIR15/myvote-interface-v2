import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import {routes} from '../../routes/admin.pages';

export const adminPages = (
    <Switch>
        {routes.map(function(route){
            if(route.redirect) return(<Redirect to={route.to}/>)
            return(<Route path={route.path} component={route.component}/>)
        })}
    </Switch>
)