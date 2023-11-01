import type RemoteDirectory from '../remote-directory.ts';
import VirtualFile from '../virtual-fs/virtual-file.ts';
import RemoteDownload from './remote-download.ts';
import StreamSignals from './stream-signals.ts';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {showSaveFilePicker} from 'native-file-system-adapter';

export default class RemoteFileDownload extends RemoteDownload {
    public constructor(private _remote: RemoteDirectory, private _file: VirtualFile, signal?: StreamSignals) {
        super(signal, _file);
    }

    public override async download(){
        try {
            const fileHandle = await showSaveFilePicker({
                suggestedName: this._file.name,
            }) as FileSystemFileHandle;

            super.download();
            await this._streamFileToWritable(fileHandle);
            this.streamSignal.emit('downloadSuccessful');
        } finally {
            this.streamSignal.emit('end');
        }
    }

    private async _streamFileToWritable(fileHandle: FileSystemFileHandle){
        const writer = await fileHandle.createWritable();
        await this._remote.streamFile(this._file.file!,
            (response) => this._callbackWriteFile(writer, response),
            this.streamSignal
        );
        await writer.close();
    }

    private async _callbackWriteFile(writer: FileSystemWritableFileStream, buffer: Uint8Array){
        await writer.write(buffer);

        this._stream(this._chunkProgress++);
    }
}
