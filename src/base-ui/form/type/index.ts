type IformType = 'input' | 'password' | 'select' | 'datepicker'

export interface IformItem {
  field: string
  type: IformType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface Iform {
  formItems: IformItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
