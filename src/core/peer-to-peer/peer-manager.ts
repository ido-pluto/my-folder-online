import PeerDataConnection, {CallbackChunk} from './peer-data-connection.ts';
import Peer from 'peerjs';

type PeerManagerRequestCallback = (body: any, sendChunk: CallbackChunk<any>, peer: PeerDataConnection) => any;
export type NewPeerResponse = {
    peerId: string,
    connectInfo: string
    error?: string
}

export default class PeerManager {
    private _requestInfo: {
        [resource: string]: PeerManagerRequestCallback
    } = {};
    private _peer?: Peer;
    public peerId?: string;

    public async init() {
        const {peer, id} = await PeerDataConnection.newPeerConnection();

        this._peer = peer;
        this.peerId = id;

        this._peer.on('connection', conn => {
            console.log('new connection');
            const dataConnection = new PeerDataConnection(conn);
            this._initDataConnectionMethods(dataConnection);
        });
    }

    private _initDataConnectionMethods(peer: PeerDataConnection) {
        for (const [resource, callback] of Object.entries(this._requestInfo)) {
            peer.listen(resource, (body, sendChunk) =>
                callback(body, sendChunk, peer)
            );
        }
    }

    public listen(resource: string, callback: PeerManagerRequestCallback) {
        this._requestInfo[resource] = callback;
    }

    public destroy() {
        this._peer?.destroy();
    }
}
