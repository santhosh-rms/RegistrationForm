<template>
  <div>
    <div class="navBarstyle">
      <div class="toppaddingstyle">
        <label class="navBarLabelCount">1</label>
        <label class="navBarLabel">Personal Details</label>
        <label class="navBarLabelCount">2</label>
        <label class="navBarLabel">Company Details</label>
        <label class="navBarLabelCountPersonal">3</label>
        <label class="navBarLabelActive">Email Verification</label>
      </div>
    </div>
    <div class="myTabClass">
      <h1 class="headTag">Enter your OTP</h1>
      <h4 class="headTag2">
        For your security, we need to verify your identity. We sent a 5-digit
      </h4>
      <h4 class="headTag3">code to name@domain.com. Please enter it below.</h4>
      <!-- <h4 class="headTag3">code to name@domain.com. Please enter it below.</h4> -->
      <div class="content">
        <p class="titleTag">Enter your code</p>
        <div
          style="display: flex; flex-direction: row; justify-content: center"
        >
          <v-otp-input
            ref="otpInput"
            input-classes="otp-input"
            separator="-"
            :num-inputs="4"
            :should-auto-focus="true"
            :is-input-num="true"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
          />
        </div>
        <div>
          <button @click="back" class="buttonStyleBack">Back</button>
          <button  @click="postApi" class="buttonStyle">Verify</button>
        </div>
        <hr class="hrStyle" />
        <h1 class="headTag5">
          Didn’t receive the email? Check your spam filter for an email
        </h1>
        <div class="row emailstyle">
          <h1 class="headTag6">from</h1>
          <h1 class="headTag6">name@domain.com</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  data: () => ({
    checkbox: true,
    companyname: "",
    emailId: "",
    jobtitle: "",
    exp: "",
  }),

  //   created() {
  //   // Simple POST request with a JSON body using axios
  //   const article = {   name: "morpheus",
  //   job: "leader" };
  //   axios.post("https://reqres.in/api/users", article)
  //     .then(response => this.articleId = response.data.id);
  // },
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
  methods: {
      postApi(){
     const article = {   name: "morpheus",
    job: "leader" };
    axios.post("https://reqres.in/api/users", article)
      .then(response => this.articleId = response.data.id);
  },
    back() {
      // this.$router.go(-1);
      this.$router.push("/companydetails");
    },
    handleOnComplete(value) {
      console.log("OTP completed: ", value);
    },
    handleOnChange(value) {
      console.log("OTP changed: ", value);
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
  },
  name: "OtpVerify",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hrStyle {
  border: 1px solid #ececec;
  margin-top: 2.5rem;
}
.emailstyle {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}
.otp-input {
  width: 4rem;
  height: 3rem;
  padding: 8px;
  margin: 0 10px;
  font-size: 20px;
  background: #ffffff;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 3px;
  text-align: center;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.titleTag {
  margin-bottom: 9px;
  margin-top: 30px;
  text-align: left;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 1.8rem;
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
.headTag5 {
  left: 395px;
  margin-top: 30px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  /* identical to box height */

  text-align: center;

  color: rgba(10, 9, 9, 0.6);
}
.headTag6 {
  left: 395px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  text-align: center;
  color: #ed5901;
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
.headTag3 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  /* identical to box height */

  text-align: center;

  color: rgba(10, 9, 9, 0.8);
}
.buttonStyle {
  color: #ffffff;
  height: 40px;
  width: 250px;
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

.content {
  position: absolute;
  width: 24rem;
  height: 20rem;
  left: 440px;
  top: 150px;
  background: #ffffff;
  border-radius: 3px;
}
</style>