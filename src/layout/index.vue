<script lang="ts">
export default defineComponent({
  name: 'LayoutCom',
})
</script>

<script lang="ts" setup>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/NavBar.vue'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.module.scss'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
console.log(variables)
</script>

<template>
  <div class="app-wrapper" :class="[appStore.sidebarExpand ? 'sidebar-expand' : 'sidebar-collapsed']">
    <!-- 左侧menu -->
    <sidebar :style="{ backgroundColor: variables.menuBg }" />
    <div class="main-container">
      <div class="fix-header">
        <!-- 顶部 -->
        <navbar />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/mixin';

.app-wrapper {
  @include clearfix;
  @include relative;

  display: flex;
  width: 100vw;
  height: 100vh;

  .fix-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: calc(100vw - #{$sidebarWidth});
    height: 60px;
    transition: width 0.6s;
  }

  .main-container {
    flex: 1;
    padding-top: 60px;
  }

  &.sidebar-collapsed {
    .fix-header {
      width: calc(100vw - #{$sidebarCollapsedWidth});
    }
  }
}
</style>
