<template>
  <div class="page-search">
    <hyform v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </hyform>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Hyform from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  components: { Hyform },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    //双向绑定的属性应该由searchConfig的field来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    const handleResetClick = () => {
      //由于传过去的元素在form组件中形成了浅拷贝，所以通过改变对象元素的方法进行赋值
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return { formData, handleResetClick, handleQueryClick }
  }
})
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
