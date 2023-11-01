import {CallbackChunk} from './peer-request.ts';

export default class ReceiveChunk {
    private _checkHold: {[key: number]: any} = {};
    private _totalChunks = 1;
    private _receivedChunks = 0;
    private _closed = false;
    public update = new Date();

    get closed(){
        return this._closed;
    }

    constructor(private _callback: CallbackChunk<any>, private _close: () => void) {
    }

    public pushChunk(body: any, chunkIndex: number, totalChunks = 0) {
        this._totalChunks = Math.max(this._totalChunks, totalChunks);

        if (this._checkByOrder(body, chunkIndex))
            return;

        this._addCheckToHold(body, chunkIndex);
    }

    private _addCheckToHold(body: any, chunkIndex: number) {
        this._checkHold[chunkIndex] = body;
    }

    private _checkByOrder(body: any, chunkIndex: number) {
        if (chunkIndex !== this._receivedChunks)
            return false;


        this._callback(body, chunkIndex, this._totalChunks);
        this._receivedChunks++;

        this.update = new Date();
        this._checkClose();

        const nextChunk = this._checkHold[this._receivedChunks];
        if(nextChunk){
            delete this._checkHold[this._receivedChunks];
            this._checkByOrder(nextChunk, this._receivedChunks);
        }

        return true;
    }

    private _checkClose() {
        if (this._receivedChunks === this._totalChunks) {
            this._closed = true;
            this._close();
        }
    }
}
