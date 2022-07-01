<template>
  <div>
    <!-- 登录后 -->
    <div class="My_title" v-if="this.$store.state.token">
      <img
        class="My_bg"
        :src="'http://liufusong.top:8080' + myInfo.avatar"
        alt="背景图"
      />
      <div class="My-info">
        <div class="My_myIcon">
          <img
            class="My_avatar__2Fbh7"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
          />
        </div>
        <div class="My_user My_user_del">
          <div class="My_name">{{ myInfo.nickname }}</div>
          <div class="My_edit My_edit_tuichu">
            <van-button
              round
              type="primary"
              class="loginBtn My_edit_del"
              @click="onClick"
              >退出</van-button
            >
            <p class="my_ziliao">
              编辑个人资料
              <van-icon name="play" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录前 -->
    <div class="My_title" v-else>
      <img
        class="My_bg"
        src="http://liufusong.top:8080/img/profile/bg.png"
        alt="背景图"
      />
      <div class="My-info">
        <div class="My_myIcon">
          <img
            class="My_avatar__2Fbh7"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
          />
        </div>
        <div class="My_user">
          <div class="My_name">游客</div>
          <div class="My_edit">
            <van-button type="primary" to="login" class="loginBtn"
              >去登录</van-button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="div_row">
      <van-row gutter="20">
        <van-col span="8" @click="$router.push({ name: 'myrent' })">
          <van-icon name="star-o" color="#1989fa" />
          <p class="pp">我的收藏</p>
        </van-col>
        <van-col span="8" @click="$router.push({ name: 'myhousing' })">
          <van-icon name="home-o" color="#1989fa" />
          <p class="pp">我的出租</p>
        </van-col>
        <van-col span="8">
          <van-icon name="clock-o" color="#1989fa" />
          <p class="pp">看房记录</p>
        </van-col>
        <van-col span="8">
          <van-icon name="credit-pay" color="#1989fa" />
          <p class="pp">成为房租</p>
        </van-col>
        <van-col span="8">
          <van-icon name="contact" color="#1989fa" />
          <p class="pp">个人资料</p>
        </van-col>
        <van-col span="8">
          <van-icon name="service-o" color="#1989fa" />
          <p class="pp">联系我们</p>
        </van-col>
      </van-row>
      <div class="My_ad__1wZZj">
        <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { myInfoAPI } from '@/api/my'
export default {
  created () {
    this.myTuichu()
  },
  data () {
    return {
      myInfo: {}
    }
  },
  methods: {
    async myTuichu () {
      try {
        const res = await myInfoAPI()
        console.log(res)
        this.myInfo = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async onClick () {
      try {
        await this.$dialog.confirm({ message: '确定退出嘛' })
        this.$store.commit('loginFn', '')
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
.My_title {
  min-height: 300px;
  width: 100%;
  position: relative;
  .My_bg {
    width: 100%;
  }
  .My-info {
    position: absolute;
    background-color: #fff;
    left: 50%;
    bottom: 0;
    width: 85%;
    height: 55%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    text-align: center;
    font-size: 13px;
    .My_myIcon {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      .My_avatar__2Fbh7 {
        width: 100%;
        border-radius: 50%;
      }
    }
    .My_user {
      padding-top: 15px;
      .My_name {
        margin-top: -30px;
        margin-bottom: 10px;
      }
      .My_edit {
        color: #999;
        font-size: 12px;
        margin-top: 20px;
      }
    }
  }
  .van-row {
    text-align: center;
  }
}
.div_row {
  padding: 0 15px 20px;
}
.loginBtn {
  height: 30px;
}
.pp {
  margin: 0;
  margin-top: 8px;
  font-size: 13px;
}
.van-col {
  text-align: center;
  margin: 15px 0;
  padding: 10px 0;
}
.van-icon {
  font-size: 22px;
}
.My_ad__1wZZj {
  text-align: center;
  margin-top: 10px;
  img {
    width: 100%;
  }
}
.My_edit_del {
  font-size: 13px;
  width: 58px;
  height: 23px;
}
.My_user_del {
  padding-top: 0 !important;
}
.My_edit_tuichu {
  margin-top: 10px !important;
}
.my_ziliao {
  font-size: 12px;
  i {
    font-size: 12px;
    vertical-align: middle;
    display: inline-block;
    padding-bottom: 2px;
  }
}
</style>
