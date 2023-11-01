import {v4 as uuid} from 'uuid';
import {MessageType} from './types.ts';

export default class WebSocketRequest {
    private _responseInfo: {
        [id: string]: (data: any) => void
    } = {};

    private _requestInfo: {
        [id: string]: (data: any) => any
    } = {};

    public constructor(private _ws: WebSocket) {
    }

    async connect() {
        this._listenForData();
        return new Promise((res, rej) => {
            this._ws.addEventListener('open', res);
            this._ws.addEventListener('error', rej);
        });
    }

    private _sendJSON(data: any) {
        this._ws.send(JSON.stringify(data));
    }

    private _listenForData() {
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

    public request<Response, Body>(resource: string, body?: Body): Promise<Response> {
        const requestId = uuid();

        this._sendJSON({
            type: MessageType.REQUEST,
            resource,
            requestId,
            body
        });

        return new Promise(res => {
            this._responseInfo[requestId] = res;
        });
    }

    public onRequest<Body, Response>(resource: string, callback: (body: Body) => Response) {
        this._requestInfo[resource] = callback;
    }

    public close() {
        this._ws.close();
    }
}
