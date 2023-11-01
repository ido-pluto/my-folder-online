import {MessageType} from '../../peer-to-peer/types.ts';
import Emittery from 'emittery';


type StreamSignalsEvents = {
    progress: [bytes: number, totalBytes: number];
    abort: any;
    pause: any;
    resume: any;
    end: any;
    downloadSuccessful: any

}

export default class StreamSignals extends Emittery<StreamSignalsEvents> {

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
