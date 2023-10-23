import { defineStore } from 'pinia'
import { getHouse, getHouseById } from '@/api/index'

export interface HouseListType {
  uuid: string
  house_uuid: string
  title: string
  imgUrls: string[]
  message: string
}

interface State {
  houseList: HouseListType[]
  houseOne: HouseListType
}

export const EsStore = defineStore('es_house', {
  state: (): State => {
    return {
      houseList: [],
      houseOne: {} as HouseListType
    }
  },

  actions: {
    // 获取房子的列表
    async getHouseList(): Promise<void> {
      const { data } = await getHouse()
      const newData = data.map((item) => {
        return {
          ...item,
          imgUrls: item.imgUrls.split(';')
        }
      })
      this.houseList = newData
    },
    // 根据id获取房子
    async getHouseOne(payload: string): Promise<void> {
      const { data } = await getHouseById(payload)
      console.log(data)

      const newImgUrls = data.imgUrls.split(';')
      this.houseOne = { ...data, imgUrls: newImgUrls }
    }
  },

  getters: {}
})
