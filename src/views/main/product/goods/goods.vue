<template>
  <div class="goods">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
        />
      </template>
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: {
    pageContent,
    pageSearch
  },
  setup() {
    return { contentTableConfig, searchFormConfig }
  }
})
</script>

<style scoped></style>
