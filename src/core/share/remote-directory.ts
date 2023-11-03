import WebSocketRequest from '../peer-to-peer/web-socket-request.ts';
import SimplePeer from 'simple-peer';
import {NewPeerResponse} from '../peer-to-peer/peer-manager.ts';
import PeerRequest from '../peer-to-peer/peer-request.ts';
import VirtualFs from './virtual-fs/virtual-fs.ts';
import {LikeFile} from './virtual-fs/virtual-item.ts';
import StreamSignals from './remote-download/stream-signals.ts';
import SimpleStream from '../peer-to-peer/simple-stream.ts';
import {ShareDirectoryMetadata} from './share-directory.ts';
import ServerSettings from '../app-store/server-settings.ts';

export type StreamResponse<T> = T | {error: string};
export type StreamCallback = (response: Uint8Array, chunk: number, totalChunks: number) => Promise<void> | void

export default class RemoteDirectory {
    private _serverWS?: WebSocketRequest;
    private _peer?: PeerRequest;
    private _simpleStream?: SimpleStream;
    private _metadata?: ShareDirectoryMetadata;
    public fs?: VirtualFs;
    public peerEvents?: SimplePeer.Instance;

    public constructor(private _shareId: string) {
    }

    public async init() {
        this._serverWS = new WebSocketRequest();
        await this._serverWS.connect(ServerSettings.wsServer);
        await this._connect();
        await this._fetchFS();
    }

    private async _connect() {
        const serverWS = this._serverWS;
        if (!serverWS) {
            throw new Error('No ws server connection');
        }

        // SimplePeer is not es6 module
        this.peerEvents = new SimplePeer({
            initiator: false,
            trickle: true,
            config: {
                iceServers: ServerSettings.iceServers
            }
        });

        const remoteSignal = await serverWS.request<NewPeerResponse, string>('new-peer', this._shareId);

        if (remoteSignal.error) {
            throw new Error(remoteSignal.error);
        }

        this.peerEvents.once('signal', data => {
            serverWS.request('signal-peer', {
                shareId: this._shareId,
                peerId: remoteSignal.peerId,
                connectInfo: JSON.stringify(data)
            });
        });

        this.peerEvents.once('connect', () => {
            serverWS.close();
        });

        this.peerEvents.signal(JSON.parse(remoteSignal.connectInfo));
        this._peer = new PeerRequest(this.peerEvents);
        await this._peer.connect();
        this._simpleStream = new SimpleStream(this._peer);
    }

    private async _fetchFS() {
        if (!this._simpleStream) {
            throw new Error('No stream connection');
        }

        const stringFS =  await this._simpleStream.requestString('/fs');
        const {files, metadata} = JSON.parse(stringFS);

        this._metadata = metadata;
        this.fs = VirtualFs.deserializable(files, this._metadata?.rootDirectoryName);
    }
    public async streamFile(file: LikeFile, stream: StreamCallback, signal?: StreamSignals) {
        if (!this._simpleStream) {
            throw new Error('No stream connection');
        }

        await this._simpleStream.streamContent('/file', file.webkitRelativePath, stream, signal);
    }
    close() {
        this._serverWS?.close();
        this.peerEvents?.end();
    }
}
