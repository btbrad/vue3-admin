<script lang="ts" scoped>
export default {
  name: 'IndexPage',
}

console.log(variables.testColor)
</script>

<script setup lang="ts">
import variables from '@/styles/variables.module.scss'
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()

console.log(variables.testColor)
console.log(import.meta.env.VITE_APP_TITLE)
</script>

<template>
  <div>首页</div>
  <el-button type="success"><i-ep-SuccessFilled />ElementPlus图标</el-button>
  <el-button type="info"><svg-icon icon-class="user" />本地svg图标</el-button>
  <p class="red">sass红色文字</p>
  <p>count: {{ counterStore.count }}</p>
  <p>double count: {{ counterStore.double }}</p>
  <el-button type="primary" @click="counterStore.increment">+</el-button>
</template>

<style lang="scss" scoped>
.red {
  color: $test-color;
}
</style>
