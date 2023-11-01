import {EventEmitter} from 'tseep';
import {MessageType} from '../../peer-to-peer/types.ts';

export type StreamProgressEvent = (bytes: number, totalBytes: number) => void;

type StreamSignalsEvents = {
    progress: StreamProgressEvent;
    abort: () => void;
    pause: () => void;
    resume: () => void;
    end: () => void;
    downloadSuccessful: () => void;

}

export default class StreamSignals extends EventEmitter<StreamSignalsEvents> {

    addEvents(requestId: string, sendJSON: (data: any) => void) {
        const sendMessage = (type: MessageType) => sendJSON({type, requestId});
        const abort = () => sendMessage(MessageType.ABORT);
        const pause = () => sendMessage(MessageType.PAUSE);
        const resume = () => sendMessage(MessageType.RESUME);

        this.on('abort', abort);
        this.on('pause', pause);
        this.on('resume', resume);

        return () => {
            this.off('abort', abort);
            this.off('pause', pause);
            this.off('resume', resume);
        };
    }
}
