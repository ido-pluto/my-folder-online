export const WEB_SERVER = import.meta.env.VITE_WEB_SERVER || 'localhost:8080';
export const SERVER_SECURE = import.meta.env.VITE_SERVER_SECURE;
export const ICE_SERVERS: RTCIceServer[] =
    import.meta.env.VITE_ICE_SERVERS && JSON.parse(import.meta.env.VITE_ICE_SERVERS) ||
    [
        {
            urls: 'turn:numb.viagenie.ca',
            credential: 'muazkh',
            username: 'webrtc@live.com'
        },
        {
            urls: 'turn:192.158.29.39:3478?transport=tcp',
            credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            username: '28224511:1379330808'
        },
        {
            urls: 'turn:turn.anyfirewall.com:443?transport=tcp',
            credential: 'webrtc',
            username: 'webrtc'
        },
        {
            urls: 'turn:192.158.29.39:3478?transport=tcp',
            credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            username: '28224511:1379330808',
        },
    ];
