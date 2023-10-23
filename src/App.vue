<template>
  <div class="es-overflow-hidden">
    <RouterView />
    <EsTabBar />
  </div>
</template>

<script setup lang="ts">
import EsTabBar from './components/EsTabBar/index.vue'
</script>

<style>
body {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}

header,
section,
footer,
aside,
nav,
article,
figure {
  display: block;
}
</style>
