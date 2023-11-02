import {VitePWAOptions} from 'vite-plugin-pwa';

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
                src: '/screenshots/dark-theme.png',
                sizes: '756x756',
                type: 'image/png',
                form_factor: 'wide',
            },
            {
                src: '/screenshots/light-theme.png',
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
