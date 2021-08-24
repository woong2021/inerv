import Vue from 'vue';
import VueRouter from 'vue-router';
import NoticeList from '../components/content/irs/user/NoticeList.vue';
import AuthorityList from '../components/content/system/security/AuthorityManagement.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/notice',
    },
    //IRS
    {
      path: '/notice',
      component: NoticeList,
    },
    //시스템관리
    {
      path: '/authority',
      component: AuthorityList,
    }
  ]
});