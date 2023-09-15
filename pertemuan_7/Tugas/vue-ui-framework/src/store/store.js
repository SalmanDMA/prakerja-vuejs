import Vue from 'vue';
import Vuex from 'vuex';
import article from './article';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const persistedDataState = createPersistedState({
 paths: ['article'],
});

export default new Vuex.Store({
 plugins: [persistedDataState],
 modules: {
  article: {
   namespaced: true,
   ...article,
  },
 },
});
