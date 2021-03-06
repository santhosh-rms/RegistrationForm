export default {
  strict: true, // No mutations outside of the store handlers
  state: {
    companyname: '',
    emailId: '',
    jobtitle: '',
    exp: '',
  },
  getters: {
    companynameGetters: ({ companyname }) => companyname,
    emailIdGetters: ({ emailId }) => emailId,
    jobtitleGetters: ({ jobtitle }) => jobtitle,
    expGetters: ({ exp }) => exp,
  },
  mutations: {
    companynameMutation: (state, companyname) => {
      state.companyname = companyname;
    },
    emailIdMutation: (state, emailId) => {
      state.emailId = emailId;
    },
    jobtitleMutation: (state, jobtitle) => {
      state.jobtitle = jobtitle;
    },
    expMutation: (state, exp) => {
      state.exp = exp;
    },
  },
  actions: {
    companyName: ({ commit }, companyname) => {
      commit('companynameMutation', companyname);
    },
    emailID: ({ commit }, emailId) => {
      commit('emailIdMutation', emailId);
    },
    jobTitle: ({ commit }, jobtitle) => {
      commit('jobtitleMutation', jobtitle);
    },
    experrience: ({ commit }, exp) => {
      commit('expMutation', exp);
    },
  },
};
