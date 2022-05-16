import { Module } from 'vuex'

import router from '@/router'
import { userMenusToRoutes } from '@/utils/map-menus'

import {
  accontLoginRequest,
  requestUserinfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import LocalCache from '@/utils/cache'

import { IRootState } from '../type'
import { ILoginState } from './type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      //拿到 usermenus中的route
      const routes = userMenusToRoutes(userMenus)
      //将route放到router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accontLoginAction(context, payload: IAccount) {
      //1.实现登录逻辑
      const LoginResult = await accontLoginRequest(payload)
      const { id, token } = LoginResult.data
      context.commit('changeToken', token)
      LocalCache.setCache('token', token)

      //2.请求用户数据
      const userInfoResult = await requestUserinfoById(id)
      const userInfo = userInfoResult.data
      context.commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      //3.请求用户菜单信息
      const UserMenusResult = await requestUserMenuByRoleId(userInfo.role.id)
      const UserMenus = UserMenusResult.data
      context.commit('changeUserMenus', UserMenus)
      LocalCache.setCache('userMenus', UserMenus)

      //4.跳转到首页
      router.push('/main')
    },
    loadLocalLogin(context) {
      const token = LocalCache.getCache('token')
      if (token) {
        context.commit('changeToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')

      if (userInfo) {
        context.commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (userMenus) {
        context.commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
