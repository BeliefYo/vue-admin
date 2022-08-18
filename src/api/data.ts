import axios from './axios'
export const getMenu = (param: any) => {
  return axios.request({
    url: '/menuList',
    method: 'get',
    param
  })
}

export const login = (param: any) => {
  return axios.request({
    url: '/login',
    method: 'POST',
    data: param
  })
}
