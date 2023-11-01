export type LikeFile = {
    readonly lastModified: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/name) */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath) */
    readonly webkitRelativePath: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/size) */
    readonly size: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/type) */
    readonly type: string;
}

const TOP_DIRECTORY_NAME = 'Root';
const TOP_DIRECTORY_PATH = '/';

export default class VirtualItem {
    public topDirectoryName = TOP_DIRECTORY_NAME;
    constructor(public path: string, public file?: LikeFile) {
    }

    get name() {
        return this.path.split('/').pop() || this.topDirectoryName;
    }

    get lastModified() {
        return new Date(this.file?.lastModified ?? 0);
    }

    get size() {
        return this.file?.size ?? 0;
    }

    get type() {
        return this.file?.type ?? '';
    }

    get isRoot() {
        return this.path === TOP_DIRECTORY_PATH;
    }
}
