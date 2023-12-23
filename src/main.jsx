import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './routes'

import  GlobalStyles  from './styles/global' //stilo global da pagina
import { ThemeProvider } from 'styled-components'//para compartilhar o tema com toda a aplicaçao
import  theme  from './styles/theme'//tema da aplicaçao

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
