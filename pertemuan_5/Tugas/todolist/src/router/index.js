import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TodoDetail from '../views/TodoDetail.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

Vue.use(VueRouter);

const routes = [
 {
  path: '/',
  component: DefaultLayout,
  children: [
   {
    path: '',
    name: 'home',
    component: HomeView,
   },
   {
    path: ':id',
    name: 'TodoDetail',
    component: TodoDetail,
   },
  ],
 },
];

const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes,
});

export default router;
