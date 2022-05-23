import { IBreadCrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null
export function userMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //先去加载所有的routes

  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const routes = require('../router/main' + key.split('.')[1])
    allRoutes.push(routes.default)
  })
  //根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapBreadcrumb(userMenus: any[], currentPath: string) {
  const breadCrumb: IBreadCrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadCrumb)
  return breadCrumb
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadCrumb?: IBreadCrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadCrumb?.push({ name: menu.name })
        breadCrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function mapMenustopermissions(userMenus: any[]) {
  const permission: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permission.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permission
}
export { firstMenu }
