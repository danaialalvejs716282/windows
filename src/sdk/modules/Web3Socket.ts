
import { Web3 } from "web3"
export class Web3Socket  {
	web3: any;
	private event: any;
	sessionMap: Map<any, any> = new Map();

	constructor(fn: any, ev: any) {
		this.event = ev;
		this.web3 = new Web3("wss://eth-mainnet.g.alchemy.com/v2/TmxHLYsb9BD6LtOuz5oKToL6mlH9sQVR")

		 
	}

	private open() {
		// Handle onconnect event
		console.log("链接成功");
		this.event.onOpen.emitWs();
	}
	private NewChat(data: any) {}
	public close( ) {
		 
	}
}
