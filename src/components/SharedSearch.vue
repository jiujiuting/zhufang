<template>
  <div>
    <van-nav-bar
      title="标题"
      left-arrow
      @click-left="$router.push({ name: 'home' })"
    >
    <template #title>
      <div class="sarech-div"></div>
    </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.sarech-div{
  width: 310px;
  height: 35px;
  background-color: rgb(32, 94, 138);
}
</style>
