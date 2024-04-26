export class TypedEventIm {
	private readonly _name: string;
	private readonly _debugFn: ((...args: any[]) => void) | null;
	private listeners: ((event: any) => void)[];
	private listenersOnce: ((event: any) => void)[];

	constructor(name: string, debugFn: ((...args: any[]) => void) | null = null) {
		this._name = name;
		this._debugFn = debugFn;
		this.listeners = [];
		this.listenersOnce = [];
	}

	on = (listener: (event: any) => void): { dispose: () => void } => {
		if (this._debugFn) {
			this._debugFn(`[${this._name}]`, "add listener");
		}
		this.listeners.push(listener);
		return {
			dispose: () => this.off(listener),
		};
	};

	once = (listener: (event: any) => void): void => {
		if (this._debugFn) {
			this._debugFn(`[${this._name}]`, "add once listener");
		}
		this.listenersOnce.push(listener);
	};

	off = (listener: (event: any) => void): void => {
		if (this._debugFn) {
			this._debugFn(`[${this._name}]`, "remove listener");
		}
		const callbackIndex = this.listeners.indexOf(listener);
		if (callbackIndex > -1) {
			this.listeners.splice(callbackIndex, 1);
		}
	};

	emitWs = (event: any): void => {
		if (this._debugFn) {
			this._debugFn(`[${this._name}]`, "emit listener");
		}
		this.listeners.forEach((listener) => listener(event));
		if (this.listenersOnce.length > 0) {
			const toCall = this.listenersOnce;
			this.listenersOnce = [];
			toCall.forEach((listener) => listener(event));
		}
	};

	pipe = (te: TypedEventIm): { dispose: () => void } => {
		return this.on((e) => te.emitWs(e));
	};
}
