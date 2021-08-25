import Vue from 'vue';
import VueRouter from 'vue-router';
import TestList from '../components/content/irs/user/TestList.vue';
import StatisticsView from '../components/content/irs/manager/StatisticsView.vue';
import AuthorityList from '../components/content/system/security/AuthorityManagement.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/test',
    },
    //IRS
    {
      path: '/test',
      component: TestList,
    },
    {
      path: '/statistics',
      component: StatisticsView,
    },
    //시스템관리
    {
      path: '/authority',
      component: AuthorityList,
    }
  ]
});