import Vue from 'vue';
import Vuex from 'vuex';
import todos from './todos';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const persistedDataState = createPersistedState({
 paths: ['todos'],
});

export default new Vuex.Store({
 plugins: [persistedDataState],
 modules: {
  todos: {
   namespaced: true,
   ...todos,
  },
 },
});
