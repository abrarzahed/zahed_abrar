<template>
  <div>
    <v-form ref="form" v-model="isFormValid">
      <v-text-field
        height="60"
        solo
        dark
        type="text"
        label="Your Name *"
        placeholder="Jon Doe"
        :rules="nameRules"
      ></v-text-field>
      <v-text-field
        height="60"
        solo
        dark
        type="text"
        label="Your Email"
        placeholder="jon@example.com"
        :rules="emailRules"
      ></v-text-field>
      <v-textarea
        :rules="messaageRules"
        solo
        dark
        type="text"
        label="Message"
        rows="4"
      ></v-textarea>

      <v-btn :disabled="!isFormValid" dark block color="#59B984" x-large
        >Submit</v-btn
      >
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFormValid: true,
      nameRules: [(v) => !!v || "Name is required *"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      messaageRules: [(v) => !!v || "This field is required *"],
    };
  },
};
</script>

<style></style>
