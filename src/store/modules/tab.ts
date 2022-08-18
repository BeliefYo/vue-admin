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
    currentMenu: null
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
    }
  },
  actions: {}
}

export default tab
