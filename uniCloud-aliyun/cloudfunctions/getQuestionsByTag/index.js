'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const tag =  event.tag.toLowerCase()
	const targetList = await uniCloud.database().collection(`${tag}-questions-list`).get()
	
	//返回数据给客户端
	return targetList
};
