import {STREAM_FILE_CHUNK_SIZE} from '../virtual-fs/virtual-file.ts';
import StreamSignals from './stream-signals.ts';
import VirtualItem from '../virtual-fs/virtual-item.ts';
import PullProgress, {IStreamProgress, TransferProgressInfo} from 'ipull/pull-progress';
export enum DownloadStatus {
    PENDING,
    DOWNLOADING,
    PAUSED,
}

export default class RemoteDownload extends IStreamProgress {
    protected _downloadStatus = DownloadStatus.PENDING;
    protected _chunkProgress = 0;
    protected _metadata?: TransferProgressInfo;

    public get transferredBytes() {
        return this._chunkProgress * STREAM_FILE_CHUNK_SIZE;
    }

    public get status() {
        return this._downloadStatus;
    }

    public get progressText() {
        if(!this._metadata) return '';
        return `${this._metadata.transferredBytes} - ${this._metadata.speed} - ${this._metadata.timeLeft}`;
    }

    public constructor(
        public streamSignal = new StreamSignals(),
        public readonly item: VirtualItem
    ) {
        super();
    }

    async init(){
        this._addEvents();
    }

    private _addEvents(){
        this.streamSignal.on('pause', () => {
            this._downloadStatus = DownloadStatus.PAUSED;
        });

        this.streamSignal.on('resume', () => {
            this._downloadStatus = DownloadStatus.DOWNLOADING;
        });
    }

    protected download(){
        const pull = new PullProgress(this, info => this._metadata = info);
        this._downloadStatus = DownloadStatus.DOWNLOADING;

        return pull.startPull();
    }

    protected _stream(chunk: number) {
        // minimum 1 byte, so we don't divide by zero
        const transferredBytes = (chunk * STREAM_FILE_CHUNK_SIZE) || 1;
        this.streamSignal.emit('progress', transferredBytes, this.item.size);
    }

    async progress(callback: (progressBytes: number, totalBytes: number) => void) {
        this.streamSignal.on('progress', callback);
    }
}
