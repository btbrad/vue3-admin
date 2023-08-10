<script lang="ts">
export default defineComponent({
  name: 'SideBar',
})
</script>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import SiderMenu from './SiderMenu.vue'
</script>

<template>
  <div class="sidebar-container">
    <sider-menu />
  </div>
</template>

<style lang="scss" scoped>
.sidebar-container {
  width: $sidebarWidth;
  height: 100%;
}
</style>
