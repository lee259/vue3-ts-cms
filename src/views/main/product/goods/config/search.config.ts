import { Iform } from '@/base-ui/form/type'

export const searchFormConfig: Iform = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '商品地址',
      placeholder: '请输入商品地址'
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        {
          title: '启用',
          value: 1
        },
        {
          title: '禁用',
          value: 0
        }
      ]
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
