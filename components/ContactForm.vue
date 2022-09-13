<template>
  <div>
    <v-form id="form" ref="form" v-model="isFormValid">
      <v-text-field
        v-model.trim="formData.name"
        height="60"
        solo
        dark
        type="text"
        label="Your Name *"
        placeholder="Jon Doe"
        :rules="nameRules"
      ></v-text-field>
      <v-text-field
        v-model.trim="formData.email"
        height="60"
        solo
        dark
        type="text"
        label="Your Email"
        placeholder="jon@example.com"
        :rules="emailRules"
      ></v-text-field>
      <v-textarea
        v-model.trim="formData.message"
        :rules="messaageRules"
        solo
        dark
        type="text"
        label="Message"
        rows="4"
      ></v-textarea>

      <v-btn
        @click="handleSubmit"
        :disabled="!isFormValid"
        dark
        block
        color="#59B984"
        x-large
        >Submit</v-btn
      >
    </v-form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      isFormValid: true,
      nameRules: [(v) => !!v || "Name is required *"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      messaageRules: [(v) => !!v || "This field is required *"],
    };
  },
  methods: {
    handleSubmit(e) {
      // console.log("contact form submitting", this.formData);
      // try {
      //   emailjs.sendForm(
      //     "service_vgnbtf4",
      //     "template_9u0bevv",
      //     "#form",
      //     "WZnsGOPzp8huFIKWK",
      //     this.formData
      //   );
      // } catch (error) {
      //   console.log({ error });
      // }
      // Reset form field
      // this.name = ''
      // this.email = ''
      // this.message = ''
    },
  },
  mounted() {
    // console.log("email", this.emailjs);
  },
};
</script>

<style></style>
