import React from 'react'
import GlobalStyle from 'styles/GlobalStyles'
import SignUp from 'pages/SignUp'
import GlobalProvider from 'hooks'
import Login from './pages/Login/index'

const App: React.FC = () => (
  <>
    <GlobalProvider>
      <Login />
      <SignUp />
    </GlobalProvider>

    <GlobalStyle />
  </>
)

export default App
