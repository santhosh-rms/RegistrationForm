<template>
  <v-text-field
    class="pickerStyle"
    single-line
    outlined
    dense
    v-model.trim="pname"
  ></v-text-field>
</template>
<script>
export default {
  name: "TextInput",
  props: {
    pname: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
