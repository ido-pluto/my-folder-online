import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './config/theme.ts';
import {ColorModeScript} from '@chakra-ui/react';
import {ColorModeScriptProps} from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode as ColorModeScriptProps['initialColorMode']} />
      <App />
  </React.StrictMode>,
)
