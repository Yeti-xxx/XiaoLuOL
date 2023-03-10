import request from './request'

//用户名密码登录
export function loginByJson(data){
    return request({
        url:'/api/u/loginByJson',
        method:'post',
        data
    })
}

// 短信登录
export function sendCaptcha(params){
    return request({
        url:'/api/sms/sendRegisterOrLoginCaptcha',
        params
    })
}

// 手机验证码登录
export function loginByMobile(data){
    return request({
        url:'/api/u/loginByMobile',
        method:'post',
        data
    })
}

// 获取用户信息
export function getInfo(data){
    return request({
        url:'/api/member/getInfo',
        data
    })

}

// 退出登录
export function logout(){
	return request({
		url:'/api/u/logout'
	})
}