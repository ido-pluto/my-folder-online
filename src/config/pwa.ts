import type {ManifestOptions, VitePWAOptions} from 'vite-plugin-pwa';
import type {Preset} from '@vite-pwa/assets-generator/config';
import type {DeepPartial} from '@chakra-ui/react';

export const pwaOptions: Partial<VitePWAOptions> = {
    includeAssets: ['logo.svg', 'pwa.svg', 'pwa.png'],
    strategies: 'generateSW',
    registerType: 'prompt',
    injectRegister: 'auto',
    workbox: {
        skipWaiting: true,
        clientsClaim: true,
        globPatterns: [
            '**/*.{js,css,html,png,svg}',
        ],
        runtimeCaching: [
            {
                urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'images',
                    expiration: {
                        maxEntries: 1,
                    }
                }
            }
        ]
    },
    manifest: {
        name: 'My folder online',
        short_name: 'Share folder',
        description: 'Small webapp to share files between devices (peer-to-peer)',
        theme_color: '#d3e2e7',
        background_color: '#d3e2e7',
        screenshots: [
            {
                src: '/screenshots/download-dark.png',
                sizes: '756x756',
                type: 'image/png',
                form_factor: 'wide',
            },
            {
                src: '/screenshots/explorer-dark.png',
                sizes: '756x756',
                type: 'image/png',
                form_factor: 'wide',
            },
        ],
        icons: [
            {
                src: 'pwa-64x64.png',
                sizes: '64x64',
                type: 'image/png'
            },
            {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: 'maskable-icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ]
    }
};

const manifest = pwaOptions.manifest as ManifestOptions;


export const preset: DeepPartial<Preset> = {
    maskable: {
        resizeOptions: {
            background: manifest.background_color
        }
    },
    apple: {
        resizeOptions: {
            background: manifest.background_color
        }
    }
};
