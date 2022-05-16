type IformType = 'input' | 'password' | 'select' | 'datepicker'

export interface IformItem {
  type: IformType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}
