import React from 'react'

import { ToastProvider } from './Toast'
import { AuthProvider } from './Auth'

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  )
}

export default GlobalProvider
