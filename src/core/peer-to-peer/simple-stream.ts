import PeerRequest, {CallbackChunk} from './peer-request.ts';
import StreamSignals from '../share/remote-download/stream-signals.ts';
import {StreamCallback, StreamResponse} from '../share/remote-directory.ts';
import {STREAM_FILE_CHUNK_SIZE} from '../share/virtual-fs/virtual-file.ts';

export default class SimpleStream {
    public constructor(private _peer: PeerRequest) {

    }

    public async streamContent<T>(path: string, body: T, stream: StreamCallback, signal?: StreamSignals) {
        const promises: (void | Promise<void>)[] = [];
        await new Promise((close, reject) => {
            this._peer.request(path, body, async (response: StreamResponse<Uint8Array>, chunkIndex = 0, totalChunks = 1) => {

                if (typeof response === 'object' && response && 'error' in response) {
                    reject(new Error(response.error));
                    return;
                }

                promises.push(stream(response, chunkIndex, totalChunks));

                if (chunkIndex === totalChunks - 1) {
                    close(null);
                }
            }, signal);
        });
        await Promise.all(promises);
    }

    public async requestString(path: string, body?: string){
        let content = '';
        await this.streamContent(path, body, (response) => {
            content += response;
        });

        return content;
    }

    public static sendString(content: string, sendChunk: CallbackChunk<string>){
        const chunks = Math.ceil(content.length / STREAM_FILE_CHUNK_SIZE);
        let currentChunk = 0;

        while(currentChunk < chunks){
            const sliceContent = content.slice(0, STREAM_FILE_CHUNK_SIZE);
            content = content.slice(STREAM_FILE_CHUNK_SIZE);
            sendChunk(sliceContent, currentChunk++, chunks);
        }
    }
}


