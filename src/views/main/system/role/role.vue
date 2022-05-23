<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" :pageName="'role'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'role',
  components: { pageContent, pageSearch },
  setup() {
    return { contentTableConfig, searchFormConfig }
  }
})
</script>

<style scoped></style>
