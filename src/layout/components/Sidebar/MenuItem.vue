<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- svg icon -->
  <el-icon>
    <svg-icon :icon-class="icon" />
  </el-icon>
  <span>{{ title }}</span>
</template>
