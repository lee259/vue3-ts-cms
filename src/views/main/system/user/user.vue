<template>
  <div class="user">
    <div class="search">
      <hyform :form-items="formItems" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hyform from '@/base-ui/form'
import { IformItem } from '@/base-ui/form/type'

export default defineComponent({
  components: {
    Hyform
  },
  name: 'user',
  setup() {
    const formItems: IformItem[] = [
      {
        type: 'input',
        label: 'id',
        placeholder: '请输入id'
      },
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        type: 'password',
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        type: 'select',
        label: '喜欢的运动',
        placeholder: '请选择喜欢的运动',
        options: [
          {
            title: '篮球',
            value: 'basketball'
          },
          {
            title: '足球',
            value: 'football'
          }
        ]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'datarange'
        }
      }
    ]
    return {
      formItems
    }
  }
})
</script>

<style scoped></style>
