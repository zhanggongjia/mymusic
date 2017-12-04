import Vue from 'vue';
import Router from 'vue-router';
import mymusic from '../components/mymusic/mymusic';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/mymusic',
      component: mymusic
    }
  ]
});
