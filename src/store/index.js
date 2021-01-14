import Vue from "vue";
import Vuex from "vuex";
import user from './user';
import lawyers from './lawyers';
import orders from './orders'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    lawyers,
    orders
  }
});
