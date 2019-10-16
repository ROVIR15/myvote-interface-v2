import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import {useMainState} from '../reducers'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useMainState();
  return (
    <Route
      {...rest}
      render={props => {
        return state.status.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
        )
      }}
    />
  )
}

export default PrivateRoute;