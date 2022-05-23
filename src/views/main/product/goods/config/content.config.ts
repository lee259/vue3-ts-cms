export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', width: '150' },
    { prop: 'oldPrice', label: '原价格', width: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', width: '80' },
    { prop: 'imgUrl', label: '商品图片', width: '100', slotName: 'image' },
    { prop: 'enable', label: '状态', width: '100', slotName: 'status' },
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
