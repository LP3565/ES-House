// 请求返回的基本数据结构
export interface BaseData<T> {
  status: number
  message: string
  data: T
}
