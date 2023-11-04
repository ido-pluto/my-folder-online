import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import theme from './config/theme.ts';
import {ColorModeScript, ColorModeScriptProps} from '@chakra-ui/react';
import {setDefaultTheme} from './core/app-store/store-theme.ts';

setDefaultTheme();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode as ColorModeScriptProps['initialColorMode']} />
      <App />
    </>,
)
