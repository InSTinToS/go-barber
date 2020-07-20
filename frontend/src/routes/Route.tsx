import React from 'react'
import { useAuth } from 'hooks/Auth'
import {
  RouteProps as RouterPropsDOM,
  Route as RouteDOM,
  Redirect,
} from 'react-router-dom'

interface RouteProps extends RouterPropsDOM {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth()

  return (
    <RouteDOM
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export default Route
