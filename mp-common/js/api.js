
/**
 * colorui 的api请求封装
 * @param API_BASE_URL           这是你的api根地址，就像请求 http://music.163.com/music/hello?data=123 ,根地址为 http://music.163.com
 * @param url                    去除根地址的剩余url
 * @param method                 请求方式
 * @param data                   参数
 * @param hasCheck               是否需要拦截
 *
 * 具体介绍请看readme
 */
//import { culog } from './log'

const API_BASE_URL = ''

const request = (url, method, data, hasCheck = false) => {
    let _url = API_BASE_URL + url
    wx.showLoading({
        title: '请求中'
    })
    return new Promise((resolve, reject) => {
        // culog(`发送网络请求，url : ${_url} ,method : ${method} , data : ${JSON.stringify(data)} token :${wx.getStorageSync('token')}`)
        wx.request({
            url: _url,
            method: method,
            data: data,
            header: {
                "Content-Type": "application/json",
                'token': '' // 这里处理你的header 请求
            },
            timeout: 15000,
            success(request) {
                if (!hasCheck) {
                    if (request.data.code == 200) {
                        resolve(request.data)
                    } else {
                        // 可以在这里添加你的返回错误码
                        wx.showToast({
                            icon: 'none',
                            title: `api接口发生错误了o(╥﹏╥)o`
                        })
                    }
                } else {
                    resolve(request.data)
                }
            },
            fail(error) {
                reject(error)
            },
            complete() {
                wx.hideLoading()
            }
        })
    })
}


Promise.prototype.finally = function (callback) {
    let Promise = this.constructor;
    return this.then(
        function (value) {
            Promise.resolve(callback()).then(
                function () {
                    return value;
                }
            );
        },
        function (reason) {
            Promise.resolve(callback()).then(
                function () {
                    throw reason;
                }
            );
        }
    );
}

module.exports = {
    request,
}
