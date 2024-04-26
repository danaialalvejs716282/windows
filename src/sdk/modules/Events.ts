import { TypedEventIm } from "./TypedEvent";

export class CommunicationEvents {
	onOpen: TypedEventIm | null = null;
	onDisconnect: TypedEventIm | null = null;
	onReconnect: TypedEventIm | null = null;
	onClose: TypedEventIm | null = null;
	onMessage: TypedEventIm | null = null;
	onSend: TypedEventIm | null = null;
	onStart: TypedEventIm | null = null;
	onUserOnline: TypedEventIm | null = null;
	onUserOffline: TypedEventIm | null = null;
	onAllSession: TypedEventIm | null = null;
	onNewSession: TypedEventIm | null = null;
	onDelSession: TypedEventIm | null = null;
	onWorkerChanged: TypedEventIm | null = null;
	onNewChat: TypedEventIm | null = null;
	onTargetRead: TypedEventIm | null = null;
	onTargetInputtingBegin: TypedEventIm | null = null;
	onTargetInputtingEnd: TypedEventIm | null = null;
	onSimMessage: TypedEventIm | null = null;

	constructor(fn: (...args: any[]) => void) {
		this.onOpen = new TypedEventIm("open", fn);
		this.onDisconnect = new TypedEventIm("disconnect", fn);
		this.onReconnect = new TypedEventIm("reconnect", fn);
		this.onClose = new TypedEventIm("close", fn);
		this.onMessage = new TypedEventIm("message", fn);
		this.onSend = new TypedEventIm("send", fn);
		this.onStart = new TypedEventIm("start", fn);
		this.onUserOnline = new TypedEventIm("user online", fn);
		this.onUserOffline = new TypedEventIm("user offline", fn);
		this.onAllSession = new TypedEventIm("all session", fn);
		this.onNewSession = new TypedEventIm("new session", fn);
		this.onDelSession = new TypedEventIm("del session", fn);
		this.onWorkerChanged = new TypedEventIm("worker changed", fn);
		this.onNewChat = new TypedEventIm("new message", fn);
		this.onTargetRead = new TypedEventIm("target read", fn);
		this.onTargetInputtingBegin = new TypedEventIm("target input begin", fn);
		this.onTargetInputtingEnd = new TypedEventIm("target input end", fn);
		this.onSimMessage = new TypedEventIm("sim message", fn);
	}
}
