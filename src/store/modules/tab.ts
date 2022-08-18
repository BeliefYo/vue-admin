import Cookie from 'js-cookie'
import { getMenu } from '../../api/data'
import routers from '../../router'
const tab = {
  namespaced: true,
  state: {
    isCollapse: false,
    tabList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    currentMenu: null,
    menu: []
  },
  mutations: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    collapseMenu: (state: any) => {
      state.isCollapse = !state.isCollapse
    },
    selectMenu: (state: any, val: any) => {
      if (val.name !== 'home') {
        state.currentMenu = val
        const result = state.tabList.findIndex(
          (item: any) => item.name === val.name
        )
        if (result == -1) {
          state.tabList.push(val)
        }
      } else {
        state.currentMenu = null
      }
    },
    closeTag: (state: any, val: any) => {
      const result = state.tabList.findIndex(
        (item: any) => item.name === val.name
      )
      state.tabList.splice(result, 1)
    },
    setMenu: (state: any, val: any) => {
      state.menu = val
      Cookie.set('menu', JSON.stringify(val))
    },
    clearMenu: (state: any, val: any) => {
      state.menu = ''
      Cookie.remove('menu')
    },
    addMenu: (state: any, router: any) => {
      if (!Cookie.get('menu')) {
        return
      } else {
        const menu = JSON.parse(Cookie.get('menu'))
        const menuArray: any[] = []
        menu.forEach((item: any) => {
          if (item.children) {
            item.children = item.children.map((item: any) => {
              item.component = () => import(`../../views/${item.url}.vue`)
              return item
            })
            menuArray.push(...item.children)
          } else {
            item.component = () => import(`../../views/${item.url}`)
            menuArray.push(item)
          }
        })
        menuArray.forEach((item: any) => {
          router.addRoute('layout', item)
        })
      }
    }
  },
  actions: {
    generateRoutes(datas: any) {
      getMenu({}).then(({ data }) => {
        if (data.code == 200) {
          datas.commit('clearMenu')
          datas.commit('setMenu', data.data.menuList)
          datas.commit('addMenu', routers)
          routers.push({ name: 'home' })
        }
      })
    }
  }
}

export default tab
