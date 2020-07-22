import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import movie from './modules/movie';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movie,
  },
});
