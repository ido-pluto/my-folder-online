import VirtualItem from './virtual-item.ts';

export const STREAM_FILE_CHUNK_SIZE = 256000; // 250kb

export default class VirtualFile extends VirtualItem {

    get chunks() {
        return Math.ceil(this.file!.size / STREAM_FILE_CHUNK_SIZE);
    }

    async * send(bunchSize = 2) {
        if (!(this.file instanceof File)) {
            throw new Error('Not a real file');
        }

        const chunks = this.chunks;
        const sendQueue: Promise<ArrayBuffer>[] = [];
        let currentChunk = 0;

        while (currentChunk < chunks) {
            const start = currentChunk * STREAM_FILE_CHUNK_SIZE;
            const end = Math.min((currentChunk + 1) * STREAM_FILE_CHUNK_SIZE, this.file.size);
            const arrayBuffer = this.file.slice(start, end).arrayBuffer();
            sendQueue.push(arrayBuffer);

            if(currentChunk % bunchSize === 0 || currentChunk === chunks - 1){
                const allChunks = await Promise.all(sendQueue);
                const asUint8Chunks =allChunks.map(chunk => new Uint8Array(chunk));
                yield asUint8Chunks;
                sendQueue.length = 0;
            }

            currentChunk++;
        }
    }
}
