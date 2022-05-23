export const contentTableConfig = {
  title: '角色列表',
  propList: [
    { prop: 'name', label: '角色名', width: '150' },
    { prop: 'intro', label: '权限介绍', width: '150' },

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
