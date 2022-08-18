import router from './router'
import store from './store'
router.beforeEach((to: any, form: any, next: any) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (router.getRoutes().length == 2) {
    store.dispatch('tab/generateRoutes')
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})
