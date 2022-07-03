<template>
  <div>
    <SharedTitle title="城市列表"></SharedTitle>
    <div class="a">
      <van-index-bar
        :index-list="
          indexList.map((item) =>
            item === '当前城市' ? '#' : item === '热门城市' ? '热' : item
          )
        "
      >
        <div v-for="(item, key, index) in allCity1" :key="index">
          <van-index-anchor :index="item.index">{{ key }}</van-index-anchor>
          <van-cell
            :title="item1.label"
            v-for="(item1, index1) in item"
            :key="index1"
            @click="btn(item1)"
          />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { HomeCityList, HomeHotCity } from '@/api/home'
import SharedTitle from '@/components/SharedTitle.vue'
export default {
  created () {
    this.HomeCityList()
  },
  data () {
    return {
      indexList: [],
      // 所有城市的数据
      list: [],
      // 热门城市的数据
      hotCity: {},
      // 分组后的所有城市
      allCity: {},
      // 拼接后的最终数据
      allCity1: {},
      // 当前城市
      currentCity: { 当前城市: [{ label: '杭州' }] }
    }
  },
  methods: {
    btn (item) {
      console.log(item)
      this.$set(this.allCity1.当前城市, 0, item)
      this.$store.commit('cityFn', item)
      this.$router.go(-1)
    },
    async HomeCityList () {
      try {
        // 获取所有城市
        const res = await HomeCityList(1)
        this.list = res.data.body
        // 获取到的数据
        // console.log(this.list)
        // 城市列表按首字母排序
        const res2 = this.list.sort((a, b) => {
          // 在short中获取首字母并转成大写
          const x1 = a.short.substr(0, 1).toUpperCase()
          const x2 = b.short.substr(0, 1).toUpperCase()
          if (x1 < x2) {
            return -1
          } else if (x1 > x2) {
            return 1
          } else {
            return 0
          }
        })
        // 按首字母排序之后的数据
        // console.log(res2)
        // 给排序好的数据按首字母分组
        res2.forEach(item => {
          // upCase作为分组的键名并判断该分组是否存在
          const upCase = item.short.substr(0, 1).toUpperCase()
          // 有该分组存在就向内添加没有就新建
          if (this.allCity[upCase]) {
            this.allCity[upCase].push(item)
          } else {
            this.allCity[upCase] = [item]
          }
        })
        // 分组过后的数据
        // console.log(this.allCity)
        // 获取热门城市
        const hot = await HomeHotCity()
        this.hotCity = { 热门城市: hot.data.body }
        this.allCity1 = { ...this.currentCity, ...this.hotCity, ...this.allCity }
        //  侧边索引栏的值
        for (const key in this.allCity1) {
          this.indexList.push(key)
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    SharedTitle
  }
}
</script>

<style scoped lang='less'>
.a {
  margin-top: 50px;
}
.title {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
/deep/ .van-index-anchor {
  font-size: 14px;
  color: #999;
  padding: 10px 15px;
}
.van-cell {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
}
/deep/ .van-index-bar__index {
  font-size: 15px;
  display: inline-block;
  margin: 5px 0;
}
</style>
