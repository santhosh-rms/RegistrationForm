<template>
  <div id="app">
    <div class="navBar">
      <div class="toppaddingstyle">
        <label class="navBarLabelCount">1</label>
        <label class="navBarLabel">Personal Details</label>
        <label class="navBarLabelCount">2</label>
        <label class="navBarLabel">Company Details</label>
        <label class="navBarLabelCount">3</label>
        <label class="navBarLabel">Email Verification</label>
      </div>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <PersonalDetails
      msg="Add your personal details"
      head="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    />
    <!-- <CompanyDetails/> -->
    <!-- <OtpVerify /> -->
  </div>
</template>

<script>
import PersonalDetails from "./components/registration/PersonalDetails";
//import CompanyDetails from "./components/registration/CompanyDetails";
// import OtpVerify from "./components/registration/OtpVerify";
export default {
  name: "App",
  components: {
    PersonalDetails,
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
.navBar {
  display: flex;
  background: #2e4b64;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding-bottom: 2.5rem;
}
.toppaddingstyle {
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navBarLabelCount {
  color: rgba(255, 255, 255, 0.7);
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  border-radius: 15px;
  background-color: #28435a;
}
.navBarLabel {
  color: rgba(255, 255, 255, 0.7);
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  margin-right: 110px;
  font-size: 15px;
  margin-left: 10px;
}
.navBarTrack {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  border-radius: 15px;
  background-color: #28435a;
}
@font-face {
  font-family: "Lato";
  src: local("Lato"), url(./fonts/Lato/Lato-Bold.ttf) format("truetype");
}
</style>
