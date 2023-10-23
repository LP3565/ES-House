<template>
  <div>
    <!-- logo 部分 -->
    <RouterLink to="/home">
      <h1 id="es-logo" class="es-text-red-600" title="ES House">ES House</h1>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EsLogo'
})
</script>

<style scoped lang="css">
#es-logo {
  font-size: 28px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>
