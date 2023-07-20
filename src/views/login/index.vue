<script lang="ts">
export default {
  name: 'LoginPage',
}
</script>

<script setup lang="ts">
const formData = reactive({
  username: '',
  password: '',
})
const isRemember = ref(false)
</script>

<template>
  <div class="w-screen h-screen bg-gray-100 flex justify-center items-center">
    <div class="flex mx-auto bg-white rounded py-10">
      <div class="w-[500px] box-border px-10">
        <div class="font-bold mb-3 flex justify-center">
          <span>用户登录</span>
        </div>
        <el-form :model="formData">
          <el-form-item prop="username">
            <el-input class="h-[40px]" v-model="formData.username" placeholder="请输入用户名" clearable />
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="h-[40px]" v-model="formData.password" placeholder="请输入密码" clearable />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="isRemember" label="记住密码" size="large" />
          </el-form-item>
          <el-form-item>
            <el-button class="w-full !h-[40px]" type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
