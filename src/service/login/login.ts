import hyRequest from '..'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', //users/id
  UserMenus = '/role/' //role/id/menu
}

export function accontLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserinfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  })
}
