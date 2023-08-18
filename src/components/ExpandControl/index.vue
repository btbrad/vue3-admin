<script lang="ts">
export default {
  name: 'ExpandControl',
}
</script>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()

const { sidebarExpand } = storeToRefs(appStore)

const handleClick = () => {
  appStore.toggleExpand()
}
</script>

<template>
  <div class="expand-control-container flex items-center justify-center hover:bg-gray-300" @click="handleClick">
    <svg-icon :iconClass="sidebarExpand ? 'collapse' : 'expand'" size="30px" />
  </div>
</template>

<style lang="scss" scoped>
.expand-control-container {
  width: 30px;
  height: 100%;
  cursor: pointer;
  transition: background 0.5s;
}
</style>
