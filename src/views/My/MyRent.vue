<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="$router.go(-1)" />
    <div class="rent-list" v-for="(item, index) in collection" :key="index">
      <div class="rent-img">
        <img :src="'http://liufusong.top:8080' + item.houseImg" />
      </div>
      <div class="rent-text ">
        <h3 class="title van-ellipsis">{{ item.title }}</h3>
        <p class="text">{{ item.desc }}</p>
        <div class="label" v-for="(item1, index1) in item.tags" :key="index1">
          <span>{{ item1 }}</span>
        </div>
        <p class="money">
          <span>{{ item.price }}</span> 元/月
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { MyCollection } from '@/api/my'
export default {
  created () {
    this.MyCollection()
  },
  data () {
    return {
      collection: {}
    }
  },
  methods: {
    async MyCollection () {
      try {
        const res = await MyCollection()
        console.log(res)
        this.collection = res.data.body
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
.van-nav-bar {
  margin-bottom: 20px;
}
.rent-list {
  width: 100%;
  height: 120px;
  border-bottom: 1px solid #e5e5e5;
  .rent-img {
    width: 106px;
    height: 80px;
    float: left;
    img {
      width: 100%;
    }
  }
  .rent-text {
    width: 220px;
    height: 90px;
    padding-left: 12px;
    float: left;
    .title {
      margin: 0;
      font-size: 15px;
      color: #394043;
    }
    .text {
      margin: 0;
      font-size: 12px;
      color: #afb2b3;
      margin-top: 4px;
    }
    .label {
      color: #39becd;
      background: #e1f5f8;
      display: inline-block;
      font-size: 12px;
      border-radius: 3px;
      padding: 4px 5px;
      margin-right: 5px;
      line-height: 12px;
    }
    .money {
      margin: 0;
      font-size: 12px;
      color: #fa5741;
      span {
        font-size: 16px;
        font-weight: bolder;
      }
    }
  }
}
</style>
