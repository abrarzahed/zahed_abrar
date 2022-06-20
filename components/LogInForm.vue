<template>
  <div>
    <h2 class="mb-4">Log In</h2>
    <v-form ref="form" v-model="valid">
      <v-text-field
        :rules="emailRules"
        dark
        filled
        label="Email"
        required
        v-model.trim="email"
        type="text"
      ></v-text-field>
      <v-text-field
        :rules="passRules"
        dark
        filled
        label="Password"
        required
        v-model.trim="pass"
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        block
        color="primary"
        class="mr-4"
        @click="login"
      >
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* 
      project
    */
      email: "",
      pass: "",

      /* 
      rules
    */
      valid: true,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      passRules: [(v) => !!v || "Enter password"],
    };
  },
  methods: {
    login() {
      console.log("logged in");
    },
  },
};
</script>

<style></style>
