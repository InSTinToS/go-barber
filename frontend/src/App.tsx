import React from 'react'
import GlobalStyle from 'styles/GlobalStyles'
import SignUp from 'pages/SignUp'
import { AuthProvider } from 'context/AuthContext'
import Login from './pages/Login/index'

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Login />
      <SignUp />
    </AuthProvider>
    <GlobalStyle />
  </>
)

export default App
