export default {
  strict: true, // No mutations outside of the store handlers
  state: {
    name: '',
    country: '',
    region: '',
    Phone: 0,
  },
  getters: {
    profilenameGetters:(state)=> {
      return state.name;
    },
    profileCountryGetters:(state)=> {
      return state.country;
    },
    profileRegionGetters:(state)=> {
      return state.region;
    },
    profilePhoneGetters:(state)=> {
      return state.Phone;
    },
  },
  // getters: {
  //   getSelectedReleaseOption: ({ releaseOption }) => releaseOption,
  // },
  // changeReleaseSkip: ({ commit }, skip) => {
  //   commit('setReleaseSkip', skip);
  // },
  mutations: {
    profilenameMutation: (state, name) => {
      state.name = name;
    },
    profilecountryMutation: (state, country) => {
      state.country = country;
    },
    profileregionMutation: (state, region) => {
      state.region = region;
    },
    profilePhoneMutation: (state, Phone) => {
      state.Phone = Phone;
    },
  },
  actions: {
    profileName: ({ commit }, name) => {
      commit('profilenameMutation', name);
    },
    profileCountry: ({ commit }, country) => {
      commit('profilecountryMutation', country);
    },
    profileRegion: ({ commit }, region) => {
      commit('profileregionMutation', region);
    },
    profilePhone: ({ commit }, Phone) => {
      commit('profilePhoneMutation', Phone);
    },
  },
};
