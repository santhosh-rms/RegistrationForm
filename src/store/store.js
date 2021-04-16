import Vue from 'vue';
import Vuex from 'vuex';
import profileDetails from './modules/profileDetails';
import companyDetails from './modules/companyDetails';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profileDetails,
    companyDetails
  },
});
