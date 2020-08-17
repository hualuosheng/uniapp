export default {

	set(name, content){
		if (!name) return;
		if (typeof content !== 'string') {
			content = JSON.stringify(content);
		}
		window.localStorage.setItem(name, content);
	},
	
	/**
	 * 获取localStorage
	 */
	get(name){
		if (!name) return;
		return window.localStorage.getItem(name);
	},
	
	/**
	 * 删除localStorage
	 */
	remove(name){
		if (!name) return;
		window.localStorage.removeItem(name);
	}

}


