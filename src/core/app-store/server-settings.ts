import {settings} from './localstorage.ts';
import _ from 'lodash';

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
        return _.cloneDeep(settings.iceServers);
    }
}
