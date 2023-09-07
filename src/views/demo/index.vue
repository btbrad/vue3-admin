<script lang="ts" scoped>
export default {
  name: 'DemoPage',
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
  <el-button type="success"><i-ep-SuccessFilled />ElementPlus图标</el-button>
  <el-button type="info"><svg-icon icon-class="user" />本地svg图标</el-button>
  <p>count: {{ counterStore.count }}</p>
  <p>double count: {{ counterStore.double }}</p>
  <el-button type="primary" @click="counterStore.increment">+</el-button>
  <p>国际化: {{ $t('msg') }}</p>
  <el-pagination :page-sizes="[100, 200, 300, 400]" layout="total, sizes, prev, pager, next, jumper" :total="400" />
</template>
