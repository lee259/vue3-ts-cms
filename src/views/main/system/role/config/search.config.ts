import { Iform } from '@/base-ui/form/type'

export const searchFormConfig: Iform = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限名称',
      placeholder: '请输入权限名称'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  itemLayout: { padding: '20px 60px' },
  colLayout: {
    span: 8
  }
}
