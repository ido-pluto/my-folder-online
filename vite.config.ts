import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';
import {pwaOptions} from './src/config/pwa.js';

const PACKAGE_INTO_CHUNKS = {
    'react': ['@remix-run', 'react-dom', 'react-router-dom'],
    'styled-system': ['styled-system', '@emotion', 'Core', 'theme-options.ts'],
    'peerjs': ['peerjs', 'webrtc', 'lodash', 'cbor-x'],
    'framer-motion': ['framer-motion'],
};

export default defineConfig({
    plugins: [react(), VitePWA(pwaOptions)],
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
