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
    <side-menu />
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
