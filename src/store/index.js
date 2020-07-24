import Vue from 'vue'
import Vuex from 'vuex'

import movies from './module-movies'
import series from './module-series'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		movies,
		series
	}
})
