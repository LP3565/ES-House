<template>
  <EsHeader />
  <main id="es-main">
    <EsNav />
    <div class="es-house-container es-pl-[2%] es-pt-40 es-pb-16 lg:es-pb-0">
      <HouseItem :list="esStore.houseList" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { EsStore } from '@/store/index'

import EsHeader from '@/components/Header/index.vue'
import EsNav from './components/Nav.vue'
import HouseItem from './components/HouseItem.vue'

const esStore = EsStore()

onMounted(() => {
  esStore.getHouseList()
})

defineOptions({
  name: 'EsMain'
})
</script>

<style></style>
