// 编写好规则
export const rules = {
  num: [
    {
      required: true,
      message: '电话号是必传内容~',
      trigger: 'change'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '电话号必须是11个数字~',
      trigger: 'change'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码是必传内容~',
      trigger: 'change'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '验证码必须是3位以上的字母或者数字~',
      trigger: 'change'
    }
  ]
}
