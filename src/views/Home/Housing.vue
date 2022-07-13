<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.go(-1)" />
    <van-form @submit="onSubmit">
      <div class="btn">
        <van-button
          type="default"
          class="btndel"
          native-type="button"
          @click="btndel"
          >取消</van-button
        >
        <van-button type="default" native-type="submit" class="btnsub"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  created () { },
  data () {
    return {
    }
  },
  methods: {
    onSubmit () {
      console.log(123)
    },
    btndel () {
      Dialog.confirm({
        title: '提示',
        message: '放弃发布房源',
        confirmButtonText: '放弃编辑'
      }).then(() => {
        this.$router.go(-1)
      })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.btn {
  margin: 0;
  position: fixed;
  bottom: 0;
  .btndel {
    width: 50vw;
    background-color: #fff;
    color: #21b97a;
    border-radius: 0;
  }
  .btnsub {
    border-radius: 0;
    width: 50vw;
    background-color: #21b97a;
    color: #fff;
  }
}
</style>
