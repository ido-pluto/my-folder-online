export default class RedundantStreamEvents<T> {
    private _shouldPushEvents = false;
    private _events: any[] = [];

    public constructor(private _onEvents: (latEvent: T) => void, private _msTimeout = 150) {
    }

    public pushEvent(data: T) {
        this._events.push(data);

        if (this._shouldPushEvents)
            return;

        this._setTimeout();
    }

    private _setTimeout() {
        this._shouldPushEvents = true;
        setTimeout(() => {
            this._onEvents(this._events.at(-1));
            this._shouldPushEvents = false;
            this._events.length = 0;
        }, this._msTimeout);
    }
}
