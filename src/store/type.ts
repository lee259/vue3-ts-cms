import { ILoginState } from './login/type'

export interface IRootState {
  name: string
}

export interface IRootWithMoudle {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithMoudle
