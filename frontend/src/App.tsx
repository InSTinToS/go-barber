import React from 'react'
import GlobalStyle from 'styles/GlobalStyles'
import SignUp from 'pages/SignUp'
import Login from './pages/Login/index'

const App: React.FC = () => {
  return (
    <>
      <Login />
      <SignUp />
      <GlobalStyle />
    </>
  )
}

export default App
