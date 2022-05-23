<template>
  <div class="table">
    <div class="header">
      <div class="title">{{ title }}</div>
      <div class="handler">
        <slot name="headerHandler"> </slot>
      </div>
    </div>
    <el-table
      :data="userList"
      border
      style="width: 100%"
      @selection-change="selectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColum"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColum"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.id">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          :current-page="page.currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'hy-table',
  props: {
    title: {
      type: String,
      default: ''
    },
    userList: {
      type: Array,
      require: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array,
      require: true
    },
    showIndexColum: {
      type: Boolean,
      default: false
    },
    showSelectColum: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      required: true
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const selectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    return { selectionChange, handleSizeChange, handleCurrentChange }
  }
})
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .handler {
    align-content: center;
  }
}
</style>
