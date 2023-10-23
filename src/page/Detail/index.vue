<template>
  <EsHeader />
  <article
    class="es-detail-container es-overflow-hidden es-pt-20 sm:es-pt-0 es-transition-all es-duration-500 dark:es-bg-black"
  >
    <!-- 大图 -->
    <section
      class="es-detail-big-img-box es-hidden es-w-[100vw] es-h-[100vh] es-overflow-hidden sm:es-block"
    >
      <figure class="es-w-full es-h-full">
        <img
          :src="esHouse.houseOne.imgUrls[0]"
          :alt="esHouse.houseOne.imgUrls[0]"
          class="es-detail-big-img es-w-full es-h-full sm:es-object-cover"
        />
      </figure>
    </section>

    <!-- 详情 -->
    <section class="es-py-6 es-px-4 sm:es-py-8 sm:es-px-6 es-h-[90vh] md:es-py-10 md:es-px-8">
      <div
        class="es-max-w-4xl es-mx-auto es-grid es-grid-cols-1 lg:es-max-w-5xl lg:es-gap-x-20 lg:es-grid-cols-2"
      >
        <!-- 标题 -->
        <div
          class="es-relative es-p-3 es-flex es-flex-col-reverse es-col-start-1 es-col-span-2 es-row-start-1 es-rounded-lg es-bg-gradient-to-t es-from-black/75 es-via-black/0 sm:es-bg-none sm:es-row-span-2 sm:es-p-0 sm:es-row-start-2 sm:es-mb-6 lg:es-row-start-1"
        >
          <h1
            class="es-text-lg es-text-white es-font-semibold es-mt-1 sm:es-text-slate-900 md:es-text-2xl dark:es-text-white"
          >
            {{ esHouse.houseOne.title.slice(0, 30) }}
          </h1>
          <p
            class="es-text-sm es-text-white es-font-medium sm:es-font-medium sm:es-text-slate-500 dark:es-text-slate-300"
          >
            Entire house
          </p>
        </div>
        <!-- 图片区 -->
        <div
          class="es-grid es-gap-4 es-col-start-1 es-col-end-3 es-row-start-1 sm:es-mb-6 sm:es-grid-cols-4 lg:es-gap-6 lg:es-col-start-2 lg:es-row-end-6 lg:es-row-span-6 lg:es-mb-0"
        >
          <img
            v-for="(item, i) in esHouse.houseOne.imgUrls"
            :key="i"
            :src="item"
            :alt="item"
            v-show="i !== 0"
            :class="[
              i === 1
                ? 'es-w-full es-h-60 es-object-cover es-rounded-lg sm:es-col-span-2 sm:es-h-52 lg:es-w-full lg:es-col-span-4'
                : i === 2
                ? 'es-hidden es-w-full es-h-52 es-object-cover es-rounded-lg sm:es-col-span-2 sm:es-block md:es-col-span-1 lg:es-row-start-2 lg:es-col-span-2 lg:es-h-32'
                : i === 3
                ? 'es-hidden es-w-full es-h-52 es-object-cover es-rounded-lg md:es-block lg:es-row-start-2 lg:es-col-span-2 lg:es-h-32'
                : ''
            ]"
          />
        </div>
        <!-- 描述 -->
        <dl
          class="es-mt-4 es-font-bold es-text-[12px] es-flex es-items-center es-row-start-2 es-col-start-1 sm:es-mt-1 sm:es-row-start-3 lg:es-row-start-2"
        >
          <!-- 评分 -->
          <dt class="es-sr-only">Reviews</dt>
          <dd class="es-text-indigo-500 es-flex es-items-center">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              class="es-mr-1 es-stroke-current"
            >
              <path
                d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>4.89 <span class="es-text-slate-400 es-font-normal">(128)</span></span>
          </dd>
          <!-- 地址 -->
          <dt class="es-sr-only">Location</dt>
          <dd class="es-flex es-items-center">
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              class="es-mx-3 es-text-slate-300"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="es-mr-1 es-text-slate-400 dark:es-text-slate-500"
              aria-hidden="true"
            >
              <path
                d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"
              />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            <span class="es-text-slate-400 es-font-bold">Collingwood, Ontario</span>
          </dd>
        </dl>

        <!-- 按钮 -->
        <div
          class="es-mt-4 es-col-start-1 es-row-start-3 es-self-center sm:es-mt-0 sm:es-col-start-2 sm:es-row-start-2 sm:es-row-span-2 lg:es-mt-6 lg:es-col-start-1 lg:es-row-start-3 lg:es-row-end-4"
        >
          <button
            type="button"
            class="es-py-2 es-px-3 es-bg-red-600 es-text-sm es-text-white es-rounded-lg es-leading-6"
          >
            Check availability
          </button>
        </div>
        <!-- 描述 -->
        <p
          class="es-mt-4 text-sm es-leading-6 es-row-start-4 es-text-slate-600 sm:es-col-span-2 lg:es-mt-6 lg:es-row-start-4 lg:es-col-span-1 dark:es-text-slate-400"
        >
          {{ esHouse.houseOne.message }}
        </p>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { EsStore } from '@/store'

import EsHeader from '@/components/Header/index.vue'

const props = defineProps<{
  id: string
}>()

const esHouse = EsStore()
esHouse.getHouseOne(props.id)
onMounted(() => {})

defineOptions({
  name: 'EsDetail'
})
</script>

<style></style>
