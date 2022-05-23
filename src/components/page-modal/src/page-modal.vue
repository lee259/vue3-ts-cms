<template>
  <div class="page-modal">
    <el-dialog
      title="新建用户"
      v-model="centerDialogVisible"
      width="30%"
      center
    >
      <hy-form v-bind="modalConfig" v-model="formData"></hy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import hyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    }
  },
  components: { hyForm },
  setup() {
    const centerDialogVisible = ref(true)
    const formData = ref({})
    return { centerDialogVisible, formData }
  }
})
</script>

<style scoped></style>
