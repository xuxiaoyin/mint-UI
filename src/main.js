import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

import Home from './components/Home.vue';
import News from './components/News.vue';

const routes=[
	{path:'/home',component:Home},
	{path:'/news', component: News },
	{ path: '*', redirect: '/home' }
];

const router=new VueRouter({
	routes 
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
