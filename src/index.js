import React from 'react';
import ReactDOM from 'react-dom';
import {SnackbarProvider} from 'notistack'
import { createBrowserHistory } from "history";
import './index.css';

import PrivateRoute from './assets/PrivateRoute'

import {MainProvider} from './reducers'

import App from './layouts/main';
import Voter from './layouts/voter';
import Admin from './layouts/admin';

import {Router, Route, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

function Init(){
    return(
    <SnackbarProvider>
    <MainProvider>
        <Router history={hist}>
            <Switch>
                <PrivateRoute path="/dashboard/admin" component={Admin} />
                <PrivateRoute path="/dashboard/voter" component={Voter} />
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </MainProvider>
    </SnackbarProvider>
    )
}

const hist = createBrowserHistory()

ReactDOM.render(
    <Init/>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
