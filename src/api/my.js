import request from '@/utils/request'
// import store from '@/store/index'
export const myInfoAPI = () => {
  return request({
    url: '/user'
  })
}
export const MyCollection = () => {
  return request({
    url: '/user/favorites'
  })
}
export const MyBuildingList = () => {
  return request({
    url: '/user/houses'
  })
}
