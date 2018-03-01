import axios from 'axios';//这个是什么？是一个类似于ajax请求的一个东西
import { Toast } from 'mint-ui';

const service = axios.create({
    timeout: 5000,
    withCredentials: false,
    // headers: {
    //     post: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    // }
});

service.interceptors.request.use(config => {
    return config;
}, function(error) {
    return Promise.reject(error);
});

service.interceptors.response.use(response => {
    var suc = response.data.success;
    var resCode = response.data.code;
    if(resCode == 10000 || suc == true){
    	return response;
    }
    else if(resCode == 401){
    	gotoLogin();
    	return Promise.reject('401');
    }else{
    	ToastError();
    	return Promise.reject(response);
    }
}, function(e) {    
    if(e.response.status == 401){
        gotoLogin();
    }else{
    	ToastError();
    }
    return Promise.reject(e);
});

function gotoLogin(){
    console.log('onSessionLost')
}

function ToastError(){
	Toast({
		message: '邀请信息超时，请重新分享',
		duration: 5000
	});
}

export default service;
