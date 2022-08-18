import axios from 'axios'
import { ElMessage } from 'element-plus'
const baseURL = process.env.VUE_APP_BASE_API

class HttpRequest {
  baseURL: any
  constructor(baseURL: any) {
    this.baseURL = baseURL
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      header: {}
    }
    return config
  }
  interceptors(instance: any) {
    // 发起请求之前的拦截器
    instance.interceptors.request.use(
      (config: any) => {
        return config
      },
      (error: any) => Promise.reject(error)
    )
    // 响应拦截器
    instance.interceptors.response.use(
      (response: any) => {
        return response
      },
      (error: any) => {
        ElMessage({
          type: 'error',
          message: error.message
        })
        return Promise.reject(error)
      }
    )
  }
  request(options: any) {
    const instance = axios.create()
    options = { ...this.getInsideConfig(), ...options }
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseURL)
