<template>
  <!-- 搜索 -->
  <div
    class="es-search es-w-[44.44vw] es-h-10 es-rounded-2xl lg:es-w-[33.33vw] es-bg-slate-100 dark:es-bg-neutral-900 es-overflow-hidden es-hidden md:es-block">
    <input type="text" :placeholder="t('search.phd')"
      class="es-search-input es-w-[90%] es-box-border es-float-left es-h-full es-pl-5 placeholder:es-text-sm es-bg-slate-100 dark:es-bg-neutral-900 dark:es-caret-slate-50" />
    <div class="es-search-btn es-cursor-pointer es-flex es-justify-center es-items-center es-w-[10%] es-h-full">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1696137490375" class="icon"
        viewBox="0 0 1024 1024" version="1.1" p-id="29178" width="20" height="20">
        <path
          d="M512 858.3168c-194.816 0-352-166.2464-352-370.4832S317.184 117.3504 512 117.3504s352 166.2464 352 370.4832-157.184 370.4832-352 370.4832z m0-64c158.6688 0 288-136.8576 288-306.4832 0-169.6768-129.3312-306.4832-288-306.4832S224 318.1568 224 487.8336c0 169.6256 129.3312 306.4832 288 306.4832zM717.312 799.9488a32 32 0 0 1 46.4896-43.9808l91.4432 96.7168a32 32 0 0 1-46.4896 43.9808l-91.4432-96.768z"
          fill="#2c2c2c" p-id="29179" class="dark:es-fill-slate-300" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineOptions({
  name: 'EsSearch'
})
</script>

<style scoped lang="css">
.es-search-input {
  outline: none;
}
</style>
