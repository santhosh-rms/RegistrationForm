export default {
  strict: true, // No mutations outside of the store handlers
  state: {
    name: '',
    country: '',
    region: '',
    Phone: 0,
  },
  getters: {
    profilenameGetters(state) {
      return state.name;
    },
    profileCountryGetters(state) {
      return state.country;
    },
    profileRegionGetters(state) {
      return state.region;
    },
    profilePhoneGetters(state) {
      return state.Phone;
    },
  },
  mutations: {
    profilenameMutation(state, name) {
      state.name = name;
    },
    profilecountryMutation(state, country) {
      state.country = country;
    },
    profileregionMutation(state, region) {
      state.region = region;
    },
    profilePhoneMutation(state, Phone) {
      state.Phone = Phone;
    },
  },
  actions: {
    profileName(context, name) {
      context.commit('profilenameMutation', name);
    },
    profileCountry(context, country) {
      context.commit('profilecountryMutation', country);
    },
    profileRegion(context, region) {
      context.commit('profileregionMutation', region);
    },
    profilePhone(context, Phone) {
      context.commit('profilePhoneMutation', Phone);
    },
  },
};
