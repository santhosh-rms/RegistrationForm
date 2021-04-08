<template>
  <div class="myTabClass">
    <h1 class="headTag">Add your company details</h1>
    <h4 class="headTag2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </h4>
    <div class="content">
      <div class="paddingContent">
        <div class="row">
          <div class="imageWrapper"></div>
          <h4 class="imageContent">Upload your company logo</h4>
        </div>
        <p class="titleTag">Company Name</p>
        <v-text-field
          cols="92"
          sm="55"
          md="7"
          class="textTag"
          single-line
          outlined
        ></v-text-field>
        <p class="titleTag">Email id</p>
        <v-text-field
          cols="92"
          sm="55"
          md="7"
          class="textTag"
          single-line
          outlined
        ></v-text-field>
        <p class="titleTag">Job Title</p>
        <v-text-field
          cols="92"
          sm="55"
          md="7"
          class="textTag"
          single-line
          outlined
        ></v-text-field>
        <p class="titleTag">Years of Experience</p>
        <v-text-field
          cols="92"
          sm="55"
          md="7"
          class="textTag"
          single-line
          outlined
        ></v-text-field>
        <v-container class="px-0" fluid>
          <v-checkbox
            v-model="checkbox"
            :label="`Checkbox 1: ${checkbox.toString()}`"
          ></v-checkbox>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: true,
    };
  },
  name: "CompanyDetails",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleTag {
  margin-bottom: 9px;
  margin-top: 30px;
  text-align: left;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 0ch;
  /* identical to box height */
  color: rgba(10, 9, 9, 0.6);
}
.textTag {
  height: 40px;
  width: 448;
}
.imageWrapper {
  height: 80px;
  width: 80px;
  background: #f8f9fa;
  border-radius: 40px;
  border: 1px dashed rgba(46, 75, 100, 0.1);
}
.imageContent {
  left: 34.8%;
  margin-left: 15px;
  text-align: center;
  margin-top: 30px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #ed5901;
}
.paddingContent {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
}
.myTabClass {
  position: absolute;
  width: 1280px;
  height: 790px;
  left: 0px;
  right: 0px;
  top: 60px;
  background: #f1f1f1;
  mix-blend-mode: normal;
}
.headTag {
  position: absolute;
  width: 425px;
  height: 43px;
  left: 438px;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  border-width: 1px;
  color: #0a0909;
}
.headTag2 {
  left: 395px;
  margin-top: 60px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  /* identical to box height */

  text-align: center;

  color: rgba(10, 9, 9, 0.8);
}
.content {
  position: absolute;
  width: 508px;
  height: 585px;
  left: 386px;
  top: 150px;
  background: #ffffff;
  border-radius: 3px;
}
</style>
