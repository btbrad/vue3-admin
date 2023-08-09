<script lang="ts" setup></script>

<template>
  <div class="app-main-container">
    <h2>AppMain</h2>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.app-main-container {
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 20px;
}
</style>
