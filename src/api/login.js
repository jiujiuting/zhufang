import request from '@/utils/request'
export const loginAPI = (data) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  })
}
