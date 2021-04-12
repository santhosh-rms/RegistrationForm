import Vue from 'vue';
import Router from 'vue-router';
import PersonalDetails from './components/registration/PersonalDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonalDetails',
      component: PersonalDetails,
      
    },
    {
      path: '/companydetails',
      name: 'CompanyDetails',
      component: () => import('../src/components/registration/CompanyDetails'),
    },
    {
      path: '/otpverify',
      name: 'OtpVerify',
      component: () => import('../src/components/registration/OtpVerify'),
    },
  ],
});
