<template>
  <header
    class="es-fixed es-top-0 es-w-full es-z-[999] es-h-20 es-bg-white es-transition-all es-duration-500 dark:es-bg-black es-px-5 md:es-px-10 lg:es-px-20"
  >
    <div class="es-header-container es-flex es-justify-between es-items-center es-h-full">
      <EsLogo />
      <EsSearch />
      <EsHeaderNav />
    </div>
  </header>
</template>

<script setup lang="ts">
import EsLogo from './components/Logo.vue'
import EsSearch from './components/Search.vue'
import EsHeaderNav from './components/Nav.vue'

defineOptions({
  name: 'EsHeader'
})
</script>

<style scoped lang="css"></style>
