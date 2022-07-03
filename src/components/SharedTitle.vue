<template>
  <van-nav-bar fixed z-index='6' :title="title" left-arrow @click-left="$router.go(-1)" />
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
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
</style>
