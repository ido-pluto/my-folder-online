export const WEB_SERVER = import.meta.env.VITE_WEB_SERVER || 'localhost:8080';
export const SERVER_SECURE = import.meta.env.VITE_SERVER_SECURE;
export const ICE_SERVERS: RTCIceServer[] =
    import.meta.env.VITE_ICE_SERVERS && JSON.parse(import.meta.env.VITE_ICE_SERVERS) ||
    [
        {urls: 'stun:stun.l.google.com:19302'},
        {urls: 'stun:stun1.l.google.com:19302'},
    ];
