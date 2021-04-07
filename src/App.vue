<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <PersonalDetails msg="Add your personal details" head="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
  </div>
</template>

<script>
import PersonalDetails from "./components/registration/PersonalDetails";

export default {
  name: "App",
  components: {
    PersonalDetails,
  },
};
</script>

<style>
#app {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 850px;
  background: #f1f1f1;
  mix-blend-mode: normal;
}
@font-face {
  font-family: "Lato";
  src: local("Lato"),
   url(./fonts/Lato/Lato-Bold.ttf) format("truetype");
}
</style>
