export default {
  strict: true, // No mutations outside of the store handlers
  state: {
    companyname: '',
    emailId: '',
    jobtitle: '',
    exp: 0,
  },
  getters: {
    companynameGetters(state) {
      return state.companyname;
    },
    emailIdGetters(state) {
      return state.emailId;
    },
    jobtitleGetters(state) {
      return state.jobtitle;
    },
    expGetters(state) {
      return state.exp;
    },
  },
  mutations: {
    companynameMutation(state, companyname) {
      state.companyname = companyname;
    },
    emailIdMutation(state, emailId) {
      state.emailId = emailId;
    },
    jobtitleMutation(state, jobtitle) {
      state.jobtitle = jobtitle;
    },
    expMutation(state, exp) {
      state.exp = exp;
    },
  },
  actions: {
    companyName(context, companyname) {
      context.commit('companynameMutation', companyname);
    },
    emailID(context, emailId) {
      context.commit('emailIdMutation', emailId);
    },
    jobTitle(context, jobtitle) {
      context.commit('jobtitleMutation', jobtitle);
    },
    experrience(context, exp) {
      context.commit('expMutation', exp);
    },
  },
};
