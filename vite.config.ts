import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import topLevelAwait from 'vite-plugin-top-level-await';
import {VitePWA} from 'vite-plugin-pwa';
import {pwaOptions} from './src/config/pwa.js';

const PACKAGE_INTO_CHUNKS = {
    'react': ['@remix-run', 'react-dom', 'react-router-dom'],
    'framer-motion': ['framer-motion'],
    'simple-peer': ['simple-peer', 'bson', 'lodash'],
    'styled-system': ['styled-system', '@emotion', 'Core', 'theme-options.ts'],
};

export default defineConfig({
    plugins: [topLevelAwait(), react(), VitePWA(pwaOptions)],
    resolve: {
        alias: {
            'simple-peer': 'simple-peer/simplepeer.min.js',
        },
    },
    build: {
        minify: true,
        rollupOptions: {
            output: {
                manualChunks(id: string) {
                    for (const [key, value] of Object.entries(PACKAGE_INTO_CHUNKS)) {
                        if (value.find(x => id.includes(x))) {
                            return key;
                        }
                    }
                },
            },
        }
    },
});
