export default {
  strict: true, // No mutations outside of the store handlers
  state: {
    personalDetails: { name: '', country: '', region: '', Phone: '' },
    HeadingTitle: 'Add your personal details',
  },

  getters: {
    personalDetailsGetters: ({ personalDetails }) => personalDetails,
    personalDetailsHeading: ({ HeadingTitle }) => HeadingTitle,
  },

  mutations: {
    personalDetailsMutation: (state, personalDetails) => {
      state.personalDetails = personalDetails;
    },
    personalDetailsHeadingTitleMutation: (state, HeadingTitle) => {
      state.HeadingTitle = HeadingTitle;
    },
  },
  actions: {
    personalDetailsAction: ({ commit }, personalDetails) => {
      commit('personalDetailsMutation', personalDetails);
    },
    actionOne({ commit }, HeadingTitle) {
      this.dispatch('actionTwo', HeadingTitle); // moduleName/action
    },
    actionTwo({ commit }, HeadingTitle) {
      commit('personalDetailsHeadingTitleMutation', HeadingTitle);
    },
  },
};
