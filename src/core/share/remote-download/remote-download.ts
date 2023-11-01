import {STREAM_FILE_CHUNK_SIZE} from '../virtual-fs/virtual-file.ts';
import StreamSignals from './stream-signals.ts';
import VirtualItem from '../virtual-fs/virtual-item.ts';
import PullProgress, {TransferProgressInfo} from 'ipull/pull-progress';
import RedundantStreamEvents from './redundant-stream-events.ts';
import PullStreamMetadata from './pull-stream-metadata.ts';

export enum DownloadStatus {
    PENDING,
    DOWNLOADING,
    PAUSED,
}

export default class RemoteDownload {
    private _redundantStreamProgressEvents: RedundantStreamEvents<number>;
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
        this._redundantStreamProgressEvents = new RedundantStreamEvents(
            this._onStreamEventBunch.bind(this),
        );

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
        const pullStreamMetadata = new PullStreamMetadata(this.streamSignal);
        const pull = new PullProgress(pullStreamMetadata, info => this._metadata = info);
        this._downloadStatus = DownloadStatus.DOWNLOADING;

        return pull.startPull();
    }

    protected _stream(chunk: number) {
        // minimum 1 byte, so we don't divide by zero
        const transferredBytes = (chunk * STREAM_FILE_CHUNK_SIZE) || 1;
        this._redundantStreamProgressEvents.pushEvent(transferredBytes);
    }

    private _onStreamEventBunch(transferred: number) {
        this.streamSignal.emit('progress', transferred, this.item.size);
    }
}
