<template>
  <div>
    <div class="title">
      <van-search show-action placeholder="请输入小区或地址">
        <template #left>
          <van-icon class="left-icon" name="arrow-left" />
        </template>
        <template #action>
          <van-icon class="right-icon" name="location-o" />
        </template>
        <template #label>
          <span class="span"
            >{{ $store.state.currentCity.label }}<van-icon name="arrow-down"
          /></span>
        </template>
      </van-search>
    </div>
    <div>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <template #default>
            <van-area title="标题" :area-list="areaList" />
          </template>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <template #default>
            <van-area title="标题" :area-list="areaList" :columns-num="1" />
          </template>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <template #default>
            <van-area title="标题" :area-list="areaList" :columns-num="1" />
          </template>
        </van-dropdown-item>
        <van-dropdown-item title="筛选">
          <template #default> 筛选 </template>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data'
export default {
  created () { },
  data () {
    return {
      active: 0,
      areaList
    }
  },
  methods: {
  },
  computed: {},
  watch: {
  },
  filters: {},
  components: {
  }
}
</script>

<style scoped lang="less">
.van-search {
  background-color: #21b97a;
  color: #fff;
  .left-icon {
    margin-right: 10px;
  }
  .right-icon {
    font-size: 25px;
    margin-right: 15px;
    line-height: 34px;
    color: #fff;
  }
  .span {
    height: 20px;
    line-height: 20px;
    display: inline-block;
    padding-right: 8px;
    border-right: 1px solid #666;
    margin: 2px 0;
  }
}
</style>
