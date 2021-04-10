<template>
  <v-app>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>@nagoos/vue-image-picker</v-toolbar-title>
    </v-toolbar>

    <ImagePicker v-model="images">
      <v-flex xs4 md3>
        <img :src="placeholderImage" width="100%" height="100%">
      </v-flex>
    </ImagePicker>
  </v-app>
</template>

<script>
import Vue from "vue";
import { ImagePicker, imageUploadingStates } from "@nagoos/vue-image-picker";
import differenceby from "lodash.differenceby";
import TWEEN from "@tweenjs/tween.js";
import placeholderImage from "./assets/placeholder-img.jpg";

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  name: "App",
  components: {
    ImagePicker
  },
  data() {
    return {
      placeholderImage,
      images: [],
      activeImageUploads: {}
    };
  },
  methods: {
    fakeUpload(key) {
      Vue.set(this.activeImageUploads, key, {
        progress: 0,
        state: imageUploadingStates.NEW
      });

      const imageUploadObj = { progress: 0 };
      const randomDelayTime = randomRange(100, 1500);
      const randomUploadTime = randomRange(1000, 3000);

      new TWEEN.Tween(imageUploadObj)
        .to({ progress: 100 }, randomUploadTime)
        .delay(randomDelayTime)
        .easing(TWEEN.Easing.Quadratic.In)
        .onStart(() => {
          this.activeImageUploads[key].state = imageUploadingStates.UPLOADING;
        })
        .onUpdate(({ progress }) => {
          this.activeImageUploads[key].progress = progress;
        })
        .onComplete(() => {
          this.activeImageUploads[key].state = imageUploadingStates.COMPLETE;
        })
        .start();
    },
    fakeUploadAnimate() {
      // TWEEN.getAll().forEach(tween => tween.update());
      TWEEN.update();
      window.requestAnimationFrame(() => this.fakeUploadAnimate());
    }
  },
  watch: {
    images(newImages, oldImages) {
      const newlyAddedImages = differenceby(
        newImages,
        oldImages,
        image => image.key
      );
      newlyAddedImages.forEach(image => this.fakeUpload(image.key));
    }
  },
  mounted() {
    window.requestAnimationFrame(() => this.fakeUploadAnimate());
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
