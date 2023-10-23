<template>
  <div class="es-synopsis-container es-relative es-w-[100vw] es-h-[100vh] es-overflow-hidden">
    <div class="es-synopsis-box">
      <div class="es-back es-m-8 es-cursor-pointer" @click="router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1696163087741" class="icon"
          viewBox="0 0 1024 1024" version="1.1" p-id="6572" width="28" height="28">
          <path
            d="M853.333 469.333H332.8L571.733 230.4 512 170.667 170.667 512 512 853.333l59.733-59.733L332.8 554.667h520.533z"
            fill="#2c2c2c" p-id="6573" class="es-fill-slate-50" />
        </svg>
      </div>
      <article
        class="es-significant es-flex es-absolute es-rounded-2xl es-overflow-hidden es-shadow-2xl es-top-1/2 es-left-1/2 -es-translate-x-1/2 -es-translate-y-1/2 es-w-[50vw] es-h-[90vh] dark:es-bg-slate-800">
        <!-- 卡通轮播图 -->
        <EsSwiperCards :imgList="esStore.houseOne.imgUrls" />
        <!-- 描述信息 -->
        <section class="es-synopsis-msg es-flex es-items-center es-flex-wrap es-w-1/3 es-h-full es-py-5 es-px-3">
          <span class="es-text-slate-900 dark:es-text-slate-300">
            <span class="es-w-full es-h-96 es-overflow-hidden es-block">
              {{ esStore.houseOne.message }}
            </span>
            <div class="es-know-more-about es-w-full es-text-right es-pt-3">
              <span class="es-text-sky-500 es-cursor-pointer" @click="goToDetail">{{ t('syn.know') }}</span>
            </div>
          </span>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { EsStore } from '@/store'
import EsSwiperCards from './components/EsSwiperCards.vue'

const { t } = useI18n()

const props = defineProps<{
  id: string
}>()

const esStore = EsStore()
const router = useRouter()

onMounted(() => {
  esStore.getHouseOne(props.id)
})

// 跳转
const goToDetail = () => {
  router.push(`/detail/${props.id}`)
}

defineOptions({
  name: 'EsSynopsis'
})
</script>

<style scoped></style>
