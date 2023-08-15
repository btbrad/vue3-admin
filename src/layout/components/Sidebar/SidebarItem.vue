<script lang="ts" setup>
import MenuItem from './MenuItem.vue'

defineProps({
  route: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <el-sub-menu v-if="route.children && route.children.length" :index="route.path">
    <template #title>
      <menu-item :title="route.meta && route.meta.title" :icon="route.meta && route.meta.icon"></menu-item>
    </template>
    <sidebar-item v-for="item in route.children" :key="item.path" :route="item" />
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta && route.meta.title" :icon="route.meta && route.meta.icon"></menu-item>
  </el-menu-item>
</template>
