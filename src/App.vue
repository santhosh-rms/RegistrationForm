<template>
  <div id="app">
 
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <PersonalDetails
      msg="Add your personal details"
      head="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    /> -->
    <!-- <CompanyDetails/> -->
    <!-- <OtpVerify /> -->
    <!-- <div id='nav'>
      <router-link to="/">PersonalDetails</router-link>
      <router-link to="/companydetails">CompanyDetails</router-link>
       <router-link to="/otpverify">otpverify</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import PersonalDetails from "./components/registration/PersonalDetails";
// import CompanyDetails from "./components/registration/CompanyDetails";
// import OtpVerify from "./components/registration/OtpVerify";
export default {
  name: "App",
  components: {
    // PersonalDetails,
    // CompanyDetails
    // OtpVerify,
  },
};
</script>

<style>
#app {
  text-align: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 850px;
  background: #f1f1f1;
  mix-blend-mode: normal;
}

@font-face {
  font-family: "Lato";
  src: local("Lato"), url(./fonts/Lato/Lato-Bold.ttf) format("truetype");
}
</style>
