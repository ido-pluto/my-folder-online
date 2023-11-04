import {settings} from './localstorage.ts';
import cloneDeep from 'lodash/cloneDeep.js';
import {PeerOptions} from 'peerjs';

export function getPeerOptions() {
    const options: PeerOptions = {};

    if (settings.iceServers.length) {
        options.config = {
            iceServers: cloneDeep(settings.iceServers)
        };
    }

    if (settings.webServer) {
        const url = new URL(`https://${settings.webServer}`);
        options.host = url.hostname;
        options.port = Number(url.port);
        options.path = url.pathname;
        options.secure = settings.secure;
    }

    return options;
}
