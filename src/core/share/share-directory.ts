import PeerManager from '../peer-to-peer/peer-manager.ts';
import VirtualFs from './virtual-fs/virtual-fs.ts';
import VirtualFile from './virtual-fs/virtual-file.ts';
import VirtualDirectory from './virtual-fs/virtual-directory.ts';
import {type StreamResponse} from './remote-directory.ts';
import sleep from 'sleep-promise';
import {CallbackChunk} from '../peer-to-peer/peer-data-connection.ts';
import SimpleStream from '../peer-to-peer/simple-stream.ts';

const SEND_DELAY_MS = 10;

export type ShareDirectoryMetadata = {
    rootDirectoryName: string;
}
export default class ShareDirectory {
    public metadata: ShareDirectoryMetadata = {
        rootDirectoryName: 'Root directory'
    }
    private _peerManager?: PeerManager;
    private _fs: VirtualFs;

    public get peerId() {
        return this._peerManager?.peerId;
    }
    public constructor(files: File[]) {
        if(!files.length){
            throw new Error('No files selected');
        }
        this._fs = VirtualFs.deserializable(files);
    }

    public async share(){
        this._fs.readFiles();
        this._peerManager = new PeerManager();
        await this._peerManager.init();

        this._peerManager.listen('/fs', this._fetchFS.bind(this));
        this._peerManager.listen('/file', this._streamFile.bind(this));
    }

    private _fetchFS(_: unknown, sendChunk: CallbackChunk<string>){
        const files = this._fs.serializable();
        const fs = {
            metadata: this.metadata,
            files
        }
        SimpleStream.sendString(JSON.stringify(fs), sendChunk);
    }

    private async _streamFile(path: string, sendChunk: CallbackChunk<StreamResponse<Uint8Array>>){
        const file = this._fs.getItem(path);

        if(!file || file instanceof VirtualDirectory){
            return sendChunk({error: `No file with path ${path}`}, 0, 1);
        }

        const asFile = file as VirtualFile;
        const totalChunks = asFile.chunks;

        let index = 0;
        for await (const chunks of asFile.send()){

            // make sure the garbage collector can do its job (sleep is necessary)
            const promises: Promise<void>[] = [sleep(SEND_DELAY_MS)];
            for(const chunk of chunks){
                promises.push(sendChunk(chunk, index++, totalChunks));
            }

            await Promise.all(promises);
        }
    }

    stop() {
        this._peerManager?.destroy();
    }
}
