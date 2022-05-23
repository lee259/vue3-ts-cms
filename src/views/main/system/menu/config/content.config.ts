export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', width: '150' },
    { prop: 'type', label: '类型', width: '60' },
    { prop: 'url', label: '菜单url', width: '100' },
    { prop: 'icon', label: '菜单icon', width: '100' },
    { prop: 'permission', label: '按钮权限', width: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minwidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minwidth: '220',
      slotName: 'updateAt'
    },
    { label: '操作', width: '120', slotName: 'handler' }
  ],
  showSelectColum: false,
  showIndexColum: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
