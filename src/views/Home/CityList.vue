<template>
  <div>
    <SharedTitle title="城市列表"></SharedTitle>
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="C" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
       <van-index-anchor index="D" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
       <van-index-anchor index="E" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
       <van-index-anchor index="F" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      ...
    </van-index-bar>
  </div>
</template>

<script>
import SharedTitle from '@/components/SharedTitle.vue'
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {
    SharedTitle
  }
}
</script>

<style scoped lang='less'>
</style>
