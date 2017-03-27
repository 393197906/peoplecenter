import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import userInfo  from './module/userInfo'
import goods  from './module/goods'


Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules:{
    userInfo,
    goods
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})




