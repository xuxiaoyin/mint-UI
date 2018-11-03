<template>
  <div id="app">
  	<mt-navbar v-model="selected">
		  <mt-tab-item id="1"><router-link to='/home'>首页</router-link></mt-tab-item>
		  <mt-tab-item id="2"><router-link to='/news'>新闻</router-link></mt-tab-item>
		</mt-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: '1'
    }
  }
}
</script>

<style lang="scss">

</style>
