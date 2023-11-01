import {extendTheme, type ThemeConfig} from '@chakra-ui/react';
import THEME_SETTINGS from './theme-options.ts';

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
};

const theme = extendTheme({config}, THEME_SETTINGS) as typeof THEME_SETTINGS;

export default theme;
