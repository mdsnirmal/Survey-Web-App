import {createStore} from "vuex";

const store  = createStore({
  state: {
    user: {
      data: { name : 'Zura'}, //to check whether my store state works without an issues
      token: null
    }
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {}
})
export  default store;

