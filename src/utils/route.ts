/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path-browserify'
/**
 * 获取所有的子集路由
 */
const getChildRoutes = (routes: any) => {
  return routes.reduce((a: any, b: any) => {
    if (b.children && b.children.length > 0) {
      a.concat[getChildRoutes(b.children)]
    } else {
      a.push(b)
    }
    return a
  }, [])
}

/**
 * 处理脱离层级的路由
 */
export const filterRoutes = (routes: any) => {
  const childRoutesPath = getChildRoutes(routes).map((item: any) => item.path)
  // 清除第一层级中的子路由
  return routes.filter((route: any) => !childRoutesPath.includes(route.path))
}

const isNull = (data: any) => {
  return !data || JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]'
}

/**
 * 根据routes数据，返回对应的menu规则数据
 */
export const generateMenus = (routes: any, basePath = '') => {
  return routes.reduce((a: any, b: any) => {
    if (isNull(b.children) && isNull(b.meta)) {
      return a
    } else if (isNull(b.meta) && !isNull(b.children)) {
      a.concat(generateMenus(b.children))
      return a
    } else {
      const routePath = path.resolve(basePath, b.path)
      let route = a.find((item: any) => item.path === routePath)
      if (!route) {
        route = {
          ...b,
          path: routePath,
          children: [],
        }
        if (route.meta.icon && route.meta.title) {
          a.push(route)
        }
      }
      if (!isNull(b.children)) {
        route.children.push(...generateMenus(b.children, route.path))
      }
      return a
    }
  }, [])
}
