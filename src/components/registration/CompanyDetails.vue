<template>
  <form class="navBarstyle" @submit.prevent="submit">
    <div class="toppaddingstyle flexContent">
      <label class="navBarLabelCount">1</label>
      <label class="navBarLabel">Personal Details</label>
      <label class="navBarLabelCountPersonal">2</label>
      <label class="navBarLabelActive">Company Details</label>
      <label class="navBarLabelCount">3</label>
      <label class="navBarLabel">Email Verification</label>
    </div>
    <!-- <img id="blah" alt="your image" width="100" height="100" />

    <input
      type="file"
      onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"
    /> -->

    <div class="myTabClass-c">
      <h1 class="headTag">Add your company details</h1>
      <!-- <h1>This is User {{$route.query.name}}</h1> -->
      <h4 class="headTag2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h4>
      <div class="content">
        <div class="paddingContent">
          <div class="row">
            <img class="imageWrapper" id="blah" width="100" height="100" />
            <div id="fakeDiv">
              <input
                type="file"
                id="selectedFile"
                hidden
                onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"
              />
            </div>
            <div class="topImageContent">
              <span
                onclick="document.getElementById('selectedFile').click();"
                id="buttonImage"
                class="imageContent"
                >Upload your company logo</span
              >
            </div>
          </div>
          <p class="titleTag-C">Company Name</p>
          <v-text-field
            cols="92"
            sm="55"
            md="7"
            dense
            class="textTag"
            single-line
            outlined
            v-model.trim="$v.companyname.$model"
          ></v-text-field>
          <div class="errorStyle">
            <span
              v-if="!$v.companyname.required && $v.companyname.$dirty"
              class="text-danger"
              >Company name is required.</span
            >
            <p v-if="!$v.companyname.minLength">
              Company name must have at least
              {{ $v.companyname.$params.minLength.min }} letters.
            </p>
          </div>
          <p class="titleTag-C">Email id</p>
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
            <span
              v-if="
                (!$v.emailId.required || !$v.emailId.email) && $v.emailId.$dirty
              "
              class="text-danger"
              >Valid Email is required!</span
            >
          </div>
          <p class="titleTag-C">Job Title</p>
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
            <span
              v-if="!$v.jobtitle.required && $v.jobtitle.$dirty"
              class="text-danger"
              >Job Title is required</span
            >
          </div>
          <p class="titleTag-C">Years of Experience</p>
          <v-hover>
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
          </v-hover>
          <div class="errorStyle">
            <span v-if="!$v.exp.required && $v.exp.$dirty" class="text-danger"
              >Years of Experience is required</span
            >
            <p
              v-if="!$v.exp.numeric && $v.jobtitle.$dirty"
              class="errorStyleCountry"
            >
              Type Number Only
            </p>
          </div>
          <!-- <v-container class="px-0" fluid>
          <v-checkbox
            v-model="checkbox"
            :label="`Checkbox 1: ${checkbox.toString()}`"
          ></v-checkbox>
        </v-container> -->

          <div class="row loginContent form-check">
            <v-container class="px-0 row" fluid>
              <p for="agree">
                <input
                  id="agree"
                  type="checkbox"
                  class="checkStyle"
                  value="agree"
                  v-model="checked"
                />
              </p>
              <p class="loginContentText">I accept the</p>
              <p class="login">Terms and Conditions</p>
            </v-container>
          </div>
          <div class="buttonPadding">
            <button @click="back" class="buttonStyleBack">
              <label class="buttonStyleGlobal">Back</label>
            </button>
            <button
              :disabled="!checked"
              @click="submitForm"
              v-bind:class="[!checked ? 'buttonStyleDisable' : 'buttonStyle']"
            >
              Send Otp
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  required,
  minLength,
  maxLength,
  email,
  numeric,
} from "vuelidate/lib/validators";
export default {
  name: "CompanyDetails",
  data: () => ({
    checkbox: true,
    companyname: "",
    emailId: "",
    checked: false,
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
      email,
    },
    jobtitle: {
      required,
    },
    exp: {
      required,
      numeric,
    },
  },
  computed: {
    ...mapGetters([
      "companynameGetters",
      "emailIdGetters",
      "jobtitleGetters",
      "expGetters",
    ]),
  },
  created: function () {
    this.companyname = this.companynameGetters;
    this.emailId = this.emailIdGetters;
    this.jobtitle = this.jobtitleGetters;
    this.exp = this.expGetters;
  },
  methods: {
    ...mapActions(["companyName", "emailID", "jobTitle", "experrience"]),
    onSelect({ name, iso2, dialCode }) {
      this.countrysss = name;
      console.log(name, iso2, dialCode);
    },
    back() {
      // this.$router.go(-1);
      this.$router.push("/");
    },
    forward() {
      this.$router.push("/otpverify");
    },
    submitForm() {
      this.$v.$touch();
      this.companyName(this.companyname);
      this.emailID(this.emailId);
      this.jobTitle(this.jobtitle);
      this.experrience(this.exp);
      console.log(
        `Name: ${this.checked},${this.companyname},${this.emailId},${this.jobtitle},${this.exp}`
      );
      if (
        (this.checked !== false) &
        (this.companyname !== "") &
        (this.emailId !== "") &
        (this.jobtitle !== "") &
        (this.exp !== "")
      ) {
        console.log(
          `Name: ${this.checked},${this.companyname},,${this.emailId},,${this.jobtitle},,${this.exp}`
        );
        this.$router.push("/otpverify");
      }
    },
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkStyle {
  height: 1.5rem;
  width: 1.5rem;
  background-color: brown;
}
.buttonPadding {
  margin-top: 1.2rem;
}
.checkContent {
  padding-bottom: 3rem;
}
.input:focus {
  outline: unset;
  border: 1px solid brown;
}
input[type="checkbox"] {
  outline-offset: -2px;
}
.textTag {
  height: 2.5rem;
  width: 28rem;
  font-family: Lato;
}
.checkboxStyle {
  margin-top: 0.2rem;
}
.imageWrapper {
  height: 5rem;
  width: 5rem;
  background: #f8f9fa;
  border-radius: 2.5rem;
  border: 1px dashed rgba(46, 75, 100, 0.1);
}

.flex {
  flex-direction: row;
}

.buttonStyle {
  color: #ffffff;
  height: 2.5rem;
  font-family: Lato;
  width: 20.8rem;
  padding-bottom: 0.321rem;
  margin-top: 1.56rem;
  margin-left: 0.1rem;
  background: #ed5901;
  border-radius: 0.18rem;
}

.buttonStyleDisable {
  color: #ffffff;
  height: 2.5rem;
  margin-top: 1.56rem;
  font-family: Lato;
  width: 20.8rem;
  padding-bottom: 0.321rem;
  margin-left: 0.1rem;
  background: #f2a97c;
  border-radius: 0.18rem;
}

.buttonStyleBack {
  background-color: #ffffff;
  height: 2.5rem;
  width: 6.5rem;
  text-align: center;
  border-radius: 0.18rem;
  /* margin-top: 1.56rem; */
  /* bottom: 2rem; */
  font-family: Lato;
  margin-right: 0.15rem;
  padding-bottom: 0.321rem;
  background: #f4f6f7;
}
.topImageContent {
  padding-top: 2rem;
}
.imageContent {
  display: flex;
  left: 34.8%;
  margin-left: 1rem;
  top: 1.87rem;
  font-family: Lato;
  font-size: 15px;
  color: #ed5901;
}

.loginContent {
  margin-top: 1.7rem;
  margin-left: 0.2rem;
}
.loginContentText {
  font-family: Lato;
  font-size: 1rem;
  margin-top: 0.2rem;
  margin-left: 0.6rem;
  color: rgba(10, 9, 9, 0.6);
}
.borderStyle {
  border-color: brown;
}
.login {
  font-family: Lato;
  margin-top: 0.2rem;
  font-size: 1rem;
  color: #ed5901;
  margin-left: 5px;
}
.paddingContent {
  margin-left: 1.87rem;
  margin-right: 1.87rem;
  margin-top: 1.87rem;
}

.headTag2 {
  left: 24.6rem;
  margin-top: 3.75rem;
  font-family: Lato;
  font-size: 1rem;
  text-align: center;
  color: rgba(10, 9, 9, 0.8);
}

.content {
  position: absolute;
  width: 31.75rem;
  height: 79%;
  left: 24.125rem;
  top: 7.5rem;
  background: #ffffff;
  border-radius: 0.187rem;
}
</style>