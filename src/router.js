import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue'
import All from './views/All.vue'
import Saved from './views/Saved.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/all',
      name: 'all',
      component: All,
    },
    {
      path: '/saved',
      name: 'saved',
      component: Saved,
    },
    {
      path: '/stretchRec/:id',
      name: 'stretchRec',
      component: () =>import('./components/stretchRec')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
