// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import localStorageProxy from 'local-storage-proxy';
import {ICE_SERVERS, SERVER_SECURE, WEB_SERVER} from '../../config/const.ts';

const defaultSettings = {
    webServer: WEB_SERVER,
    secure: SERVER_SECURE,
    iceServers: ICE_SERVERS as string[]
};

export const settings = localStorageProxy('settings', {
    defaults: defaultSettings
}) as typeof defaultSettings;
