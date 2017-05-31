import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/people/',
    },
    {
      path: '/people/',
      name: 'PeopleList',
      component: () => import('../components/PeopleList.vue'),
    },
    {
      path: '/people/:id',
      name: 'Person',
      component: () => import('../components/Person.vue'),
    },
  ],
});
