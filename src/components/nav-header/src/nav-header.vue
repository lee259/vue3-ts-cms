<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <bread-crumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import userInfo from './user-info.vue'
import breadCrumb from '@/base-ui/breadcrumb'

import { pathMapBreadcrumb } from '@/utils/map-menus'

export default defineComponent({
  components: { userInfo, breadCrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const store = useStore()
    //通过计算属性来监听路由和usermenu的改变，从而达到响应式的效果
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumb(userMenus, currentPath)
    })

    return {
      handleFoldClick,
      isFold,
      breadcrumbs
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  .fold-menu {
    line-height: 48px;
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
