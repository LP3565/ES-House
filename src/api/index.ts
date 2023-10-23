import { http } from '@/utils/http/index'

import type { HouseListType } from '@/types/main'

export const getHouse = () => {
  return http.request<HouseListType[]>('GET', '/work')
}

export const getHouseById = (id: string) => {
  return http.request<HouseListType>('GET', `/work/${id}`)
}
