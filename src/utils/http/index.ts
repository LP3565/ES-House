import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
  Method
} from 'axios'

import type { BaseData } from './type'

// 默认配置
const defaultConfig: AxiosRequestConfig = {
  baseURL: '/api/v1',
  timeout: 5000
}

class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  // 二次封装 axios
  private static axiosInstance: AxiosInstance = axios.create(defaultConfig)

  // 请求拦截器
  private httpInterceptorsRequest(): void {
    Http.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        console.log('请求拦截器')

        // 携带token
        const token = sessionStorage.getItem('ACCESS_TOKEN')
        token ? (config.headers.token = token) : ''

        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )
  }
  // 响应拦截器
  private httpInterceptorsResponse(): void {
    Http.axiosInstance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('响应了')

        return res
      },
      (error) => {
        Promise.reject(error)
      }
    )
  }

  // 封装所有请求
  request<T>(
    method: Method,
    url: string,
    params?: AxiosRequestConfig,
    axiosConfig?: InternalAxiosRequestConfig
  ): Promise<BaseData<T>> {
    const config = {
      method,
      url,
      ...params,
      ...axiosConfig
    }

    return new Promise((resovle, reject) => {
      Http.axiosInstance
        .request(config)
        .then((response: any | undefined) => {
          resovle(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export const http = new Http()
