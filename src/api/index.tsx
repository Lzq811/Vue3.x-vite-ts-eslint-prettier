// index.tsx 文件
import ajax from './ajax'
/*
 * ajax 从 ajax.js 引入 需要
 * 第一个 参数 是 url 必填
 * 第二个 参数 是 params对象 默认 {} 非必填
 * 第三个 参数 是 GET、POST 请求方式， 默认 POST， 非必填
 */
// 后台地址
const BASE_URL: string = import.meta.env.VITE_APP_BASE_URL || '' // 环境变量后台地址
// const BASE_URL: string = `http:xxxx/api`
// const BASE_URL_OTHER:string = `http:xxx2.api` // 多个后台地址

interface IParams {}

// 登陆接口
export const ReqLogin = (params: IParams) => ajax(`${BASE_URL}login`, params, 'POST') // POST 是默认值，可以不写

// export const ReqOther = (params:IParams) => ajax(`${BASE_URL_OTHER}login`, params)
