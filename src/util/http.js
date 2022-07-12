import axios from 'axios'

// axios实例
const service = axios.create({
    baseURL: process.env.VITE_APP_DATE_API,
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
});

export const $http = {
    list: [0,2,6],
    get: function (url, params = {}) {
        // promise封装axios实例
        // resolve 成功回调,reject 失败回调
        return new Promise((resolve, reject) => {
            service
                .get(url,{
                    params
                })
                // 请求成功执行
                .then((res) => {
                    resolve(res)
                })
                // 请求失败执行
                .catch((err) => {
                    reject(err)
                })
        })
    },
    post: function (url, params = {}) {
        // promise封装axios实例
        // resolve 成功回调,reject 失败回调
        return new Promise((resolve, reject) => {
            service
                .get(url,{
                    params
                })
                // 请求成功执行
                .then((res) => {
                    resolve(res)
                })
                // 请求失败执行
                .catch((err) => {
                    reject(err)
                })
        })
    },
    put: function (url, params = {}) {
        // promise封装axios实例
        // resolve 成功回调,reject 失败回调
        return new Promise((resolve, reject) => {
            service
                .get(url,{
                    params
                })
                // 请求成功执行
                .then((res) => {
                    resolve(res)
                })
                // 请求失败执行
                .catch((err) => {
                    reject(err)
                })
        })
    },
    delete: function (url, params = {}) {
        // promise封装axios实例
        // resolve 成功回调,reject 失败回调
        return new Promise((resolve, reject) => {
            service
                .get(url,{
                    params
                })
                // 请求成功执行
                .then((res) => {
                    resolve(res)
                })
                // 请求失败执行
                .catch((err) => {
                    reject(err)
                })
        })
    }
}