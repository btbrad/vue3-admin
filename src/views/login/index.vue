<script lang="ts">
export default {
  name: 'LoginPage',
}
</script>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const formData = reactive({
  username: '',
  password: '',
})

const passwordValidator = (_rule: FormRules, value: string, callback: (params: unknown) => void) => {
  if (value.length < 6) {
    callback(new Error('密码不能少于6位'))
  }
}

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { validator: passwordValidator, trigger: 'blur' },
  ],
})

const isShowPassword = ref(false)

const toggleShowPassword = () => (isShowPassword.value = !isShowPassword.value)

const formRef = ref<FormInstance | null>(null)
const handleLogin = async () => {
  await formRef.value?.validate()
}
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center bg-gray-100">
    <div class="mx-auto flex rounded bg-white py-10">
      <div class="box-border w-[500px] px-10">
        <div class="mb-3 flex justify-center font-bold">
          <span>用户登录</span>
        </div>
        <el-form ref="formRef" :model="formData" :rules="rules">
          <el-form-item prop="username">
            <div class="flex w-full items-center border px-3 shadow-sm">
              <svg-icon icon-class="user" size="25px" />
              <el-input class="ml-2 h-[40px]" v-model="formData.username" placeholder="请输入用户名" clearable />
            </div>
          </el-form-item>
          <el-form-item prop="password">
            <div class="flex w-full items-center border px-3 shadow-sm">
              <svg-icon icon-class="lock" size="25px" />
              <el-input
                class="mx-2 h-[40px]"
                v-model="formData.password"
                placeholder="请输入密码"
                clearable
                :type="isShowPassword ? 'text' : 'password'"
              />
              <svg-icon
                v-if="isShowPassword"
                @click="toggleShowPassword"
                class="cursor-pointer"
                icon-class="eye_open"
                size="25px"
              />
              <svg-icon v-else @click="toggleShowPassword" class="cursor-pointer" icon-class="eye_close" size="25px" />
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="!h-[40px] w-full" type="primary" @click="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-input {
  /* stylelint-disable-next-line selector-class-pattern */
  :deep(.el-input__wrapper) {
    border-radius: 0;
    box-shadow: none;
  }
}
</style>
