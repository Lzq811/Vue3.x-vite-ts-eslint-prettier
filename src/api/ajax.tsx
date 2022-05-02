// ajax.tsx 文件
import axios from 'axios'

// 可以在这里做一下请求拦截，设置公共请求头等

export default function ajax(url: string, data: any = {}, type: string = 'POST') {
  // 判断 url 地址， 在多个后台地址时候使用， 可以在这里拦截使用不同的请求头，传入不同token等操作

  return new Promise((resolve, reject) => {
    let promise: any // 返回一个 promise 对象
    if (type === 'GET') {
      promise = axios.get(url, { params: data })

      // 多个后台地址时候，传入不同的token值
      promise = axios.get(url, {
        params: data,
        headers: { access_totken: sessionStorage.getItem('token_other') || '' }
      })
    } else if (type === 'POST') {
      promise = axios.post(url, data)

      // 多个后台地址时候，传入不同的token值
      promise = axios.get(url, data)
    }
    // 统一处理 response
    promise
      .then((response: any) => {
        response && response.data ? resolve(response.data) : reject(response)
      })
      .catch((error: any) => {
        console.log(error)
      })
  })
}
