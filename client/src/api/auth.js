import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}

export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data: data
  })
}

export function getInfo(token) {
  return request({
    url: '/auth/user',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
