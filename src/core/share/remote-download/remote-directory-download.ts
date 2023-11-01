import type RemoteDirectory from '../remote-directory.ts';
import VirtualDirectory from '../virtual-fs/virtual-directory.ts';
import RemoteDownload from './remote-download.ts';
import StreamSignals from './stream-signals.ts';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {showDirectoryPicker} from 'native-file-system-adapter';

export default class RemoteDirectoryDownload extends RemoteDownload {
    public constructor(private _remote: RemoteDirectory, private _directory: VirtualDirectory, signal?: StreamSignals) {
        super(signal, _directory);
    }

    public override async download(){
        try {
            const directoryHandle = await showDirectoryPicker({
                mode: 'readwrite'
            }) as FileSystemDirectoryHandle;

            super.download();
            await this._downloadNestedDirectory(this._directory, directoryHandle);
            this.streamSignal.emit('downloadSuccessful');
        } finally {
            this.streamSignal.emit('end');
        }
    }

    private async _downloadNestedDirectory(directory: VirtualDirectory, directoryHandle: FileSystemDirectoryHandle){
        for (const file of directory.files) {
            if (file instanceof VirtualDirectory) {
                const newDirectoryHandle = await directoryHandle.getDirectoryHandle(file.name, {
                    create: true
                });
                await this._downloadNestedDirectory(file, newDirectoryHandle);
                continue;
            }

            const fileHandle = await directoryHandle.getFileHandle(file.name, {
                create: true
            });
            const writer = await fileHandle.createWritable();
            await this._remote.streamFile(file.file!,  (response) =>
                this._callbackWriteFile(writer, response),
                this.streamSignal
            );
            await writer.close();
        }
    }

    private async _callbackWriteFile(writer: FileSystemWritableFileStream, buffer: Uint8Array){
        await writer.write(buffer);
        this._stream(this._chunkProgress++);
    }
}
