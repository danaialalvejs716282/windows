import { CommunicationEvents } from "./modules/Events";
import { Web3Socket } from "./modules/Web3Socket";
import { httpsApi } from "./modules/httpsApi";
export class Web3SDK {
	private static instance: Web3SDK;
	public ev: CommunicationEvents | null = null;
	public Web3Socket: Web3Socket | null = null;
	public httpsApi: httpsApi | null = null;

	private constructor(opt: any) {
		if (!Web3SDK.instance) {
			this.init(opt);
			Web3SDK.instance = this;
		}
		return Web3SDK.instance;
	}

	public static getInstance(opt: any): Web3SDK {
		if (!Web3SDK.instance) {
			Web3SDK.instance = new Web3SDK(opt);
		}
		return Web3SDK.instance;
	}

	private init(opt: any): void {
		this.ev = new CommunicationEvents(this.debug);
		this.Web3Socket = new Web3Socket(opt, this.ev);
		this.httpsApi = new httpsApi(this.Web3Socket);
	}
	sendChat() {
		 
	}
	close() {
		 
	}
	debug(...args: any) {
		console.debug(...args);
	}
}
