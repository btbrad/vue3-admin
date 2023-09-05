<script lang="ts">
export default defineComponent({
  name: 'BreadcrumbIndex',
})
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbData = ref<{ title: string; path: string }[]>([])

watch(
  route,
  () => {
    breadcrumbData.value = route.matched
      .filter((item: { meta: { title: string; icon: string } }) => item.meta.title && item.meta.icon)
      .map((v: { meta: { title: string }; path: string }) => ({
        title: v.meta.title,
        path: v.path,
      }))
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="index" :to="{ path: item.path }">{{
        item.title
      }}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
