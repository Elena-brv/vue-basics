import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter); // регистрация роутера как плагина

export default new VueRouter({
  mode: 'history', // чтобы в путях были обычные слеши
  routes: [ // массив объектов, где каждый объект представляет новую страницу
    {
      path: '/',
      component: Home,
    },
    {
      path: '/todos',
      component: () => import('../views/Todos.vue'), // lazy-loading, динамичесий импорт
    },
  ],
});

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
//   },
// ];

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;
