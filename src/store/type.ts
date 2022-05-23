import { ILoginState } from './login/type'
import { ISystemState } from './system/type'

export interface IRootState {
  name: string
}

export interface IRootWithMoudle {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithMoudle
