import {defineConfig, minimalPreset} from '@vite-pwa/assets-generator/config';
import _ from 'lodash';
import {preset} from './src/config/pwa.js';

export default defineConfig({
    preset: _.merge(preset, minimalPreset),
    images: [
        'public/pwa.svg'
    ]
});
