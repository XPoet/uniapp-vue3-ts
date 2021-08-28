'use strict';
exports.main = async (event, context) => {

	const db = uniCloud.database()
	const userList = db.collection('userList')
	
	// 云函数收到的event为, 注意如果直接return此格式数据可能会被作为集成响应处理，参考下面的集成响应文档
	const {
		name,
		age
	} = JSON.parse(event.body)

	const res = await userList.add({
		name,
		age
	})

	return res
};
