export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', width: '150' },
    { prop: 'realname', label: '真实姓名', width: '150' },
    { prop: 'cellphone', label: '手机号码', width: '150' },
    { prop: 'enable', label: '状态', width: '150', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minwidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minwidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', width: '120', slotName: 'handler' }
  ],
  showSelectColum: true,
  showIndexColum: true
}
