/**
 * 根据不同的环境变量设置不同的值
 * 比如你不同环境下api访问的 baseUrl都不一样 可以在下面设置
 * 可以添加其他参数
 */
var env = {};

if(process.env.NODE_ENV == 'development'){
	// env.baseUrl = 'http://api-test.matepay.cc';
	env.baseUrl = '';
	env.online = false;
}else if(process.env.NODE_ENV == 'production_test'){
	env.baseUrl = 'http://api-test.matepay.cc';
	env.online = false;
}else if(process.env.NODE_ENV == 'production'){
	env.baseUrl = 'http://api.matepay.cc';
	env.online = true;
}

module.exports = env;