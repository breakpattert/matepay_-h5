'use strit';
import Vue from 'vue'
import app from './test.vue'
import '../../../static/flexible.js'
Vue.config.productionTip = false

console.log('process.env', process.env)

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})
