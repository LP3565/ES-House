<template>
  <nav id="es-nav"
    class="es-fixed es-top-20 es-w-[100vw] es-z-50 es-transition-all es-duration-500 es-bg-white es-px-5 md:es-px-10 lg:es-px-20 dark:es-bg-black">
    <div class="es-nav-box es-w-full es-py-3 es-box-border">
      <ul class="es-nav-ul es-flex es-w-[1000%] es-space-x-4 lg:es-space-x-6 es-overflow-x-auto">
        <li v-for="(item, i) in list" :key="i" :class="[
          i === 0
            ? 'es-font-bold es-text-red-600 es-bg-[rgba(0,0,0,0.04)] dark:es-bg-[hsla(0,0%,100%,0.08)] dark:es-text-red-600'
            : ''
        ]" class="es-house-item es-w-16 es-text-center es-py-2 es-rounded-full es-text-sm dark:es-text-indigo-50">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineOptions({
  name: 'EsNav'
})

// 在 script 中 t获取的数据 在 computed 中才会有响应式
const list = computed(() => {
  return [
    {
      name: t('nav.find'),
      bg: '#DC2626'
    },
    {
      name: t('nav.marina'),
      bg: '#6BB4DD'
    },
    {
      name: t('nav.retro'),
      bg: '#8D6943'
    },
    {
      name: t('nav.business'),
      bg: '#1A2A4B'
    },
    {
      name: t('nav.small'),
      bg: '#C0C0C0'
    },
    {
      name: t('nav.nature'),
      bg: '#7CFC00'
    },
    {
      name: t('nav.hot'),
      bg: '#ff4500'
    }
  ]
})
</script>

<style scoped lang="css">
.es-nav-ul::-webkit-scrollbar {
  display: none;
}
</style>
