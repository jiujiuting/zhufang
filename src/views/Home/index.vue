<template>
  <div>
    <div class="home-title">
      <van-search disabled placeholder="请输入小区或地址">
        <template #left>
          <div @click="$router.push({ name: 'citylist' })">
            <span
              >{{
                $store.state.currentCity === null
                  ? "杭州"
                  : $store.state.currentCity.label
              }}<van-icon name="play"
            /></span>
          </div>
        </template>
      </van-search>
      <van-icon class="search-icon" name="location-o" />
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in SlideshowList" :key="item.id">
        <img v-lazy="'http://liufusong.top:8080' + item.imgSrc" />
      </van-swipe-item>
    </van-swipe>
    <van-grid>
      <van-grid-item icon="photo-o" text="整租">
        <template #icon>
          <div class="list-icon">
            <van-icon name="wap-home-o" />
          </div>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="合租">
        <template #icon>
          <div class="list-icon">
            <van-icon name="friends-o" />
          </div>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="地图找房">
        <template #icon>
          <div class="list-icon">
            <van-icon name="location-o" />
          </div>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="去出租">
        <template #icon>
          <div class="list-icon">
            <van-icon name="home-o" />
          </div>
        </template>
      </van-grid-item>
    </van-grid>
    <div class="group-list">
      <div class="title">
        <h3>小组列表</h3>
        <span>更多</span>
      </div>
      <van-grid class="zhufang" direction="horizontal" :column-num="2">
        <van-grid-item v-for="item in rentingArray" :key="item.id">
          <template #icon>
            <div class="zhufang-img">
              <img :src="'http://liufusong.top:8080' + item.imgSrc" />
            </div>
          </template>
          <template #text>
            <div class="zhufang-text">
              <p>{{ item.title }}</p>
              <p>{{ item.desc }}</p>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { Slideshow, rentingList } from '@/api/home'
export default {
  name: 'home',
  created () {
    this.Slideshow()
    this.rentingList()
  },
  data () {
    return {
      SlideshowList: [],
      rentingArray: [],
      // 租房小组城市id--测试
      csid: 'AREA|88cff55c-aaa4-e2e0'
    }
  },
  methods: {
    async rentingList () {
      try {
        const res = await rentingList(this.csid)
        console.log(res)
        this.rentingArray = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async Slideshow () {
      try {
        const res = await Slideshow()
        this.SlideshowList = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.home-title {
  position: absolute;
  top: 25px;
  z-index: 2;
  left: 20px;
  .van-search {
    width: 310px;
    font-size: 14px;
    padding: 0 8px;
    border-radius: 2px;
    background-color: #f7f8fa;
    span {
      display: inline-block;
      padding-right: 8px;
      border-right: 1px solid #ccc;
    }
  }
  .search-icon {
    display: inline-block;
    position: absolute;
    top: 5px;
    right: -30px;
    font-size: 25px;
    color: #fff;
  }
}
.van-swipe {
  width: 100%;
  height: 212px;
  img {
    width: 100%;
  }
}
.van-grid {
  height: 100px;
  margin-bottom: 10px;
  .list-icon {
    width: 60px;
    height: 60px;
    background-color: #f2fbf7;
    border-radius: 50%;
    text-align: center;
    .van-icon {
      font-size: 45px;
      line-height: 60px;
      color: #00ae66;
    }
  }
}
.title {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  h3 {
    font-size: 15px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 50px;
  }
}
/deep/ .van-grid-item__text {
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;
}
/deep/ .van-hairline {
  &::after {
    border: unset;
  }
}
.group-list {
  background-color: #f6f5f6;
  overflow: hidden;
  padding: 10px 0;
}
.zhufang {
  background-color: #f6f5f6;
  height: 130px;
  /deep/ .van-grid-item__content--center {
    justify-content: unset;
  }
  /deep/ .van-grid-item__content {
    width: 162px;
    height: 60px;
    padding: 0;
    margin-left: 14px;
    margin-bottom: 10px;
  }
}
.zhufang-img {
  width: 50px;
  height: 50px;
  background-color: rgb(207, 10, 10);
  margin: 0 10px;
  img {
    width: 100%;
  }
}
.zhufang-text {
  font-size: 14px;
  p {
    margin: 0;
    padding: 0;
  }
}
</style>
