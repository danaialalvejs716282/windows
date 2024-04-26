export class httpsApi {
	private event: any;
	constructor(Web3Socket: any) {
		this.event = Web3Socket;
	}
	// 登入
	public tenantLogin() {}
	// 登出
	public tenantLogout() {
	}
	// 上传
	public assetsUpload() {
	}

	// 切换状态
	public modifyState() {
	}

	// 获取用户信息
	public getUserInfo(data: any) {
		
	}

	// 查询聊天内容
	public queryChat() {
	}

	// 提交申诉
	public setUpdateUserAppeal() {
	}

	// 获取回复内容
	public getReplyData() {
	}

	// 查询权限
	public getQueryByPerm() {
	}

	// 标记为已读
	public setMarkRead(parameter: any) {
		const msg = this.event.sessionMap.get(parameter);
		this.event.nim.sendMsgReceipt({
			msg,
			done: function (err: any, data: any) {
				if (err) {
					console.error("已读回执发送失败");
				} else {
					console.log("已读回执发送成功");
				}
			},
		});
		this.getUserInfo(parameter);
	}

	// 查询聊天历史记录
	public queryChatHistory(param: any) {
		console.log(param);
		this.event.nim.getHistoryMsgs({
			scene: "p2p",
			to: param,
			done: function (err: any, data: any) {
				console.log(data);
				if (err) {
					console.error("撤回失败");
				}
			},
		});
		return {
			notes: [],
		};
	}

	// 根据客服查询便签组
	public getQuickReply() {
		ElMessage.warning("web3暂不支持此功能");
	}

	// 添加进个人常用组
	public addQuickReply() {
		ElMessage.warning("web3暂不支持此功能");
	}

	// 移出个人常用组
	public removeQuickReply() {
		ElMessage.warning("web3暂不支持此功能");
	}

	// 获取备注列表
	public getRemarkList() {
		return { notes: [] };
	}

	// 添加备注列表
	public addRemarkList() {
		ElMessage.warning("web3暂不支持此功能");
	}

	// 转接待
	public addBlackListRecover() {
		ElMessage.warning("web3暂不支持此功能");
	}

	// 拉黑
	public addBlackListApply() {
		ElMessage.warning("web3暂不支持此功能");
	}

	// 转移任务
	public Transfer() {
		ElMessage.warning("web3暂不支持此功能");
	}

	// 加入黑名单
	public addBlackListConfirm() {
		ElMessage.warning("web3暂不支持此功能");
	}
}
