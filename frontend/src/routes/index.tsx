import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import SignUp from 'pages/SignUp'
import Login from 'pages/Login/index'
import Dashboard from '../pages/Dashboard/index'
import Route from './Route'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
