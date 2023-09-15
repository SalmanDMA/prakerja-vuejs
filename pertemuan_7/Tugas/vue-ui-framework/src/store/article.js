import axios from 'axios';

const state = () => ({
 article: [],
 errors: '',
 loading: false,
});

const mutations = {
 setNewArticle(state, payload) {
  state.article = payload;
 },
 setErrors(state, payload) {
  state.errors = payload;
 },
 setLoading(state, payload) {
  state.loading = payload;
 },
};

const actions = {
 getArticles({ commit }, payload) {
  commit('setLoading', true);
  axios
   .get(`https://newsapi.org/v2/everything?q=${payload || 'tech'}&apiKey=${process.env.VUE_APP_API_KEY}`)
   .then((res) => {
    commit('setNewArticle', res.data.articles);
    commit('setErrors', '');
    commit('setLoading', false);
   })
   .catch((err) => {
    commit('setErrors', err);
    commit('setLoading', false);
   });
 },
};

export default {
 state,
 mutations,
 actions,
};
