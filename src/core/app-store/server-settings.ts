import {settings} from './localstorage.ts';

export default class ServerSettings {
    private static get _secureChar() {
        return settings.secure ? 's' : '';
    }

    static get wsServer() {
        return `ws${this._secureChar}://${settings.webServer}`;
    }

    static get httpServer() {
        return `http${this._secureChar}://${settings.webServer}`;
    }

    static get iceServers() {
        return settings.iceServers.map(url => ({urls: url}));
    }
}
