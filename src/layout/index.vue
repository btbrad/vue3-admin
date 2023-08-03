<script lang="ts">
export default defineComponent({
  name: 'LayoutCom',
})
</script>

<script lang="ts" setup>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/NavBar.vue'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.scss'
console.log(variables)
</script>

<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <sidebar />
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
@import url('@/styles/mixin');

.app-wrapper {
  @include clearfix;
  @include relative;

  .fix-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: calc(100vw - #{$sidebarWidth});
  }
}
</style>
