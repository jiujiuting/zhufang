<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/housing" icon="eye-o">找房</van-tabbar-item>
      <van-tabbar-item replace to="/service" icon="orders-o"
        >咨询</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.van-tabbar-item {
  /deep/ .van-icon {
    font-size: 25px !important;
  }
  .am-tab-bar-tab-title {
    font-size: 10px;
  }
}
</style>
