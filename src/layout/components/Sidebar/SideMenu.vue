<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.module.scss'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const router = useRouter()
console.log(router.getRoutes())

const routes = computed(() => {
  const cleanRoutes = filterRoutes(router.getRoutes())
  return generateMenus(cleanRoutes)
})
console.log(111, routes.value)

const route = useRoute()
const activeMenu = computed(() => {
  return route.path
})
</script>

<template>
  <el-menu
    :collapse="!appStore.sidebarExpand"
    :unique-opened="true"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    router
    :default-active="activeMenu"
  >
    <sidebar-item v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
