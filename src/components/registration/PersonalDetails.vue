<template>
  <form class="navBarstyle" @submit.prevent="submit">
    <div class="toppaddingstyle flexContent">
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
          <div>
            <country-select
              v-model="country"
              :country="country"
              class="pickerTextStyle"
              topCountry="US"
            />
          </div>
          <div>
            <span
              v-if="!$v.country.required && $v.country.$dirty"
              class="errorStyleCountry"
              >Country is required.</span
            >
          </div>
        </div>
        <div class="textInpuBox topPaddingStyleConutry">
          <p class="topPaddingStyl">State</p>
          <div>
            <region-select
              v-model="region"
              :country="country"
              :region="region"
              class="pickerTextStyle"
            />
          </div>
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
          <div  class="errorStyle">
            <span
              v-if="!$v.Phone.required && $v.Phone.$dirty"
               class="text-danger"
            >
              Phone number is required.
            </span>
            <span
              v-if="! $v.Phone.minLength"
              class="text-danger"
            >
              Type Valid Mobile Number.
              {{ $v.Phone.$params.minLength.min }} letters.
            </span>
          </div>
        </div>
        <div class="textInpuBox">
          <v-btn
           class="buttonStyle"
            @click="submitForm"
            type="submit"
            color=#ed5901
            :disabled="submitStatus === 'PENDING'"
          >
            
            <label  class="buttonLabelStyle">Next!</label>
          </v-btn>
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
import { mapActions, mapGetters } from "vuex";
import {
  required,
  minLength,
  maxLength,
  alpha,
  numeric,
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
      minLength: maxLength(13),
    },
  },
  computed: {
    ...mapGetters([
      "profilenameGetters",
      "profileCountryGetters",
      "profileRegionGetters",
      "profilePhoneGetters",
    ]),
  },
  created: function () {
    this.name = this.profilenameGetters;
    this.country = this.profileCountryGetters;
    this.region = this.profileRegionGetters;
    this.Phone = this.profilePhoneGetters;
  },
  methods: {
    ...mapActions([
      "profileCountry",
      "profileName",
      "profileRegion",
      "profilePhone",
    ]),
    onTextChange(event) {
      this.companyname(event.target.value);
    },
    onSelect({ name, iso2, dialCode }) {
      this.countrysss = name;
      console.log(name, iso2, dialCode);
    },
    forward() {
      this.$router.push("/companydetails");
    },
    submitForm() {
      this.$v.$touch();
      // this.companyname= this.name;
      this.profileName(this.name);
      this.profileCountry(this.country);
      this.profileRegion(this.region);
      this.profilePhone(this.Phone);
      // consol.log(this.$store.state.name)
      if (
        (this.name !== "") &
        (this.country !== "") &
        (this.country !== "") &
        (this.region !== "") &
        (this.Phone !== "")
      ) {
        console.log(`Name: ${this.companyname},`);
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
.align {
  padding-left: 1.875rem;
  margin-top: 1.875rem;
}

.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
}

.pickerStyle {
  height: 2.5rem;
  width: 28rem;
  font-family: Lato;
  color: #0a0909;
  font-size: 0.8125rem;
  background: #ffffff;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 0.187rem;
}

.pickerTextStyle {
  font-size: 0.812rem;
  height: 2.5rem;
  width: 28rem;
  display: flex;
  background: #ffffff;
  border: 1px solid #cecece;
  border-radius: 3px;
  padding-top: 0.1rem;
  font-family: Lato;
  padding-left: 0.5rem;
  background: #ffffff;
}

.headTag2 {
  left: 24.6rem;
  margin-top: 3.75rem;
  font-family: Lato;
  font-size: 1rem;
  text-align: center;
  color: rgba(10, 9, 9, 0.8);
}

.titleTag {
  height: 1.125rem;
  left: 0%;
  margin-bottom: 0.56rem;
  right: 85.04%;
  top: calc(50% - 1.125rem / 2 - 1.531rem);
  text-align: left;
  font-family: Lato;
  font-size: 0.93rem;
  margin-left: 0ch;
  line-height: 1.125rem;
  color: rgba(10, 9, 9, 0.6);
}
.radio-toolbar input[type="radio"] {
  display: none;
  top: 0.625rem;
}

.radio-toolbar label {
  display: inline-block;
  padding-top: 0.625rem;
  background: #ffffff;
  width: 5.56rem;
  text-align: center;
  height: 2.5rem;
  margin-right: 0.93rem;
  background: #ffffff;
  border: 0.062rem solid #ececec;
  border-radius: 0.187rem;
  font-size: 0.93rem;
}

#radio-toolbar-button {
  top: 1.25rem;
}

.radio-toolbar input[type="radio"]:checked + label {
  background: rgba(237, 89, 1, 0.1);
  color: #ed5901;
}

.loginContent {
  margin-top: 2.8rem;
  text-align: center;
  justify-content: center;
}
.loginContentText {
  font-family: Lato;
  font-size: 0.93rem;
  color: rgba(10, 9, 9, 0.6);
}

.login {
  font-family: Lato;
  font-size: 15px;
  color: #ed5901;
  margin-left: 5px;
}

.topPaddingStyle {
  margin-top: 4.87rem;
  height: 0.93rem;
  left: 0%;
  right: 85.04%;
  text-align: left;
  font-family: Lato;
  font-size: 0.93rem;
  margin-left: 0ch;
  color: rgba(10, 9, 9, 0.6);
}

.topPaddingStyleConutry {
  margin-top: 4.18rem;
  height: 1.12rem;
  left: 0%;
  right: 85.04%;
  text-align: left;
  font-family: Lato;
  font-size: 0.93rem;
  margin-left: 0ch;
  color: rgba(10, 9, 9, 0.6);
}

.topPaddingStyl {
  margin-top: 4.37rem;
  margin-bottom: 0.625rem;
  height: 1.12rem;
  left: 0%;
  right: 85.04%;
  text-align: left;
  font-family: Lato;
  font-size: 0.93rem;
  margin-left: 0ch;
  line-height: 0.93rem;
  /* identical to box height */
  color: rgba(10, 9, 9, 0.6);
}
.topPaddingStyles {
  margin-top: 0.93rem;
  height: 1.12rem;
  left: 0%;
  right: 85.04%;
  text-align: left;
  font-family: Lato;
  font-size: 0.93rem;
  margin-left: 0ch;
  color: rgba(10, 9, 9, 0.6);
}
.content {
  position: absolute;
  width: 31.75rem;
  height: 37rem;
  left: 24.12rem;
  top: 13rem;
  background: #ffffff;
  border-radius: 0.187rem;
}
</style>
