<template>
  <div class="es-house-box es-min-w-full" v-masonry>
    <section
      v-masonry-tile
      v-for="(item, i) in list"
      :key="i"
      :class="[`es-house-item-${i}`]"
      class="es-w-[46%] md:es-w-[24.5%] lg:es-w-[19.6%] es-rounded-2xl es-overflow-hidden es-pb-2 es-pl-5"
    >
      <RouterLink :to="`/synopsis/${item.house_uuid}`">
        <figure class="es-w-full">
          <img :src="item.imgUrls[1]" :alt="item.title" class="es-w-full es-rounded-2xl" />
          <figcaption
            class="es-w-full es-px-4 es-py-3 es-text-sm es-truncate dark:es-text-slate-50"
          >
            {{ item.title }}
          </figcaption>
        </figure>
      </RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { HouseListType } from '@/store'

defineProps<{
  list: HouseListType[]
}>()

defineOptions({
  name: 'EsHouseItem'
})
</script>

<style scoped lang="css"></style>
