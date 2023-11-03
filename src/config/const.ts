export const WEB_SERVER = import.meta.env.VITE_WEB_SERVER || 'localhost:8080';
export const SERVER_SECURE = import.meta.env.VITE_SERVER_SECURE;
export const ICE_SERVERS: RTCIceServer[] =
    import.meta.env.VITE_ICE_SERVERS && JSON.parse(import.meta.env.VITE_ICE_SERVERS) ||
    [
        {
            urls: 'turn:turn.anyfirewall.com:443?transport=tcp',
            credential: 'webrtc',
            username: 'webrtc'
        },
        {
            urls: ['stun:stun.l.google.com:19302']
        }
    ];
