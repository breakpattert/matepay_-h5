'use strit';
import Vue from 'vue'
import app from './invite.vue'
import '../../../static/flexible.js'

import VueClipboards from 'vue-clipboards';

Vue.use(VueClipboards);
Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})
