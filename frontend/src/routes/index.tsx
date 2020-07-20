import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import SignUp from 'pages/SignUp'
import Login from 'pages/Login/index'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
