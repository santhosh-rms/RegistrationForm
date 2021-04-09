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
          dense
          class="textTag"
          single-line
          outlined
          v-model.trim="$v.companyname.$model"
          :class="{
            'is-invalid': $v.companyname.$error,
            'is-valid': !$v.companyname.$invalid,
          }"
        ></v-text-field>
        <div class="errorStyle">
          <p v-if="!$v.companyname.required">Company name is required.</p>
          <p v-if="!$v.companyname.minLength">
            Company name must have at least
            {{ $v.companyname.$params.minLength.min }} letters.
          </p>
        </div>
        <p class="titleTag">Email id</p>
        <v-text-field
          cols="92"
          sm="55"
          md="7"
          class="textTag"
          single-line
          dense
          outlined
          v-model.trim="$v.emailId.$model"
          :class="{
            'is-invalid': $v.emailId.$error,
            'is-valid': !$v.emailId.$invalid,
          }"
        ></v-text-field>
        <div class="errorStyle">
          <p v-if="!$v.emailId.required">Email id is required.</p>
        </div>
        <p class="titleTag">Job Title</p>
        <v-text-field
          cols="92"
          sm="55"
          dense
          md="7"
          class="textTag"
          single-line
          outlined
          v-model.trim="$v.jobtitle.$model"
          :class="{
            'is-invalid': $v.jobtitle.$error,
            'is-valid': !$v.jobtitle.$invalid,
          }"
        ></v-text-field>
        <div class="errorStyle">
          <p v-if="!$v.jobtitle.required">Job Title is required.</p>
        </div>
        <p class="titleTag">Years of Experience</p>
        <v-text-field
          cols="92"
          sm="55"
          md="7"
          class="textTag"
          dense
          single-line
          v-model.trim="$v.exp.$model"
          :class="{
            'is-invalid': $v.exp.$error,
            'is-valid': !$v.exp.$invalid,
          }"
          outlined
        ></v-text-field>
        <div class="errorStyle">
          <p v-if="!$v.exp.required">Years of Experience is required.</p>
        </div>
        <!-- <v-container class="px-0" fluid>
          <v-checkbox
            v-model="checkbox"
            :label="`Checkbox 1: ${checkbox.toString()}`"
          ></v-checkbox>
        </v-container> -->
        <div class="row loginContent">
          <input type="checkbox" class="checkboxStyle" />
          <p class="loginContentText">I accept the</p>
          <p class="login">Terms and Conditions</p>
        </div>
        <div>
          <button class="buttonStyleBack">Back</button>
          <button class="buttonStyle">Send Otp</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  data: () => ({
    checkbox: true,
    companyname: "",
    emailId: "",
    jobtitle: "",
    exp: "",
  }),
  validations: {
    companyname: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(10),
    },
    emailId: {
      required,
    },
    jobtitle: {
      required,
    },
    exp: {
      required,
    },
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
.checkboxStyle {
  margin-top: 0.2rem;
}
.imageWrapper {
  height: 80px;
  width: 80px;
  background: #f8f9fa;
  border-radius: 40px;
  border: 1px dashed rgba(46, 75, 100, 0.1);
}
.flex {
  flex-direction: row;
}
.buttonStyle {
  color: #ffffff;
  height: 40px;
  width: 333px;
  margin-left: 5px;
  background: #ed5901;
  border-radius: 3px;
}
.buttonStyleBack {
  background-color: #ffffff;
  height: 40px;
  width: 97px;
  border-radius: 3px;
  margin-top: 25px;
  background: #f4f6f7;
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
.loginContent {
  margin-top: 40px;
  margin-left: 0.2rem;
}
.loginContentText {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 0.4rem;
  color: rgba(10, 9, 9, 0.6);
}
.login {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #ed5901;
  margin-left: 5px;
}
.paddingContent {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
}
.myTabClass {
  position: absolute;
  width: 1280px;
  height: 900px;
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
  height: 80%;
  left: 386px;
  top: 150px;
  background: #ffffff;
  border-radius: 3px;
}
</style>