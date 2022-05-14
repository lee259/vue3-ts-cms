<template>
  <div class="common-content">
    <el-container class="page">
      <el-aside width="210px" class="aside-content">
        <nav-menu />
      </el-aside>
      <el-container>
        <el-header class="header-content">Header</el-header>
        <el-main class="main-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import navMenu from '@/components/nav-menu'

export default defineComponent({
  components: {
    navMenu
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.common-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .page {
    height: 100%;
    .aside-content {
      background-color: #001523;
    }
    .header-content {
      line-height: 48px;
      height: 48px;
    }
    .main-content {
      text-align: center;
      background-color: #f0f2f5;
    }
  }
}
</style>
