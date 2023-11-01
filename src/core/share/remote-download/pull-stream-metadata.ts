import {IStreamProgress} from 'ipull/pull-progress';
import StreamSignals from './stream-signals.ts';

export default class PullStreamMetadata extends IStreamProgress {
    public constructor(private _streamSignals: StreamSignals) {
        super();
    }

    async init() {

    }

    async progress(callback: (progressBytes: number, totalBytes: number) => void) {
        this._streamSignals.on('progress', callback);
    }
}
