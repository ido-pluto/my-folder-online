import PeerDataConnection from '../peer-to-peer/peer-data-connection.ts';
import VirtualFs from './virtual-fs/virtual-fs.ts';
import {LikeFile} from './virtual-fs/virtual-item.ts';
import StreamSignals from './remote-download/stream-signals.ts';
import SimpleStream from '../peer-to-peer/simple-stream.ts';
import {ShareDirectoryMetadata} from './share-directory.ts';
import Peer from 'peerjs';

export type StreamResponse<T> = T | {error: string};
export type StreamCallback = (response: Uint8Array, chunk: number, totalChunks: number) => Promise<void> | void

export default class RemoteDirectory {
    private _dataConnection?: PeerDataConnection;
    private _simpleStream?: SimpleStream;
    private _metadata?: ShareDirectoryMetadata;
    public fs?: VirtualFs;
    public peer?: Peer;

    public constructor(private _shareId: string) {
    }

    public async init() {
        const {peer} = await PeerDataConnection.newPeerConnection();
        this.peer = peer;

        const newDataConnection = peer.connect(this._shareId, {reliable: true});
        this._dataConnection = new PeerDataConnection(newDataConnection);

        await this._dataConnection.waitOpen();
        this._simpleStream = new SimpleStream(this._dataConnection);
        await this._fetchFS();
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
        this.peer?.destroy();
    }
}
