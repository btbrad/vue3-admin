<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()

const handleLogout = () => {
  userStore.logout()
}
</script>

<template>
  <div class="flex h-full w-full justify-end border border-gray-400 p-3">
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
