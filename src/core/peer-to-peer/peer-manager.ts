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
    private static _serverWS = new WebSocketRequest(WEB_SOCKET_SERVER);
    private static _serverWSActiveDirectories = 0;
    private _destroyed = false;
    public shareId = uuid();

    private _peers: {
        [id: string]: SimplePeer.Instance
    } = {};

    private _requestInfo: {
        [resource: string]: PeerManagerRequestCallback
    } = {};

    public constructor() {
        this._createNewPeer = this._createNewPeer.bind(this);
        this._signalPeer = this._signalPeer.bind(this);
    }

    public async initServerWS() {
        const serverWS = await this._makeSureServerWSConnected();

        await serverWS.request('new-share', this.shareId);

        PeerManager._serverWSActiveDirectories++;
        serverWS.listen(`new-peer/${this.shareId}`, this._createNewPeer);
        serverWS.listen(`signal-peer/${this.shareId}`, this._signalPeer);
    }

    public listen(resource: string, callback: PeerManagerRequestCallback) {
        this._requestInfo[resource] = callback;
    }

    private _createNewPeer(): Promise<NewPeerResponse> {
        const peerId = uuid();
        const peer = new SimplePeer({
            initiator: true,
            trickle: false
        })

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

    destroy() {
        if (this._destroyed || !PeerManager._serverWS)
            return;

        const serverWS = PeerManager._serverWS;

        serverWS.unregisterListen(`new-peer/${this.shareId}`);
        serverWS.unregisterListen(`signal-peer/${this.shareId}`);

        for(const peer of Object.values(this._peers)){
            peer.destroy();
        }

        PeerManager._serverWSActiveDirectories--;
        this._destroyed = true;

        if (PeerManager._serverWSActiveDirectories === 0) {
            serverWS.close();
        }
    }

    private async _makeSureServerWSConnected() {
        PeerManager._serverWS ??= new WebSocketRequest(WEB_SOCKET_SERVER);
        if (!PeerManager._serverWS.connected) {
            await PeerManager._serverWS.connect();
        }

        return PeerManager._serverWS;
    }

    private _initPeerMethods(peer: InstanceType<typeof SimplePeer>, peerId: string){
        peer.once('close', () => {
            delete this._peers[peerId];
        });

        const peerRequest = new PeerRequest(peer);
        for(const [resource, callback] of Object.entries(this._requestInfo)){
            peerRequest.listen(resource, (body, sendChunk) =>
                callback(body, sendChunk, peerRequest)
            );
        }
    }
}
