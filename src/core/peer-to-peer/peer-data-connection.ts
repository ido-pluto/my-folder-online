import {v4 as uuid} from 'uuid';
import {MessageType} from './types.ts';
import StreamSignals from '../share/remote-download/stream-signals.ts';
import sleep from 'sleep-promise';
import ReceiveChunk from './receive-chunk.ts';
import Peer, {DataConnection, PeerOptions} from 'peerjs';
import {getPeerOptions} from '../app-store/server-settings.ts';

const QUEUE_IS_FULL_ERROR = 'RTCDataChannel send queue is full';
const FULL_DELAY = 100; // 100ms
const MAX_RETRY_SEND = 15;
export type CallbackChunk<T> = (response: T, chunkIndex?: number, totalChunks?: number) => any;

export default class PeerDataConnection {
    /**
     * on **response** data from the peer
     */
    private _receiveInfo: {
        [id: string]: ReceiveChunk
    } = {};

    /**
     * on **request** from the peer
     */
    private _requestEvent: {
        [resource: string]: (body: any, sendChunk: CallbackChunk<any>) => Promise<void>
    } = {};

    /**
     * metadata for stream response to the peer request
     */
    private _activeResponseStream: {
        [id: string]: {
            abort: boolean,
            pause: boolean,
            resume?: () => void
        }
    } = {};

    public constructor(private _dataConnection: DataConnection) {
        this._listenForData();
        this._initEvents();
    }

    private _initEvents() {
        this._dataConnection.on('iceStateChanged', (state: any) => {
            console.log('iceStateChanged', state);
        });

        this._dataConnection.on('error', (error: any) => {
            console.log('error', error);
        });

        this._dataConnection.on('close', () => {
            console.log(`close ${this._dataConnection.peer}`);
        });

        this._dataConnection.on('open', () => {
            console.log(`open ${this._dataConnection.peer}`);
        });
    }

    public async waitOpen(): Promise<void> {
        if (this._dataConnection.open) {
            throw new Error('Connection already open');
        }

        return await new Promise((res, rej) => {
            this._dataConnection.once('open', res);
            this._dataConnection.once('error', rej);
        });
    }

    private _listenForData() {
        this._dataConnection.on('data', (data: any) => {
            const {type, resource, requestId, body, chunkIndex, totalChunks} = data;

            switch (type) {
                case MessageType.REQUEST:
                    this._onRemoteRequest(resource, requestId, body);
                    break;
                case MessageType.RESPONSE:
                    this._onRemoteResponse(requestId, body, chunkIndex, totalChunks);
                    break;
                case MessageType.ABORT:
                    this._abortRequest(requestId);
                    break;
                case MessageType.PAUSE:
                    this._pauseRequest(requestId);
                    break;
                case MessageType.RESUME:
                    this._resumeRequest(requestId);
                    break;
            }
        });
    }

    private _abortRequest(requestId: string) {
        if (!this._activeResponseStream[requestId])
            return;

        this._activeResponseStream[requestId].abort = true;
    }

    private _pauseRequest(requestId: string) {
        if (!this._activeResponseStream[requestId])
            return;

        this._activeResponseStream[requestId].pause = true;
    }

    private _resumeRequest(requestId: string) {
        if (!this._activeResponseStream[requestId])
            return;

        this._activeResponseStream[requestId].pause = false;
        this._activeResponseStream[requestId].resume?.();
    }

    private async _handelRequestPreSend(requestId: string) {
        const activeRequest = this._activeResponseStream[requestId];
        if (!activeRequest)
            return;

        if (activeRequest.abort) {
            throw new Error('Request was aborted');
        }

        if (activeRequest.pause) {
            console.log(`Request was paused (${requestId})`);
            await new Promise(res => {
                activeRequest.resume = () => res(null);
            });
        }
    }

    private async _onRemoteRequest(resource: string, requestId: string, body: any) {
        const callback = this._requestEvent[resource];

        if (!callback) {
            console.error(`No callback for resource ${resource}`);
            return;
        }

        this._activeResponseStream[requestId] = {
            abort: false,
            pause: false
        };

        const sendCallback = (body: any, chunkIndex = 0, totalChunks = 1) =>
            this._sendCallbackResponse(requestId, body, chunkIndex, totalChunks);

        try {
            await callback(body, sendCallback);
        } finally {
            delete this._activeResponseStream[requestId];
        }
    }

    private async _sendCallbackResponse(requestId: string, body: any, chunkIndex: number, totalChunks: number) {
        let retrySend = true;
        let counter = 0;

        while (retrySend) {
            await this._handelRequestPreSend(requestId);
            try {
                this._dataConnection.send({
                    type: MessageType.RESPONSE,
                    requestId,
                    body,
                    chunkIndex,
                    totalChunks
                });
                retrySend = false;
            } catch (error: any) {
                if (MAX_RETRY_SEND < counter) {
                    throw new Error(`Max retry send reached: ${MAX_RETRY_SEND}, error: ${error.message}`);
                }

                retrySend = error.message.includes(QUEUE_IS_FULL_ERROR);
                await sleep(FULL_DELAY * counter);
                counter++;
            }
        }
    }

    private _onRemoteResponse(requestId: string, body: any, chunkIndex: number, totalChunks: number) {
        const responseInfo = this._receiveInfo[requestId];

        if (!responseInfo) {
            console.error(`No callback for requestId ${requestId}`);
            this._dataConnection.send({
                type: MessageType.ABORT,
                requestId
            });
            return;
        }

        responseInfo.pushChunk(body, chunkIndex, totalChunks);
    }

    public request<Response, Body>(resource: string, body: Body, callback: CallbackChunk<Response>, signal?: StreamSignals) {
        const requestId = uuid();
        const removeEvents = signal?.addEvents(requestId, this._dataConnection.send.bind(this._dataConnection));

        const onClose = () => {
            delete this._receiveInfo[requestId];
            removeEvents?.();
        };

        this._receiveInfo[requestId] = new ReceiveChunk(callback, onClose);
        this._dataConnection.send({
            type: MessageType.REQUEST,
            resource,
            requestId,
            body
        });
    }

    public listen<Body, Response>(resource: string, callback: (body: Body, sendChunk: CallbackChunk<Response>) => Promise<void>) {
        this._requestEvent[resource] = callback;
    }

    public static async newPeerConnection(options: PeerOptions = {}): Promise<{ peer: Peer, id: string }> {
        const peer = new Peer({...getPeerOptions(), ...options});
        return await new Promise((res, rej) => {
            peer.once('open', id => {
                res({peer, id});
            });
            peer.once('error', rej);
        });
    }
}
