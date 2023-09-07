<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import SvgIcon from '@/components/SvgIcon.vue'
import { useI18n } from 'vue-i18n'

const appStore = useAppStore()
const { locale } = useI18n()

const handleLanguageChange = (lang: string) => {
  locale.value = lang
  appStore.changeLanguage(lang)
  if (lang == 'en') {
    ElMessage.success('Switch Language Successful!')
  } else {
    ElMessage.success('切换语言成功！')
  }
}
</script>

<template>
  <el-dropdown trigger="click" @command="handleLanguageChange">
    <div>
      <svg-icon icon-class="language" size="30" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="appStore.language === 'zh-cn'" command="zh-cn"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'en'" command="en"> English </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
