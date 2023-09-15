import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArticleDetail from '../views/ArticleDetail.vue';

Vue.use(VueRouter);

const routes = [
 {
  path: '/',
  name: 'home',
  component: HomeView,
 },
 {
  path: '/:id',
  name: 'homeDetail',
  component: ArticleDetail,
 },
];

const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes,
});

export default router;
