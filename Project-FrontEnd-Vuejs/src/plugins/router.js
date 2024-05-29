import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Import components
import chitietsanpham from '../pages/chitietsanpham.vue';
import App from '../App.vue';

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/chitietsanpham/:id',
    name: 'chi-tiet-san-pham',
    component: chitietsanpham
  },
];

const router = new VueRouter({
  mode: 'history', // Use history mode for cleaner URLs
  routes
});

export default router;
