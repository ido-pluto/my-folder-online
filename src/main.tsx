import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import theme from './config/theme.ts';
import {ColorModeScript, ColorModeScriptProps} from '@chakra-ui/react';
import {setDefaultTheme} from './core/app-store/store-theme.ts';

setDefaultTheme();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode as ColorModeScriptProps['initialColorMode']} />
      <App />
  </React.StrictMode>,
)
