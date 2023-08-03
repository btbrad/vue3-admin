<script lang="ts">
export default defineComponent({
  name: 'SideBar',
})
</script>

<script lang="ts" setup>
import { defineComponent } from 'vue'
</script>

<template>
  <div class="sidebar-container">SideBar</div>
</template>

<style lang="scss" scoped>
.sidebar-container {
  width: $sidebarWidth;
  height: 100%;
}
</style>
