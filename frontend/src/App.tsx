import React from 'react'

import GlobalStyle from 'styles/GlobalStyles'

import Routes from 'routes'

import GlobalProvider from 'hooks'

const App: React.FC = () => (
  <>
    <GlobalProvider>
      <Routes />
    </GlobalProvider>

    <GlobalStyle />
  </>
)

export default App
