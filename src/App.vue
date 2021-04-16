<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
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
