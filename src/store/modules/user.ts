import Cookie from 'js-cookie'
const user = {
  state: {
    token: ''
  },
  mutations: {
    setToken(state: any, val: any) {
      state.token = val
      Cookie.set('token', val)
    },
    clearToken(state: any) {
      state.token = ''
      Cookie.remove('token')
    },
    getToken(state: any) {
      state.token = state.token || Cookie.get('token')
    }
  },
  actions: {}
}

export default user
