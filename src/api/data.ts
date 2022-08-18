import axios from './axios'
export const getMenu = (param: any) => {
  return axios.request({
    url: '/menuList',
    methods: 'get',
    param
  })
}
