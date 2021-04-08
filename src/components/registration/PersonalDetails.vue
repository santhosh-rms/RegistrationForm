<template>
  <div class="myTabClass">
    <h1 class="headTag">{{ msg }}</h1>
    <h4 class="headTag2">{{ head }}</h4>
    <div id="content">
      <div class="align">
        <div>
          <p class="titleTag">Full Name</p>
          <div>
            <v-text-field  class="textInpuBox" label="sc" single-line outlined></v-text-field>
          </div>
        </div>
        <div class="topPaddingStyles">
          <p class="titleTag">Gender</p>
          <div class="radio-toolbar">
            <input type="radio" id="radio1" name="radios" value="all" checked />
            <label for="radio1">Male</label>

            <input type="radio" id="radio2" name="radios" value="false" />
            <label for="radio2">Female</label>

            <input type="radio" id="radio3" name="radios" value="true" />
            <label for="radio3">Others</label>
          </div>
        </div>
        <div class="textInpuBox topPaddingStyle">
          <p class="titleTag">Country</p>
          <!-- <v-select
            v-model="select"
            :items="countries"
            label="Select"
            item-text="name"
            single-line
            outlined
          >
            <template v-slot:item="slotProps">
              <i :class="['mr-2', 'em', slotProps.item.flag]"></i>
              {{ slotProps.item.name }}
            </template>
          </v-select> -->
          <country-select
            v-model="country"
            :country="country"
            topCountry="US"
            class="pickerStyle"
          />
        </div>
        <div class="textInpuBox topPaddingStyle">
          <p class="topPaddingStyl">State</p>
          <region-select
            v-model="region"
            :country="country"
            :region="region"
            class="pickerStyle"
          />
        </div>
        <p class="topPaddingStyl">Phone</p>
        <div class="textInpuBox">
          <vue-tel-input v-model="value"></vue-tel-input>
        </div>
        <div class="textInpuBox">
          <button class="buttonStyle">Next</button>
        </div>
      </div>
      <div class="row loginContent">
        <p class="loginContentText">Already have an account?</p>
        <p class="login">Log in</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalDetails",
  data: () => ({
    country: "",
    region: "",
  }),
  methods: {
    onSelect({ name, iso2, dialCode }) {
      this.countrysss = name;
      console.log(name, iso2, dialCode);
    },
  },
  props: {
    msg: String,
    head: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: #0a0909;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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
.align {
  padding-left: 30px;
  margin-top: 30px;
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
  line-height: 43px;
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
  height: 40px;
  width: 448px;
  width: 448px;
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
}

.radio-toolbar label {
  display: inline-block;
  background: #ffffff;
  width: 89px;
  text-align: center;
  height: 40px;
  margin-right: 15px;
  align-self: center;
  background: #ffffff;
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;

  font-family: Lato;
  font-style: normal;
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
  margin-top: 70px;
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
  margin-top: 40px;
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
#content {
  position: absolute;
  width: 508px;
  height: 585px;
  left: 386px;
  top: 150px;
  background: #ffffff;
  border-radius: 3px;
}
</style>
