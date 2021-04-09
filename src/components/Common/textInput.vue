<template>
  <div>
    <v-text-field
      class="pickerStyle"
      single-line
      outlined
      dense
      v-model.trim="$v.companyName.$model"
      :class="{
        'is-invalid': $v.companyName.$error,
        'is-valid': !$v.companyName.$invalid,
      }"
    ></v-text-field>
    <div class="errorStyle">
      <p v-if="!$v.companyName.required">First name is required.</p>
      <p v-if="!$v.companyName.minLength">
        First name must have at least
        {{ $v.companyName.$params.minLength.min }} letters.
      </p>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
    name: 'TextInput',
    props: {
    companyName: String
  },
  validations: {
    name: {
      required,
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
    },
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
