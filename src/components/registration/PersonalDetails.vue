<template>
  <div id="myTabClass">
    <h1 id="headTag">{{ msg }}</h1>
    <h4 id="headTag2">{{ head }}</h4>
    <div id="content">
      <div id="align">
        <p id="titleTag">Full Name</p>
        <input id="input" v-model="message">
      </div>
    </div>
  </div>
</template>

<script>
import './inputBoxControl.css';
export default {
  name: "PersonalDetails",
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
#myTabClass {
  position: absolute;
  width: 1280px;
  height: 790px;
  left: 0px;
  right: 0px;
  top: 60px;
  background: #f1f1f1;
  mix-blend-mode: normal;
}
#align {
padding-left: 30px;
}
#headTag {
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

  color: #0a0909;
}
#input {
    padding: 0px 5px;
    margin-bottom: 30px;
    border: 1px solid #CECECE;
    background-color: #ffffff;
    border-radius: 3px;
    font-size: 15px;
    float: left;
    width: 450px;
    height: 40px;
}
#headTag2 {
  position: absolute;
  width: 491px;
  height: 18px;
  left: 395px;
  top: 50px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;

  color: rgba(10, 9, 9, 0.8);
}

#titleTag {
  height: 18px;
  left: 0%;
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
