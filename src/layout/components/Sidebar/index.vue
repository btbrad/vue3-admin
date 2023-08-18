<script lang="ts">
export default defineComponent({
  name: 'SideBar',
})
</script>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { useAppStore } from '@/store/app'
import SideMenu from './SideMenu.vue'

const appStore = useAppStore()
</script>

<template>
  <div class="sidebar-container" :class="{ collapsed: !appStore.sidebarExpand }">
    <div class="logo-container flex h-[60px] w-full items-center px-4">
      <svg-icon icon-class="vue" size="30px" />
      <div v-if="appStore.sidebarExpand" class="pl-2 text-lg font-bold text-white">VUE3-ADMIN</div>
    </div>
    <el-scrollbar>
      <side-menu />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-container {
  width: $sidebarWidth;
  height: 100%;
  transition: width 0.6s;

  &.collapsed {
    width: $sidebarCollapsedWidth;
  }
}
</style>
