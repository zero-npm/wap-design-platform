<template>
  <div id="app">

    <router-view></router-view>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="send-gift-o">预览</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onChange(e) {
      console.log(e)
      switch (e) {
        case 0:
          this.$router.push('/home');
          break;
        case 1:
          this.$router.push('/preview');
          break;
        case 2:
          this.$router.push('/mine');
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style>

</style>
