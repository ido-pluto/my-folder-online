import RemoteDirectory from './share/remote-directory.ts';
import RemoteDownload from './share/remote-download/remote-download.ts';
import VirtualItem from './share/virtual-fs/virtual-item.ts';
import RemoteDirectoryDownload from './share/remote-download/remote-directory-download.ts';
import RemoteFileDownload from './share/remote-download/remote-file-download.ts';
import VirtualDirectory from './share/virtual-fs/virtual-directory.ts';
import VirtualFile from './share/virtual-fs/virtual-file.ts';
import StreamSignals from './share/remote-download/stream-signals.ts';
import {EventEmitter} from 'tseep';

type StreamSignalsEvents = {
    change: () => void;
    downloadedFinished: (download: RemoteDownload) => void;
}

const EMMIT_CHANGE = ['progress', 'pause', 'resume', 'abort', 'end'] as const;
const EMMIT_CLOSE = ['abort', 'end'] as const;

export default class RemoteDownloadManager extends EventEmitter<StreamSignalsEvents> {
    activeDownloads: RemoteDownload[] = [];

    public constructor(private _remote: RemoteDirectory) {
        super()
    }

    async downloadFile(file: VirtualFile) {
        if(this._downloadExits(file)){
            throw new Error('File already downloading');
        }

        const signals = new StreamSignals();
        const download = new RemoteFileDownload(this._remote, file, signals);
        this.activeDownloads.push(download);

        this._addEvents(signals, download);
        return download.download();
    }

    async downloadDirectory(directory: VirtualDirectory) {
        if(this._downloadExits(directory)){
            throw new Error('Directory already downloading');
        }

        const signals = new StreamSignals();
        const download = new RemoteDirectoryDownload(this._remote, directory, signals);
        this.activeDownloads.push(download);

        this._addEvents(signals, download);
        return download.download();
    }

    async downloadSelectedFiles(files: string[], directory: VirtualDirectory) {
        const fs = this._remote.fs;
        if (!fs) {
            throw new Error('No remote fs');
        }

        const fileObjects = files.map(file => fs.getItem(file)).filter(Boolean) as VirtualItem[];
        if (fileObjects.length === 0) {
            throw new Error('No files selected');
        }

        const mainDownload = fileObjects.length === 1 ? fileObjects[0] :
            new VirtualDirectory('root', directory, fileObjects);

        if (mainDownload instanceof VirtualDirectory) {
            return await this.downloadDirectory(mainDownload);
        } else if (mainDownload instanceof VirtualFile) {
            return await this.downloadFile(mainDownload);
        }
    }

    private _downloadExits(item: VirtualItem) {
        return this.activeDownloads.some(download => download.item.path === item.path);
    }

    private _addEvents(signals: StreamSignals, download: RemoteDownload) {
        const emitChange = () => this.emit('change');
        const onEnd = () =>
            this.activeDownloads = this.activeDownloads.filter(d => d !== download);

        for(const signal of EMMIT_CHANGE){
            signals.on(signal, emitChange);
        }

        for(const signal of EMMIT_CLOSE){
            signals.on(signal, onEnd);
        }

        signals.on('downloadSuccessful', () => this.emit('downloadedFinished', download));
    }
}
