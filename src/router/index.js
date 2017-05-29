import Vue from 'vue';
import Router from 'vue-router';
import PeopleList from '@/components/PeopleList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PeopleList',
      component: PeopleList,
    },
  ],
});
