import Vue from 'vue';
import Router from 'vue-router';
import PeopleList from '@/components/PeopleList';
import Person from '@/components/Person';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/people/',
    },
    {
      path: '/people/',
      name: 'PeopleList',
      component: PeopleList,
    },
    {
      path: '/people/:id',
      name: 'Person',
      component: Person,
    },
  ],
});
