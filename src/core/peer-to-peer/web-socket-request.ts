import {v4 as uuid} from 'uuid';
import {MessageType} from './types.ts';

export default class WebSocketRequest {
    private _responseInfo: {
        [id: string]: (data: any) => void
    } = {};

    private _requestInfo: {
        [id: string]: (data: any) => any
    } = {};

    private _ws?: WebSocket;

    get connected() {
        return this._ws?.readyState === WebSocket.OPEN;
    }

    public constructor() {
    }

    private _waitForFirstMessage() {
        const ws = this._ws;
        if (!ws) {
            throw new Error('No ws connection');
        }

        return new Promise((res, rej) => {
            const onceConnected = () => {
                ws.removeEventListener('message', onceConnected);
                ws.removeEventListener('error', rej);
                res(true);
            };
            ws.addEventListener('message', onceConnected);
            ws.addEventListener('error', rej);
        });
    }

    async connect(wsURL: string) {
        if (this.connected)
            return;

        if (this._ws?.readyState === WebSocket.CONNECTING)
            await this._waitForFirstMessage();

        this._ws = new WebSocket(wsURL);
        await this._waitForFirstMessage();
        this._listenForData();
    }

    private _sendJSON(data: any) {
        if (!this._ws) {
            throw new Error('No ws connection');
        }

        this._ws.send(JSON.stringify(data));
    }

    public request<Response, Body>(resource: string, body?: Body): Promise<Response> {
        const requestId = uuid();

        return new Promise(res => {
            this._responseInfo[requestId] = res;

            this._sendJSON({
                type: MessageType.REQUEST,
                resource,
                requestId,
                body
            });
        });
    }

    private _listenForData() {
        if (!this._ws) {
            throw new Error('No ws connection');
        }

        this._ws.addEventListener('message', ({data}) => {
            const {type, resource, requestId, body} = JSON.parse(data);

            switch (type) {
                case MessageType.REQUEST:
                    this._onRemoteRequest(resource, requestId, body);
                    break;
                case MessageType.RESPONSE:
                    this._onRemoteResponse(requestId, body);
                    break;
            }
        });
    }

    private async _onRemoteRequest(resource: string, requestId: string, body: any) {
        const callback = this._requestInfo[resource];

        if (!callback) {
            console.error(`No callback for resource ${resource}`);
            return;
        }

        const response = await callback(body);
        this._sendJSON({
            type: MessageType.RESPONSE,
            requestId,
            body: response
        });
    }

    private _onRemoteResponse(requestId: string, body: any) {
        const responseInfo = this._responseInfo[requestId];

        if (!responseInfo) {
            console.error(`No response info for request ${requestId}`);
            return;
        }

        delete this._responseInfo[requestId];
        responseInfo(body);
    }

    public listen<Body, Response>(resource: string, callback: (body: Body) => Response) {
        this._requestInfo[resource] = callback;
    }

    public unregisterListen(resource: string) {
        delete this._requestInfo[resource];
    }

    public close() {
        this._ws?.close();
    }
}
