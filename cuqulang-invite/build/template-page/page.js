'use strit';
import Vue from 'vue'
import app from './$PAGE.vue'
import '../../../static/flexible.js'
Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})
