export default {

	set(name, content){
		wx.setStorageSync(name, content);
	},
	
	/**
	 * 获取localStorage
	 */
	get(name){
		try{
			if (!name) return null;
			var val = wx.getStorageSync(name);
			//console.log("wx.getStorageSync:" + name,val);
			return val;
		}catch(e){
			return null;
		}		
	},
	
	// async getSync(name){
	// 	if (!name) return;
	// 	console.log("name---get",name);
	// 	return await wx.getStorageSync(name);
	// },
	
	/**
	 * 删除localStorage
	 */
	remove(name){
		if (!name) return;
		wx.removeStorageSync(name);
	}

}


