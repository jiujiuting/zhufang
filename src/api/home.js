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
