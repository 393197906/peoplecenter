// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/css/app.less'   // 自定义样式
import 'animate.css'
import iView from 'iview'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(iView);

Vue.http.options.xhr = {withCredentials: true}

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next()
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
});

Vue.prototype.$const = {
  phoneV: /^1[34578]\d{9}$/, //手机验证正则
  emailV: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, //邮箱验证规则,
  pageSize:1
};

//错误处理
Vue.prototype.doError = (err) => {
  app.$Notice.error({
    title: '错误',
    desc: err
  });
};
//成功提示
Vue.prototype.doSuccess = (info) => {
  app.$Notice.success({
    title: '成功',
    desc: info
  });
};


/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});




