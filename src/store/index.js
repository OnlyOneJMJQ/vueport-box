import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import network from './network'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    network
  }
})
