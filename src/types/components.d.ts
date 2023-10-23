import EsTabBar from '@/components/EsTabBar/index.vue'
import Header from '@/components/Header/index.vue'

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    EsTabBer: typeof EsTabBar
    Header: typeof Header
  }
}
