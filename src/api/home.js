import request from '@/utils/request'
export const Slideshow = () => {
  return request({
    url: '/home/swiper'
  })
}
export const rentingList = (area) => {
  return request({
    url: '/home/groups',
    params: {
      area
    }
  })
}
export const HomeCityList = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}
export const HomeHotCity = () => {
  return request({
    url: '/area/hot'
  })
}
