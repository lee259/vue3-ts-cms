<template>
  <div class="common-content">
    <el-container class="page">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header class="header-content">
          <nav-header @fold-change="handleFoldChange" />
        </el-header>
        <el-main class="main-content">
          <div class="page-white">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import navMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header/src/nav-header.vue'

export default defineComponent({
  components: {
    navMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }

    return {
      handleFoldChange,
      isCollapse
    }
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
    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */

      &::-webkit-scrollbar {
        display: none;
      }
    }
    .header-content {
      line-height: 48px;
      height: 48px;
    }
    .main-content {
      text-align: center;
      background-color: #f0f2f5;
      .page-white {
        background-color: #fff;
        border-radius: 5px;
      }
    }
  }
}
</style>
