<template>
  <section class="es-synopsis-swiper es-relative es-w-2/3 es-h-full es-flex es-items-center">
    <swiper effect="cards" :grab-cursor="true" :modules="[EffectCards]" class="mySwiper">
      <swiper-slide v-for="(item, i) in imgList" :key="i">
        <figure class="es-w-full es-h-full">
          <img :src="item" :alt="item" class="es-w-full es-h-full es-object-cover" />
        </figure>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'

defineProps<{
  imgList: string[]
}>()

defineOptions({
  name: 'EsSwiperCards'
})
</script>

<style scoped>
.swiper {
  width: 300px;
  height: 420px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
</style>
