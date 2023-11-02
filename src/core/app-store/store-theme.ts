import {isDarkModeEnabled} from 'color-scheme-detector';

const LOCAL_STORAGE_THEME_KEY = 'chakra-ui-color-mode';

export function setDefaultTheme() {
    const haveValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (haveValue) return;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, isDarkModeEnabled() ? 'dark' : 'light');
}
