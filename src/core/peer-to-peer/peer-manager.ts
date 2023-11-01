import SimplePeer from 'simple-peer';
import {WEB_SOCKET_SERVER} from '../../config/const.ts';
import WebSocketRequest from './web-socket-request.ts';
import {v4 as uuid} from 'uuid';
import PeerRequest, {CallbackChunk} from './peer-request.ts';

type PeerManagerRequestCallback = (body: any, sendChunk: CallbackChunk<any>, peer: PeerRequest) => any;
export type NewPeerResponse = {
    peerId: string,
    connectInfo: string
    error?: string
}

export default class PeerManager {
    private _serverWS?: WebSocketRequest;
    public shareId = uuid();

    private _peers: {
        [id: string]: SimplePeer.Instance
    } = {};

    private _requestInfo: {
        [resource: string]: PeerManagerRequestCallback
    } = {};

    public async initServerWS() {
        this._serverWS = new WebSocketRequest(new WebSocket(WEB_SOCKET_SERVER));
        this._serverWS.onRequest('new-peer', this._createNewPeer.bind(this));
        this._serverWS.onRequest('signal-peer', this._signalPeer.bind(this));
        await this._serverWS.connect();
        await this._serverWS.request('update-id', this.shareId);
    }

    private _createNewPeer(): Promise<NewPeerResponse> {
        const peerId = uuid();
        const peer = new (window as any).SimplePeer({
            initiator: true,
            trickle: false
        }) as SimplePeer.Instance;

        this._peers[peerId] = peer;
        this._initPeerMethods(peer, peerId);

        return new Promise(res => {
            peer.once('signal', data => {
                res({
                    peerId,
                    connectInfo: JSON.stringify(data)
                });
            });
        });
    }

    private _signalPeer({peerId, connectInfo}: {peerId: string, connectInfo: string}) {
        const peer = this._peers[peerId];

        if (!peer) {
            console.error(`No peer with id ${peerId}`);
            return {error: `No peer with id ${peerId}`};
        }

        peer.signal(JSON.parse(connectInfo));
        return {ok: true};
    }

    private _initPeerMethods(peer: InstanceType<typeof SimplePeer>, peerId: string){
        peer.once('close', () => {
            delete this._peers[peerId];
        });

        const peerRequest = new PeerRequest(peer);
        for(const [resource, callback] of Object.entries(this._requestInfo)){
            peerRequest.onRequest(resource, (body, sendChunk) =>
                callback(body, sendChunk, peerRequest)
            );
        }
    }

    public onRequest(resource: string, callback: PeerManagerRequestCallback){
        this._requestInfo[resource] = callback;
    }

    destroy() {
        this._serverWS?.close();
        for(const peer of Object.values(this._peers)){
            peer.destroy();
        }
        this._peers = {};
    }
}
