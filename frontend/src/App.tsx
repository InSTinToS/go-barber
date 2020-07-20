import React from 'react'
import GlobalStyle from 'styles/GlobalStyles'
import GlobalProvider from 'hooks'
import Routes from 'routes'

const App: React.FC = () => (
  <>
    <GlobalProvider>
      <Routes />
    </GlobalProvider>

    <GlobalStyle />
  </>
)

export default App
