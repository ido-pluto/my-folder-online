import VirtualDirectory from './virtual-directory.ts';
import VirtualFile from './virtual-file.ts';
import {LikeFile} from './virtual-item.ts';

export type FSMap = LikeFile[];

export default class VirtualFs {
    public files = new VirtualDirectory('/');

    private constructor(private _rawFiles: FSMap) {
    }

    public readFiles() {
        for (const file of this._rawFiles) {
            this._addToVirtualFs(file);
        }
    }

    private _addToVirtualFs(file: LikeFile) {
        const pathParts = file.webkitRelativePath.split('/');
        let currentDirectory = this.files;

        for (let i = 0; i < pathParts.length - 1; i++) {
            const pathPart = pathParts[i];
            let directory = currentDirectory.files.find((item) => item.name === pathPart && item instanceof VirtualDirectory);
            if (!directory) {
                directory = new VirtualDirectory(pathParts.slice(0, i + 1).join('/'), currentDirectory);
                currentDirectory.files.push(directory);
            }
            currentDirectory = directory as VirtualDirectory;
        }

        currentDirectory.files.push(
            new VirtualFile(file.webkitRelativePath, file)
        );
    }

    public getItem(path: string) {
        const pathParts = path.split('/').filter(Boolean);
        let currentItem = this.files;

        for (let i = 0; i < pathParts.length - 1; i++) {
            const pathPart = pathParts[i];
            const item = currentItem.files.find((item) => item.name === pathPart);
            if (!item || !(item instanceof VirtualDirectory)) {
                return null;
            }

            currentItem = item;
        }

        return currentItem.files.find(
            (item) => item.name === pathParts.at(-1)
        );
    }

    public serializable() {
        const mapFS: FSMap = [];

        for (const file of this._rawFiles) {
            mapFS.push({
                lastModified: file.lastModified,
                name: file.name,
                webkitRelativePath: file.webkitRelativePath,
                size: file.size,
                type: file.type
            });
        }

        return mapFS;
    }

    public static deserializable(mapFS: FSMap, rootDirectoryName?: string) {
        const virtualFS = new VirtualFs(mapFS);
        virtualFS.files.topDirectoryName = rootDirectoryName ?? virtualFS.files.topDirectoryName;

        virtualFS.readFiles();
        return virtualFS;
    }
}
