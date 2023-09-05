<script lang="ts" setup>
import { useUserStore } from '@/store/user'
import BreadcrumbIndex from '@/components/Breadcrumb/index.vue'

const userStore = useUserStore()

const handleLogout = () => {
  userStore.logout()
}
</script>

<template>
  <div class="flex h-full w-full justify-between border border-gray-400 p-3">
    <div class="flex items-center justify-start">
      <expand-control class="mr-3" />
      <breadcrumb-index />
    </div>
    <el-dropdown>
      <el-avatar shape="square" :size="35" :src="userStore.userInfo.avatar" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item divided @click="handleLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
