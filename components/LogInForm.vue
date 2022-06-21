<template>
  <main>
    <div class="login">
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
          @click="login"
          :loading="loading"
        >
          Login
        </v-btn>
        <v-btn block color="primary" @click="logout"> logout </v-btn>
      </v-form>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      pass: "",
      loading: false,

      valid: true,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      passRules: [(v) => !!v || "Enter password"],
    };
  },
  mounted() {
    // if (this.authUser) {
    //   this.$router.push("/");
    // }
    const user = getAuth();
    onAuthStateChanged(user, (usr) => {
      console.log(usr);
    });
    // console.log(this.authUser);
  },
  methods: {
    ...mapActions("auth/auth", ["updateAuthUser"]),
    login() {
      this.loading = true;
      const authUser = getAuth();
      signInWithEmailAndPassword(authUser, this.email, this.pass)
        .then((userObj) => {
          this.updateAuthUser(userObj.user);
          this.loading = false;
          this.$router.push("/");
        })
        .catch((err) => console.log(err.message));
    },
    logout() {
      const authUser = getAuth();
      signOut(authUser)
        .then(() => {
          this.updateAuthUser(null);
        })
        .catch((err) => console.log(err.message));
    },
  },
  computed: {
    ...mapGetters("auth/auth", ["authUser"]),
  },
};
</script>

<style>
.login {
  max-width: 500px;
  margin: 100px auto;
  border: 2px solid #222;
  padding: 2rem;
}
</style>
