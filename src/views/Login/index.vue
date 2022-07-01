<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="onClick" />
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit">登 录</van-button>
      </div>
      <div class="div_a">
        <a href="javascript:;">还没有账号，去注册~</a>
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from '@/api/login'
const testName = /^[\w]{5,8}$/
const testPass = /^[\w]{5,12}$/
export default {
  created () { },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClick () {
      console.log(5)
      this.$router.go(-1)
    },
    async onSubmit (values) {
      const ifName = testName.test(values.username)
      const ifPass = testPass.test(values.password)
      if (ifPass === false) {
        return this.$toast('密码格式5-12位的字母和数字')
      } else if (ifName === false) {
        return this.$toast('用户名格式5-8位的字母和数字')
      }
      try {
        const res = await loginAPI(values)
        console.log(res)
        if (res.data.status === 400) {
          return this.$toast.fail(res.data.description)
        }
        this.$toast.success(res.data.description)
        this.$store.commit('loginFn', res.data.body.token)
        this.$router.push({ name: 'my' })
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
  margin-bottom: 10px;
}
.van-field {
  height: 60px;
  line-height: 60px;
  font-size: 17px;
}
.van-button {
  margin: 20px 0;
  font-size: 18px;
}
.div_a {
  text-align: center;
  font-size: 14px;
  a {
    color: #333;
  }
}
</style>
