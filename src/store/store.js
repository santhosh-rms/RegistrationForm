import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    strict: true, // No mutations outside of the store handlers
    state: {
        name: ""
      },
      getters: {
          companyname (state) {
            return state.name
          }
      },
      mutations: {
        companyname (state, name) {
          state.name= name
        }
      },
      actions: {
        companyname (context,name) {
          context.commit('companyname',name)
        }
      },

});
