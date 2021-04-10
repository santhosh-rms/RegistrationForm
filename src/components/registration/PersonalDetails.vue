<template>
  <form class="navBarstyle" @submit.prevent="submit">
    <div class="toppaddingstyle">
      <label class="navBarLabelCountPersonal">1</label>
      <label class="navBarLabelActive">Personal Details</label>
      <label class="navBarLabelCount">2</label>
      <label class="navBarLabel">Company Details</label>
      <label class="navBarLabelCount">3</label>
      <label class="navBarLabel">Email Verification</label>
    </div>
    <div class="myTabClass">
      <h1 class="headTag">Add your personal details</h1>
      <h4 class="headTag2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h4>
    </div>

    <div class="content">
      <div class="align">
        <div>
          <p class="titleTag">Full Name</p>
          <v-text-field
            class="pickerStyle"
            single-line
            outlined
            dense
            v-model.trim="$v.name.$model"
          ></v-text-field>
          <div class="errorStyle">
            <span v-if="!$v.name.required && $v.name.$dirty" class="text-danger"
              >Name is required!</span
            >
            <span v-if="!$v.name.alpha && $v.name.$dirty" class="text-danger"
              >Name is required!</span
            >
            <p v-if="!$v.name.minLength">
              First name must have at least
              {{ $v.name.$params.minLength.min }} letters.
            </p>
          </div>
        </div>

        <div class="topPaddingStyles">
          <p class="titleTag">Gender</p>
          <div class="radio-toolbar">
            <input type="radio" id="radio1" name="radios" value="all" checked />
            <label class="genderDesign" for="radio1">Male</label>

            <input type="radio" id="radio2" name="radios" value="false" />
            <label for="radio2">Female</label>

            <input type="radio" id="radio3" name="radios" value="true" />
            <label for="radio3">Others</label>
          </div>
        </div>

        <div class="textInpuBox topPaddingStyleConutry">
          <p class="titleTag">Country</p>
          <country-select
            v-model="country"
            :country="country"
            topCountry="US"
            class="pickerStyle"
          />
          <div>
            <span
              v-if="!$v.country.required && $v.country.$dirty"
              class="errorStyleCountry"
              >Country is required.</span
            >
          </div>
        </div>
        <div class="textInpuBox topPaddingStyle">
          <p class="topPaddingStyl">State</p>
          <region-select
            v-model="region"
            :country="country"
            :region="region"
            class="pickerStyle"
          />
          <div>
            <span
              v-if="!$v.region.required && $v.region.$dirty"
              class="errorStyleCountry"
              >State is required.</span
            >
          </div>
        </div>
        <p class="topPaddingStyl">Phone</p>
        <div class="textInpuBox">
          <vue-tel-input class="pickerStyle" v-model="Phone"></vue-tel-input>
          <div>
            <p
              v-if="!$v.Phone.required && $v.Phone.$dirty"
              class="errorStyleCountry"
              >Phone number is required.</p
            >
            <p
              v-if="!$v.Phone.numeric && $v.Phone.$dirty"
              class="errorStyleCountry"
              >Type Proper Mobile Number.</p
            >
          </div>
        </div>
        <div class="textInpuBox">
          <button
          class="buttonStyle"
            @click="submitForm"
            type="submit"
            :disabled="submitStatus === 'PENDING'"
          >
            Next!
          </button>
        </div>
        <p class="typo__p" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
      </div>
      <div class="row loginContent">
        <p class="loginContentText">Already have an account?</p>
        <p class="login">Log in</p>
      </div>
    </div>
  </form>
</template>
<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  numeric
} from "vuelidate/lib/validators";

export default {
  name: "PersonalDetails",
  data: () => ({
    country: "",
    region: "",
    name: "",
    Phone: 0,
    submitStatus: null,
  }),
  validations: {
    name: {
      required,
      alpha,
      minLength: minLength(4),
      maxLength: maxLength(10),
    },
    country: {
      required,
    },
    region: {
      required,
    },
    Phone: {
      required,
      numeric,
    },
  },
  methods: {
    onSelect({ name, iso2, dialCode }) {
      this.countrysss = name;
      console.log(name, iso2, dialCode);
    },
    forward() {
      this.$router.push("/companydetails");
    },
    submitForm() {
      this.$v.$touch();
      if ((this.name !== "") & (this.country !== "") & (this.country !== "") & (this.region !== "") & (this.Phone !== "") ) {
        console.log(`Name: ${this.name},`); 
        this.$router.push("/companydetails");
      }
    },
  },
  props: {
    msg: String,
    head: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.myTabClass {
  position: absolute;
  width: 1280px;
  height: 790px;
  left: 0px;
  right: 0px;
  top: 80px;
  background: #f1f1f1;
  mix-blend-mode: normal;
}
.align {
  padding-left: 30px;
  margin-top: 30px;
}

.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
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
.textInpuBox {
  height: 40px;
  width: 448px;
  border-radius: 3px;
  margin-bottom: 9;
}
.pickerStyle {
  height: 41px;
  width: 448px;
  color: #0a0909;
  font-size: 13px;
  font-weight: 700;
  background: #ffffff;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 3px;
}
#input {
  padding: 0px 5px;
  margin-bottom: 30px;
  border: 1px solid #cecece;
  background-color: #ffffff;
  border-radius: 3px;
  font-size: 15px;
  float: left;
  width: 450px;
  height: 40px;
}
.buttonStyle {
  color: #ffffff;
  height: 45px;
  width: 450px;
  margin-top: 25px;
  background: #ed5901;
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

.titleTag {
  height: 18px;
  left: 0%;
  margin-bottom: 9px;
  right: 85.04%;
  top: calc(50% - 18px / 2 - 24.5px);
  text-align: left;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 0ch;
  line-height: 18px;
  /* identical to box height */
  color: rgba(10, 9, 9, 0.6);
}
.radio-toolbar input[type="radio"] {
  display: none;
  top: 10px;
}

.radio-toolbar label {
  display: inline-block;
  padding-top: 10px;
  background: #ffffff;
  width: 89px;
  text-align: center;
  height: 40px;
  margin-right: 15px;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 3px;
  font-weight: 600;
  font-size: 15px;
}

#radio-toolbar-button {
  top: 20px;
}

.radio-toolbar input[type="radio"]:checked + label {
  background: rgba(237, 89, 1, 0.1);
  color: #ed5901;
}

.loginContent {
  margin-top: 45px;
  text-align: center;
  justify-content: center;
}
.loginContentText {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
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
.topPaddingStyle {
  margin-top: 75px;
  height: 18px;
  left: 0%;

  right: 85.04%;
  text-align: left;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 0ch;
  color: rgba(10, 9, 9, 0.6);
}
.topPaddingStyleConutry {
  margin-top: 67px;
  height: 18px;
  left: 0%;

  right: 85.04%;
  text-align: left;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 0ch;
  color: rgba(10, 9, 9, 0.6);
}

.topPaddingStyl {
  margin-top: 70px;
  margin-bottom: 10px;
  height: 18px;
  left: 0%;
  right: 85.04%;
  text-align: left;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 0ch;
  line-height: 18px;
  /* identical to box height */
  color: rgba(10, 9, 9, 0.6);
}
.topPaddingStyles {
  margin-top: 15px;
  height: 18px;
  left: 0%;
  right: 85.04%;
  text-align: left;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 0ch;
  color: rgba(10, 9, 9, 0.6);
}
.content {
  position: absolute;
  width: 508px;
  height: 40rem;
  left: 386px;
  top: 13rem;
  background: #ffffff;
  border-radius: 3px;
}
</style>
