import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {nodePolyfills} from 'vite-plugin-node-polyfills';
import topLevelAwait from 'vite-plugin-top-level-await';
import {VitePWA} from 'vite-plugin-pwa';
import {pwaOptions} from './src/config/pwa.js';

const PACKAGE_INTO_CHUNKS = {
    'react-router': ['react', 'react-dom', 'react-router-dom', '@remix-run'],
    'crypto': ['hash.js', 'public-encrypt'],
    'polyfill': ['buffer-polyfill', 'bson', 'events', 'util'],
};

export default defineConfig({
    plugins: [nodePolyfills(), react(), topLevelAwait(), VitePWA(pwaOptions)],
    resolve: {
        alias: {
            'readable-stream': 'vite-compatible-readable-stream'
        },
    },
    build: {
        modulePreload: false,
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
    }
});
