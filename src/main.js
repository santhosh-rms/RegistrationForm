import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import vueCountryRegionSelect from 'vue-country-region-select'
import VueCountryCode from "vue-country-code-select";
import VueTelInput from 'vue-tel-input'
import OtpInput from "@bachdgvn/vue-otp-input";

import Vuelidate from 'vuelidate'
import './styles/common.css';
import 'vue-tel-input/dist/vue-tel-input.css'

Vue.config.productionTip = false
Vue.use(VueCountryCode);
Vue.use(vueCountryRegionSelect)
Vue.use(VueTelInput)
Vue.use(Vuelidate)
Vue.component("v-otp-input", OtpInput);


new Vue({
  vuetify,
  
  render: h => h(App),
  data: {
    select: null,
    countries: [
      {
        name: "Andorra",
        flag: "em-flag-ad"
      },
      {
        name: "Arab Emirates",
        flag: "em-flag-ae"
      },
      {
        name: "Afghanistan",
        flag: "em-flag-af"
      },
      {
        name: "Antigua & Barbuda",
        flag: "em-flag-ag"
      },
      {
        name: "Albania",
        flag: "em-flag-al"
      },
      {
        name: "Anguilla",
        flag: "em-flag-ai"
      }
   ],
  }
}).$mount('#app')
